import mongoose from "mongoose";

const menu_ItemSchema = new mongoose.Schema({
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    menu_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "menu",
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "available",
        enum : ["available", "unavailable"]
    }
});

export const menu_item_model = mongoose.model("menu_item", menu_ItemSchema);