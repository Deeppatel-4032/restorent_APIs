import mongoose from "mongoose";

const staff_roelSchema = new mongoose.Schema({
    role : {
        type : String,
        required : true
    },
    role_Description : {
        type : String,
        required : true
    },
    staff_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "staff",
        required : true
    }
})

export const staff_role_model = mongoose.model("staff_role", staff_roelSchema);