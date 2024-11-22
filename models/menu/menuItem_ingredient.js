import mongoose from "mongoose";

const menuItemIngredientSchema = new mongoose.Schema({

    ingredient_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "ingredient",
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    menu_Item_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "menu_item",
        required : true
    }
});

export const menuItem_ingredient_model = mongoose.model("menu_item_ingredient", menuItemIngredientSchema);