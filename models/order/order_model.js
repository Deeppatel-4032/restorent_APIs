import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderNumber : {
        type : Number,
        required : true
    },
    order_details : {
        type : String,
        required : true,
    },
    booking_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "booking",
        required : true
    },
    table_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "table",
        required : true
    },
})

export const order_model = mongoose.model("order", orderSchema);