import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
  
const db = mongoose.connect(`${process.env.MONGODB_URL}`).then((res) => {
    console.log("DB is Connected.......!!");
}).catch((err) => {
    console.log("DB is not connected........!!", err);
})

export default db;                                   