import express, { response } from "express"
import { z } from "zod"
import { client } from "../DB/postgre";
import { redis } from "../conection/redis";
import { resend } from "../conection/resend";
import jwt from "jsonwebtoken"
import { secret_key } from "../key";
import bcrypt from "bcrypt"
import { auth } from "./middleware";
import { OAuth2Client } from "google-auth-library";
import { PrismaClient } from "../generated/prisma"
import { Request, Response } from "express";
import multer from "multer"
import { s3 } from "./upload";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import { buffer } from "stream/consumers";
import { Variable } from "lucide-react";
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const prisma = new PrismaClient();
const salt: number = 10
export const userRouter = express.Router();
const googleclient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
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


interface meget extends express.Request {           //it is for add some entitis, here used in auth middleware when we add email to the req
    email?: string
}

/*
const Client = client;userRouter.post("/signup", async (req, res): Promise<any> => {
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
            success:false,
            msg: "Invalid input"
        })
    }
    let payload = await Client.query(`
        SELECT * FROM users WHERE email=$1`, [body.email])
    if (payload.rows.length === 0) {
        return res.status(404).json({
            success:false,
            msg: "User not found"
        })
    }
    let isValid = await bcrypt.compare(body.password, payload.rows[0].password)
    if (!isValid) {
        return res.json({
            success:false,
            msg: "Invalid password"
        })
    }
    let token = jwt.sign({
        email: body.email
    }, secret_key)

    return res.json({
        token: token,
        success:true,
        msg: "login sucessfully"
    })

})


userRouter.get("/me", auth, async function (req: meget, res: any) {
    try {
        let payload = await Client.query(`
        SELECT * FROM users WHERE email = $1`, [req.email])
        if (payload.rows.length === 0) {
            return res.status(404).json({
                success:false,
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
            success:false,
            msg: "Server error"
        })
    }
})*/
userRouter.get("/me", auth, async function (req: Request, res: Response): Promise<any> {
    try {
        const email = (req as any).email;

        const user = await prisma.users.findUnique({
            where: { email },
            select: {
                firstname: true,
                lastname: true,
                email: true
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        }

        return res.json({
            ...user,
            success: true
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        });
    }
});


userRouter.post("/googleauth", async (req: Request, res: Response): Promise<any> => {
    const { credentials } = req.body;

    try {
        const ticket = await googleclient.verifyIdToken({
            idToken: credentials,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) return res.status(400).json({ success: false, msg: "Invalid token" });


        const { sub, email, name, picture, given_name, family_name } = payload;
        if (!email) {
            return res.status(400).json({ success: false, msg: "Google account has no email" });
        }


        const existingUser = await prisma.users.findUnique({
            where: { email },
        });

        if (!existingUser) {
            const firstname = given_name || name?.trim().split(" ")[0] || "User";
            const lastname = family_name || name?.trim().split(" ").slice(1).join(" ") || null;

            let key: string | null = null;

            if (picture) {

                const response = await fetch(picture);
                const buffer = await response.arrayBuffer();
                const contentType = response.headers.get("content-type");


                key = `profile/${email}.${contentType}`;

                const cmd = new PutObjectCommand({
                    Key: key,
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Body: Buffer.from(buffer),
                    ContentType: `image/${contentType}`,

                });

                await s3.send(cmd);
            }

            await prisma.users.create({
                data: {
                    firstname,
                    lastname,
                    email: email,
                    googleid: sub,
                    profilelink: key,
                },
            });
        }

        const token = jwt.sign({ email }, secret_key);

        return res.status(200).json({
            success: true,
            token,
        });

    } catch (err) {
        console.error("Google Auth Error:", err);
        return res.status(500).json({ success: false, msg: "Google login failed" });
    }
});


userRouter.post("/signup", async (req, res): Promise<any> => {
    const body: signupbody = req.body;
    const re = signupschema.safeParse(body);
    if (!re.success) {
        return res.status(500).json({
            success: false,
            msg: "Invalid input"
        });
    }

    const existingUser = await prisma.users.findUnique({
        where: { email: body.email }
    });

    if (existingUser) {
        return res.json({
            success: false,
            msg: "User already exists"
        });
    }

    const hashedPass = await bcrypt.hash(body.password, salt);
    const OTP = otp();

    const updatedBody = {
        ...body,
        password: hashedPass,
        otp: OTP
    };

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: body.email,
            subject: "Verification code for Skillmatch",
            text: "OTP for your login is " + OTP
        });

        await redis.setEx(updatedBody.email, 300, JSON.stringify(updatedBody));

        return res.status(200).json({
            success: true,
            email: updatedBody.email
        });

    } catch (err: unknown) {
        console.error(err);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        });
    }
});

