import mongoose from "mongoose";

const tebleSchema = new mongoose.Schema({
    tebleNumber : {
        type : Number,
        required : true
    },
    teble_details : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        default : "available",
    },
    booking_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "booking",
    }
})

export const teble_model = mongoose.model("table", tebleSchema);