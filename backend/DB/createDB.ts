import { client } from "./postgre";


const Client = client;
async function ab() {
    const result = await Client.query(
        `CREATE TABLE users(
         id SERIAL PRIMARY KEY,
         firstName VARCHAR(50) NOT NULL,
         lastName VARCHAR(50) NOT NULL,
         email VARCHAR(250) UNIQUE NOT NULL,
         password TEXT NOT NULL,
         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
     );`
    )
    console.log(result);
    console.log("Data table created suceessfully")

}
ab();