userRouter.post("/verification", async (req, res): Promise<any> => {
    try {
        const Payload: verificationbody = req.body;
        const redispayload = await redis.get(Payload.email);

        if (!redispayload) {
            return res.status(400).json({
                success: false,
                msg: "Expired OTP"
            });
        }

        const parsedData = JSON.parse(redispayload);
        if (Payload.otp !== parsedData.otp) {
            return res.status(401).json({
                success: false,
                msg: "Invalid OTP"
            });
        }

        await prisma.users.create({
            data: {
                firstname: parsedData.firstName,
                lastname: parsedData.lastName,
                email: parsedData.email,
                password: parsedData.password
            }
        });

        const token = jwt.sign({ email: parsedData.email }, secret_key);

        return res.status(200).json({
            success: true,
            token: token
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        });
    }
});

userRouter.post("/signin", async (req: Request, res: Response): Promise<any> => {
    const body = req.body;
    const result = signinSchema.safeParse(body);

    if (!result.success) {
        return res.json({
            success: false,
            msg: "Invalid input"
        });
    }

    const user = await prisma.users.findUnique({
        where: { email: body.email }
    });

    if (!user) {
        return res.status(404).json({
            success: false,
            msg: "User not found"
        });
    }

    const isValid = await bcrypt.compare(body.password, user.password!);

    if (!isValid) {
        return res.json({
            success: false,
            msg: "Invalid password"
        });
    }

    const token = jwt.sign({ email: body.email }, secret_key);

    return res.json({
        token: token,
        email: body.email,
        success: true,
        msg: "Login successfully"
    });
});


userRouter.post(
    "/update",
    upload.fields([
        { name: "resume", maxCount: 1 },
        { name: "profile", maxCount: 1 },
    ]),
    auth,
    async function (req: Request, res: Response): Promise<any> {
        try {
            const body: updatedbody = req.body;
            const zodbody = updateSchema.safeParse(body);
            if (!zodbody.success) {
                return res.status(401).json({
                    success: false,
                    msg: "Invalid input",
                });
            }

            const bucketname = process.env.AWS_BUCKET_NAME!;
            const files = req.files as {
                [fieldname: string]: Express.Multer.File[];
            };
            const file = files["resume"]?.[0];
            const profile = files["profile"]?.[0];

            let profileKey: string | undefined;

            if (profile) {
                const uploaded = await new Promise<any>((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { folder: "skillmatch" },
                        (error, result) => {
                            if (error || !result) return reject(error);
                            resolve(result);
                        }
                    );
                    stream.end(profile.buffer);
                });

                const croppedUrl = cloudinary.url(uploaded.public_id, {
                    width: 300,
                    height: 300,
                    gravity: "face",
                    crop: "thumb",
                    secure: true,
                });

                const croppedImage = await fetch(croppedUrl);
                const croppedBuffer = await croppedImage.arrayBuffer();

                profileKey = `profile/${body.email}.jpg`;

                const profileCommand = new PutObjectCommand({
                    Bucket: bucketname,
                    Key: profileKey,
                    Body: Buffer.from(croppedBuffer),
                    ContentType: "image/jpeg",
                });

                await s3.send(profileCommand);
            }

            if (file) {
                const resumeCommand = new PutObjectCommand({
                    Bucket: bucketname,
                    Key: `resume/${body.email}.pdf`,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                });

                await s3.send(resumeCommand);
            }

            const result = await prisma.users.update({
                where: { email: body.email },
                data: {
                    firstname: body.firstname,
                    lastname: body.lastname,
                    bio: body.bio,
                    skills: body.skills,
                    github: body.github,
                    portfolio: body.portfolio,
                    resumelink: file ? `resume/${body.email}.pdf` : undefined,
                    profilelink: profileKey || undefined,
                },
                select: {
                    firstname: true,
                    lastname: true,
                    bio: true,
                    skills: true,
                    github: true,
                    portfolio: true,
                    resumelink: true,
                    profilelink: true,
                },
            });

            return res.status(200).json({
                success: true,
                msg: "Updated successfully",
                user: result,
            });
        } catch (err: any) {
            console.error("Update error:", err);
            return res.status(500).json({
                success: false,
                msg: "Server error",
            });
        }
    }
);



