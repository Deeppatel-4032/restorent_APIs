import { ingredientType_model } from "../../models/ingredient/ingredientType_model.js";

const getIngredientTypeData = async (req, res) => {

    const IngredientType = await ingredientType_model.find();
    res.send({
        status: 200,
        message: "Ingredient Type All Data",
        data: IngredientType
    });
}

const postIngredientTypeData = async (req, res) => {
    const { description } = req.body;
    const newIngredientType = new ingredientType_model({
        description
    });

    const addIngredientType = await newIngredientType.save();

    res.send({
        status: 201,
        message: "Ingredient Type Added",
        data: addIngredientType
    });
}

export { getIngredientTypeData, postIngredientTypeData };