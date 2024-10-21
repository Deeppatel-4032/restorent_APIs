import mongoose from "mongoose";

const db = mongoose.connect("mongodb+srv://deeppatel7868:SZxwmkTVlw9xFPGT@restorentcluster0.k8jjd.mongodb.net/restorent_Api").then((res) => {
    console.log("DB is Connected.......!!");
}).catch((err) => {
    console.log("DB is not connected........!!", err);
})

export default db;