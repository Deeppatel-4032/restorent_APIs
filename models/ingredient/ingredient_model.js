import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    ingredientName : {
        type : String,
        required : true
    },
    ingredientType : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "ingredientType",
        required : true
    },
   
})

export const ingredient_model = mongoose.model("ingredient", ingredientSchema);