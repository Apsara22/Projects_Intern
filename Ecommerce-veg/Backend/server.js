import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroutes.js";
import userRouter from "./routes/userroutes.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartroutes.js";

//app config
const app = express()
const port = 8000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)


app.get("/", (req, res) =>{
    res.send("API WORking")
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})

//mongodb+srv://apsara:apsara831@dbase.67s8tdm.mongodb.net/?