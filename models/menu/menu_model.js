import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    menu_Date : {
        type : Date,
        required : true,
        default : Date.now.toString()
    },
});

export const menu_model = mongoose.model("menu", menuSchema);