userRouter.get("/profileurl", auth, async (req: Request, res: Response): Promise<any> => {

    const profilekey = req.query.profilelink as string;


    if (!profilekey) {
        return res.status(404).json({ success: false, msg: "Profile not found" });
    }

    const cmd = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: profilekey
    });

    const profileUrl = await getSignedUrl(s3, cmd, { expiresIn: 86400 });

    return res.status(200).json({ success: true, profileUrl });
});


userRouter.get("/resumeurl", auth, async (req: Request, res: Response): Promise<any> => {



    const resumekey = req.query.resumelink as string

    if (!resumekey) {
        return res.status(404).json({ success: false, msg: "Resume not found" });
    }

    const cmd = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: resumekey
    });

    const resumeUrl = await getSignedUrl(s3, cmd, { expiresIn: 3600 });

    return res.status(200).json({ success: true, resumeUrl });
});



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
    console.log(result.profilelink)
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
            resumelink: result.resumelink,
            profilelink: result.profilelink

        }
    })
})
type userpay = {
    firstname: string,
    lastname: string,
    email: string,
    skills?: string,
    profileurl?: string
}
userRouter.get("/fetchuser", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        const users = await prisma.users.findMany({
            take: 10,
            select: {
                firstname: true,
                lastname: true,
                email: true,
                skills: true,
                profilelink: true
            }
        })
        if (!users) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            })
        }
        const updated = await Promise.all(users.map(async (user) => {
            const profilekey = user.profilelink


            if (profilekey) {
                const cmd = new GetObjectCommand({
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: profilekey
                })
                const profileurl = await getSignedUrl(s3, cmd, { expiresIn: 86400 })
                return { ...user, profileurl: profileurl }


            }
            else return { ...user, profileurl: null }


        }))

        return res.status(200).json({
            success: true,
            users: updated
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
    const filter: any = {}

    if (req.query.skill) {
        filter.skills = {
            contains: req.query.skill as string,
            mode: "insensitive"
        }
    }
    if (req.query.email) {
        filter.email = {
            contains: req.query.email as string,
            mode: "insensitive"
        }
    }

    try {
        const users = await prisma.users.findMany({
            where: filter,
            take: 10,
            select: {
                firstname: true,
                lastname: true,
                email: true,
                skills: true,
                profilelink: true
            }
        })
        if (!users) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
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

userRouter.get("/fetchone", auth, async (req: meget, res: Response): Promise<any> => {

    const { email } = req.query

    if (typeof email !== "string") {
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
        return res.status(404).json({
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
            resumelink: result.resumelink,
            profilelink: result.profilelink

        }
    })
})
type job = {
    jobtitle: string,
    companyname: string,
    jobtype: string,
    location: string,
    salary: number,
    eligibility: string,
    duration: string,
    deadline: Date,
    skills: string,
    aboutjob: string,
    link: string,
    email?: string

}
const uploadjobi = z.object({
    jobtitle: z.string(),
    companyname: z.string(),
    jobtype: z.string(),
    location: z.string(),
    salary: z.number(),
    eligibility: z.string(),
    duration: z.string(),
    deadline: z.coerce.date(),
    skills: z.string(),
    aboutjob: z.string(),
    link: z.string(),
})

userRouter.post("/postjob", auth, async (req: meget, res: Response): Promise<any> => {
    const payload: job = req.body;
    const email: string | null = req.email!
    if (!email) {
        return res.status(401).json({
            success: false,
            msg: "Unauthorized fetch"
        })
    }
    payload.email = email
    const re = uploadjobi.safeParse(payload)

    if (!re.success) {
        return res.status(400).json({
            success: false,
            msg: "Invalid input"
        })
    }


    try {
        await prisma.jobs.create({
            data: {

                jobtitle: payload.jobtitle,
                companyname: payload.companyname,
                jobtype: payload.jobtype,
                location: payload.location,
                salary: payload.salary,
                eligibility: payload.eligibility,
                duration: payload.duration,
                deadline: payload.deadline,
                skills: payload.skills,
                aboutjob: payload.aboutjob,
                link: payload.link,
                email: payload.email!,
            }
        });
        return res.status(200).json({
            success: true,
            msg: "Succefully upload"
        })


    }
    catch (e) {

        console.error(e);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })

    }
})
userRouter.get("/seekjobs", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        let jobs = await prisma.jobs.findMany({
            take: 10,
        })
        return res.json({
            success: true,
            jobs: jobs
        })
    }
    catch (e) {
        console.error(e)
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }
})

