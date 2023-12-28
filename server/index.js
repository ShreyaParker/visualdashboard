import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv"
import dataRoute from "./routes/dataRoute.js";
dotenv.config()

import connectDB from "./config/db.js";
const port=process.env.PORT;

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use("/api/data", dataRoute)

connectDB().then(()=>console.log("connected to mongo")).catch((e)=>e.message)

app.listen(port,()=>{
    console.log("hello")
})