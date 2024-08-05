import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://apsara:apsara831@dbase.67s8tdm.mongodb.net/food-del')
    .then(() =>console.log("DB Connected"));
}