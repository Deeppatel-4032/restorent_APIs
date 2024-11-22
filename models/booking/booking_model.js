import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    date : {
        type : String,
        required : true,
    },
    member : {
        type : Number,
        required : true
    },
    customer_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "customers",
        required : true
    },
    table_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "table",
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "pending",
        enum : ["pending", "cancle", "complete"]
    },
});

export const booking_model = mongoose.model("booking", bookingSchema);