userRouter.get("/jobinfo/:id", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        const email: string | null = req.email!
        const jobId = req.params.id;
        if (!email) {
            return res.status(401).json({
                success: false,
                msg: "Unauthorized fetch"
            })
        }
        const info = await prisma.jobs.findUnique({
            where: {
                id: Number(jobId)
            }

        })

        return res.status(200).json({
            success: true,
            job: info
        })
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            msg: "Server error"

        })
    }

})




type sendpayload = {
    receiveremail: string,
    firstname: string,
    lastname: string,
    profilelink?: string,
    lastmessage: string
}


userRouter.get("/userchatlist", auth, async (req: meget, res: Response): Promise<any> => {
    console.log("  in     userchat     ")
    const user: string = req.email!
    if (!user) {
        return res.status(404).json({
            success: false,
            msg: "Invalid email"
        })
    }
    try {
        const allmessage = await prisma.messages.findMany({
            where: {
                OR: [
                    { sender: user },
                    { receiver: user }
                ]
            },
            orderBy: {
                created_at: 'desc'
            }

        })
        const users = new Map<string, string>()
        for (const msg of allmessage) {
            const otheremail = msg.sender === user ? msg.receiver
                : msg.sender
            if (!users.has(otheremail)) {
                users.set(otheremail, msg.content)
            }
        }
        const chatuser: sendpayload[] = []
        for (const [email, message] of users.entries()) {
            const details = await prisma.users.findUnique({
                where: { email: email },
                select: {
                    firstname: true,
                    lastname: true,
                    profilelink: true,

                }

            })
            let profileUrl: string | null = null
            if (details?.profilelink) {
                const cmd = new GetObjectCommand({
                    Bucket: process.env.AWS_BUCKET_NAME!,
                    Key: details.profilelink
                });


                profileUrl = await getSignedUrl(s3, cmd, { expiresIn: 86400 });
            }

            if (details && message.length > 0) {
                chatuser.push({
                    receiveremail: email,
                    firstname: details.firstname,
                    lastname: details.lastname || ".",
                    profilelink: profileUrl!,
                    lastmessage: message
                });

            }
        }
        res.status(200).json({
            success: true,
            users: chatuser

        })
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }
})
type MessagePack = {
    id: number;
    sender: string;
    receiver: string;
    content: string;
    created_at: string;
    isread: boolean;
};

