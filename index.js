import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import messageRouter from "./Router/messageRouter.js"

const app = express()

dotenv.config({path : "./config.env"})

app.use(cors({
    origin : [process.env.CLIENT_URL],
    methods: ["POST"],
    credentials : true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/message", messageRouter)


app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

mongoose.connect(process.env.MONGO_URI, {
    dbName: "DonationProject"
}).then(()=>{
    console.log("Connected to Database...!!")
}).catch((error)=>{
    console.log("some errpr occured")
})

export default app