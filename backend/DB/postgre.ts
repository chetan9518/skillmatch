import { Client } from 'pg'

 export const client :any= new Client({
    connectionString:
`postgresql://neondb_owner:npg_A6Niu2jEKvPG@ep-misty-leaf-a8hbm7jh-pooler.eastus2.azure.neon.tech/neondb?sslmode=require`
,
ssl:{
    rejectUnauthorized:false
}})

async function ab(){
    try{
 await client.connect();
 console.log(" neon connected ")
    }
    catch(error:any)
    {
console.log("error " ,error.message)
    }
}
ab();
