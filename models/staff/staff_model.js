import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    }

});

export const staff_model = mongoose.model("staff", staffSchema);