import {Client} from 'pg'
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

export const client=new Client({
    host: process.env.host,
    user:process.env.user,
    port:5432,
    password:process.env.password,
    database:process.env.name
})

client.connect()
.then(()=>{
    console.log("Connection successful");
})
.catch((r:any)=>{
    console.log("Unable to connect",r)
}) 