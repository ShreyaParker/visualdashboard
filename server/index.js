import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv"
dotenv.config()

import connectDB from "./config/db.js";
const port=process.env.PORT;

const app = express()
app.use(cors())
app.use(bodyParser.json())

connectDB().then(()=>console.log("connected to mongo")).catch((e)=>e.message)

app.listen(port,()=>{
    console.log("hello")
})