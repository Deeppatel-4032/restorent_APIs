import mongoose from "mongoose";

const orderMenuItemSchema = new mongoose.Schema({

    order_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "order",
        required : true
    },
    menu_Item_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "menu_item",
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    Comment : {
        type : String,
        required : true,
        default : "No Comment"
    }

});

export const orderMenuItem_model = mongoose.model("order_menu_item", orderMenuItemSchema);