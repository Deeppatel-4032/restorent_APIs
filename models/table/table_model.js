import mongoose from "mongoose";

const tebleSchema = new mongoose.Schema({
    tebleNumber : {
        type : Number,
        required : true
    },
    teble_detail : {
        type : String,
        required : true
    },
    teble_seat : {
        type : Number,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "available",
        enum : ["available", "unavailable"]
    }
})

export const teble_model = mongoose.model("table", tebleSchema);