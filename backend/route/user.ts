import express from "express"
import { string, z } from "zod"
import { client } from "../DB/postgre";
import { redis } from "../conection/redis";
import { resend } from "../conection/resend";
import jwt from "jsonwebtoken"
import { secret_key } from "../key";
import bcrypt from "bcrypt"
import { auth } from "./middleware";
import { PrismaClient } from "../generated/prisma"
import { Request, Response } from "express";
import multer from "multer"
import { s3 } from "./upload";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();



const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const prisma = new PrismaClient();
const salt: number = 10
export const userRouter = express.Router();
const signupschema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string()
})
const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()

})
type signupbody = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
type verificationbody = {
    otp: number,
    email: string
}
type updatedbody = {
    firstname?: string,
    lastname?: string,
    bio?: string,
    skills?: string,
    github?: string,
    portfolio?: string,
    email: string


}
let updateSchema = z.object({
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    bio: z.string().optional(),
    skills: z.string().optional(),
    github: z.string().optional(),
    portfolio: z.string().optional(),
    email: z.string().email()
})
function otp(): number {
    return Math.floor(100000 + Math.random() * 900000)
}

const Client = client;
userRouter.post("/signup", async (req, res): Promise<any> => {
    const body: signupbody = req.body;
    const re = signupschema.safeParse(body);
    if (!re.success) {
        return res.status(500).json({
            success: false,
            msg: "Invalid input"
        })
    }
    const ne = await Client.query(`
        SELECT * FROM users WHERE email=$1`, [body.email])
    if (ne.rows.length != 0) {
        return res.json({
            success: false,
            msg: "User already exist"
        })
    }
    let password = body.password;
    let hashedPass = await bcrypt.hash(password, salt);
    body.password = hashedPass;
    let OTP = otp();
    const updatedBody = {
        ...body,
        otp: OTP
    }
    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: body.email,
            subject: "verification code for skilmatch",
            text: "Otp fro your login is " + OTP
        })
        await redis.setEx(updatedBody.email, 300, JSON.stringify(updatedBody))
        return res.status(200).json({
            success: true,
            email: updatedBody.email
        })
    }
    catch (err: unknown) {
        console.error(err)
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })

    }
})
userRouter.post("/verification", async function (req, res): Promise<any> {
    try {
        const Payload: verificationbody = req.body;
        console.log(Payload.email + "  payload email in verification       ")
        const redispayload = await redis.get(Payload.email);
        if (!redispayload) {
            return res.status(400).json({
                success: false,
                msg: "Expired otp"
            })
        }
        const parsedData = JSON.parse(redispayload)
        if (Payload.otp != parsedData.otp) {
            return res.status(401).json({
                success: false,
                msg: "Invalid otp"
            })
        }
        await Client.query(`
        INSERT INTO users(firstName,lastName,email,password) VALUES($1,$2,$3,$4)`, [parsedData.firstName, parsedData.lastName, parsedData.email, parsedData.password])
        const token = jwt.sign({
            email: parsedData.email
        }, secret_key)
        return res.status(200).json({
            success: true,
            token: token,
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }
})
userRouter.post("/signin", async (req: any, res: any): Promise<any> => {
    let body = req.body;
    let result = signinSchema.safeParse(body)
    if (!result.success) {
        return res.json({
            msg: "Invalid input"
        })
    }
    let payload = await Client.query(`
        SELECT * FROM users WHERE email=$1`, [body.email])
    if (payload.rows.length === 0) {
        return res.status(404).json({
            msg: "User not found"
        })
    }
    let isValid = await bcrypt.compare(body.password, payload.rows[0].password)
    if (!isValid) {
        return res.json({
            msg: "Invalid password"
        })
    }
    let token = jwt.sign({
        email: body.email
    }, secret_key)

    return res.json({
        token: token,
        msg: "login sucessfully"
    })

})
interface meget extends express.Request {           //it is for add some entitis, here used in auth middleware when we add email to the req
    email?: string
}

userRouter.get("/me", auth, async function (req: meget, res: any) {
    try {
        let payload = await Client.query(`
        SELECT * FROM users WHERE email = $1`, [req.email])
        if (payload.rows.length === 0) {
            return res.status(404).json({
                msg: "User not found"
            })
        }
        return res.json({
            firstName: payload.rows[0].firstname,
            lastName: payload.rows[0].lastname,
            email: payload.rows[0].email
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Server error"
        })
    }
})

userRouter.post("/update", upload.single("resume"), auth, async function (req: Request, res: Response): Promise<any> {
    try {
        const body: updatedbody = req.body;
        let zodbody = updateSchema.safeParse(body);
        if (!zodbody.success) {
            return res.status(401).json({
                success: false,
                msg: "Invalid input"
            })
        }

        const bucketname = process.env.AWS_BUCKET_NAME!
        const file = req.file

        const command = new PutObjectCommand({
            Bucket: bucketname,
            Key: `users/${body.email}.pdf`,
            Body: file?.buffer,
            ContentType: file?.mimetype,


        })
        const data = await s3.send(command);
        const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/users/${body.email}.pdf`

        console.log(fileUrl)

        const result = await prisma.users.update({
            where: { email: body.email },
            data: {
                firstname: body.firstname,
                lastname: body.lastname,
                bio: body.bio,
                skills: body.skills,
                github: body.github,
                portfolio: body.portfolio,
                resumelink: fileUrl
            }
        })
        return res.status(200).json({
            success: true,
            msg: "Updated sucessfully",
            user: result
        })
    }

    catch (err: unknown) {
        console.error("Update error:", err);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }


})


userRouter.get("/fetchinfo", auth, async (req: meget, res: Response): Promise<any> => {

    const email = req.email;

    if (!email) {
        return res.status(401).json({
            success: false,
            msg: "Unauthorized",
        });
    }

    let result = await prisma.users.findUnique({
        where: {
            email: email
        }
    })
    if (!result) {
        return res.json({
            success: false,
            msg: "User not found"
        })
    }
    return res.status(200).json({
        success: true,
        details: {
            firstname: result.firstname,
            lastname: result.lastname,
            email: result.email,
            bio: result.bio,
            skills: result.skills,
            github: result.github,
            portfolio: result.portfolio,
            resumelink: result.resumelink

        }
    })
})

userRouter.get("/fetchuser", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        const users = await prisma.users.findMany({
            take: 10,
            select: {
                firstname: true,
                lastname: true,
                email: true,
                skills: true
            }
        })
          if(!users){
        return res.status(404).json({
            success:false,
            msg :"User not found"
        })
    }
        return res.status(200).json({
            success: true,
            users: users
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
})
userRouter.get("/searchuser", auth, async (req: meget, res: Response): Promise<any> => {
    const filter:any ={}
   
    if(req.query.skill){
        filter.skills={
            contains:req.query.skill as string,
            mode:"insensitive"
        }
    }
    if(req.query.email){
        filter.email={
            contains:req.query.email as string,
            mode:"insensitive"
        }
    }
    
    try{
    const users = await prisma.users.findMany({
        where:filter,
        take: 10,
        select: {
            firstname: true,
            lastname: true,
            email: true,
            skills: true
        }
    })
    if(!users){
        return res.status(404).json({
            success:false,
            msg :"User not found"
        })
    }
    return res.status(200).json({
        success: true,
        users: users
    })
}
catch (e) {
    return res.status(500).json({
        success: false,
        msg: "Server Error"
    })
}
})
