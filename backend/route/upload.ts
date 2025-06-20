import {S3Client} from "@aws-sdk/client-s3"
require ('dotenv').config();
const region= process.env.AWS_REGION

export const s3 = new S3Client({ 
   region,
   credentials:{
    accessKeyId:process.env.AWS_ACCESS_KEY_ID!,
   secretAccessKey:process.env.AWS_SECRET_KEY_ACCESS!
   
   }
})