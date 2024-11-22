import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    role_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "staff_role",
        required : true
    }

});

export const staff_model = mongoose.model("staff", staffSchema);