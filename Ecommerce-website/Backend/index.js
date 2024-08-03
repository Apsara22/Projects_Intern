const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
const PORT = process.env.PORT || 8000;

//mongoose db connection
// console.log(process.env.MONGODB_URL)
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to the databse"))
  .catch((err) => console.log(err));

  //Schema
  const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique : true
    },
    password: String,
    confirmPassword: String,
    image: String,
  })

  const userModal = mongoose.model("user", userSchema)

//api
app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const {email} = req.body

  userModel.findOne({email: email}, (err, result)=>{
    console.log(result)
    console.log(err)
})
});



app.listen(PORT, () => console.log("server is running", +PORT));
