import mongoose from "mongoose";

const ingredientTypeSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    }
});

export const ingredientType_model = mongoose.model("ingredientType", ingredientTypeSchema);
