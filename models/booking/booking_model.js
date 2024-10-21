import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    date : {
        type : Date,
        default : Date.now,
        required : true,
    },
    table_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "table",
        required : true
    },
    customer_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "customer",
        required : true
    },
});

export const booking_model = mongoose.model("booking", bookingSchema);