userRouter.get("/getmessage", auth, async (req: meget, res: Response): Promise<void> => {
    try {
        console.log("   in get     ")
        const email: string = req.email!;

        const rawMessages = await prisma.messages.findMany({
            where: {
                OR: [
                    { sender: email },
                    { receiver: email },
                ],
            },
            orderBy: {
                created_at: "asc",
            },
        });

        const formattedMessages: MessagePack[] = rawMessages.map((msg) => ({
            id: msg.id,
            sender: msg.sender,
            receiver: msg.receiver,
            content: msg.content,
            isread: msg.isread,
            created_at: msg.created_at ? msg.created_at.toISOString() : "",
        }));

        res.status(200).json({ success: true, messages: formattedMessages });
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }

})
interface prepost {
    id: number,
    jobtitle: string
    companyname: string
    jobtype: string
    location: string
    salary: number
    eligibility: string
    duration: string
    deadline: Date
    skills: string
    aboutjob: string
    link: string
    email: string

}
userRouter.get("/prepost", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        const email: string | null = req.email!
        if (!email) {
            return res.status(401).json({
                success: false,
                msg: "Unauthorized fetch"
            })

        }
        const jobs = await prisma.jobs.findMany({
            where: {
                email: email
            },
            orderBy: {
                created_at: "desc"
            }
        })
        const prejobs: prepost[] = jobs.map((job) => ({
            id: job.id,
            jobtitle: job.jobtitle,
            companyname: job.companyname,
            jobtype: job.jobtype,
            location: job.location,
            salary: job.salary,
            eligibility: job.eligibility,
            duration: job.duration,
            deadline: job.deadline,
            skills: job.skills,
            aboutjob: job.aboutjob,
            link: job.link,
            email: job.email,

        }))
        return res.status(200).json({
            success: true,
            prepost: prejobs
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }

})
interface jobupdate {
    id: number,
    jobtitle: string,
    companyname: string,
    jobtype: string,
    location: string,
    salary: number,
    eligibility: string,
    duration: string,
    deadline: Date,
    skills: string,
    aboutjob: string,
    link: string,
    email: string
}

userRouter.put("/editjob", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        const email: string | null = req.email!
        if (!email) {
            return res.status(401).json({
                success: false,
                msg: "Unauthorized fetch"
            })
        }
        const updatepack: jobupdate = req.body
        updatepack.email = email
        const result = await prisma.jobs.update({
            data: {
                jobtitle: updatepack.jobtitle,
                companyname: updatepack.companyname,
                jobtype: updatepack.jobtype,
                location: updatepack.location,
                salary: updatepack.salary,
                eligibility: updatepack.eligibility,
                duration: updatepack.duration,
                deadline: updatepack.deadline,
                skills: updatepack.skills,
                aboutjob: updatepack.aboutjob,
                link: updatepack.link,
            },
            where: {
                id: updatepack.id
            }
        })
        return res.status(200).json({
            success: true,
            msg: "Updated"
        })

    }
    catch (e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }

})
userRouter.delete("/deletejob/:id", auth, async (req: meget, res: Response): Promise<any> => {
    console.log("   in delete  ")
    const jobId = req.params.id;
    const userEmail = req.email;

    try {

        const job = await prisma.jobs.findUnique({
            where: { id: Number(jobId) },
        });

        if (!job) {
            return res.status(404).json({ success: false, msg: "Job not found" });
        }

        if (job.email !== userEmail) {
            return res.status(403).json({ success: false, msg: "You are not allowed to delete this job" });
        }


        await prisma.jobs.delete({
            where: { id: Number(jobId) },
        });

        return res.json({ success: true, msg: "Job deleted successfully" });

    } catch (error) {
        console.error("Error deleting job:", error);
        return res.status(500).json({ success: false, msg: "Server error" });
    }
});
userRouter.get("/fetchusercf", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        const email: string | null = req.email!
        const user = await prisma.users.findUnique({
            where: { email },
            select: { codeforce: true }
        })
        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" })
        }
        if (!user.codeforce) {
            return res.status(404).json({
                success: false,
                msg: "Not found codeforce details"
            })
        }
        return res.status(200).json({
            success: true,
            codeforce: user.codeforce
        })
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }
})

