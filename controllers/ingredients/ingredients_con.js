import { ingredient_model } from "../../models/ingredient/ingredient_model.js";

const getingredientData = async (req, res) => {

    const ingredient_DataFind = await ingredient_model.find({}).populate("ingredientType");

    console.log("ingredient_DataFind", ingredient_DataFind);
    
    res.json({
        status: 200,
        message: "Ingredient All Data",
        data: ingredient_DataFind
    })
}

const postingredientData = async (req, res) => {

    const { ingredientName, ingredientType } = req.body;

    const newingredient = new ingredient_model({
        ingredientName,
        ingredientType
    });

    const addingredient = await newingredient.save();

    res.json({
        status: 201,
        message: "Ingredient Data successfully added.....!!",
        data: addingredient
    })
}

export { getingredientData, postingredientData };