userRouter.post("/postusercf", auth, async (req: meget, res: Response): Promise<any> => {
    const email: string | null = req.email!;
    const { userhandle } = req.body;

    if (!userhandle || userhandle.trim().length < 3 || userhandle.trim().length > 24) {
        return res.status(400).json({
            success: false,
            msg: "Invalid handle: Must be between 3 and 24 characters",
        });
    }

    try {
        const user = await prisma.users.findUnique({
            where: { email },
            select: { id: true },
        });

        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }

        const handle = userhandle.trim();


        const userCFInfo = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
        const userData = userCFInfo.data.result[0];


        let contests: number | null = null;
        try {
            const ratingRes = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);
            contests = ratingRes.data.result.length || 0;
        } catch (err: any) {
            if (err.response?.data?.status === "FAILED") {
                contests = 0;
            } else {
                throw err;
            }
        }


        const details = await prisma.codeforce.upsert({
            where: { userid: user.id },
            update: {
                handle,
                rating: userData.rating,
                maxRating: userData.maxRating,
                rank: userData.rank,
                contests,
                lastSynced: new Date(),
            },
            create: {
                handle,
                userid: user.id,
                rating: userData.rating,
                maxRating: userData.maxRating,
                rank: userData.rank,
                contests,
            },
        });

        return res.json({ success: true, details });
    } catch (e: any) {
        console.error("Codeforces fetch error:", e.response?.data || e.message || e);
        return res.status(500).json({
            success: false,
            msg: "Failed to fetch Codeforces data. Check handle validity or try again later.",
        });
    }
});

userRouter.post("/cfrefresh", auth, async (req: meget, res: Response): Promise<any> => {
    try {
        const email = req.email!;


        const user = await prisma.users.findUnique({
            where: { email },
            select: {
                id: true,
                codeforce: {
                    select: { handle: true }
                }
            }
        });

        if (!user || !user.codeforce?.handle) {
            return res.status(400).json({
                success: false,
                msg: "No Codeforces handle found. Please add one first.",
            });
        }

        const handle = user.codeforce.handle;


        const userInfoRes = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
        const userData = userInfoRes.data.result[0];


        let contestCount: number = 0;
        try {
            const ratingRes = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);
            contestCount = ratingRes.data.result.length;
        } catch (err: any) {
            if (err.response?.data?.status === "FAILED") {
                contestCount = 0;
            } else {
                throw err;
            }
        }


        const updated = await prisma.codeforce.update({
            where: { userid: user.id },
            data: {
                rating: userData.rating,
                maxRating: userData.maxRating,
                rank: userData.rank,
                contests: contestCount,
                lastSynced: new Date(),
            },
        });

        return res.status(200).json({
            success: true,
            msg: "Codeforces data refreshed",
            details: updated,
        });

    } catch (err: any) {
        console.error("Refresh error:", err.response?.data || err.message);
        return res.status(500).json({
            success: false,
            msg: "Failed to refresh Codeforces data",
        });
    }
});


userRouter.post("/lc-refresh", auth, async (req: meget, res: Response): Promise<any> => {
  try {
    const email = req.email!;
    const { username } = req.body;

    if (!username || username.trim() === "") {
      return res.status(400).json({ success: false, msg: "Username is required" });
    }

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: {
          username: username
        }
      })
    });

    const json = await response.json();

    if (!json.data || !json.data.matchedUser) {
      return res.status(404).json({ success: false, msg: "User not found on LeetCode" });
    }

    const stats = json.data.matchedUser.submitStats.acSubmissionNum;

    const easy = stats.find((s: any) => s.difficulty === "Easy")?.count || 0;
    const medium = stats.find((s: any) => s.difficulty === "Medium")?.count || 0;
    const hard = stats.find((s: any) => s.difficulty === "Hard")?.count || 0;
    const total = stats.find((s: any) => s.difficulty === "All")?.count || 0;

    const user = await prisma.users.findUnique({
      where: { email },
      select: { id: true }
    });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found in DB" });
    }

    const result = await prisma.leetcode.upsert({
      where: { userid: user.id },
      update: { easy, medium, hard, total },
      create: {
        userid: user.id,
        easy,
        medium,
        hard,
        total
      }
    });

    return res.json({ success: true, details: result });

  } catch (e) {
    console.error("LeetCode Refresh Error:", e);
    return res.status(500).json({ success: false, msg: "Server error during refresh" });
  }
});






