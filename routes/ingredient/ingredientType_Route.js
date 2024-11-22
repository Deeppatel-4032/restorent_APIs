import { Router } from "express";
import { getIngredientTypeData, postIngredientTypeData } from "../../controllers/ingredients/ingredientType_model.js"

const ingredientType_Route = Router();

ingredientType_Route.get("/", getIngredientTypeData);
ingredientType_Route.post("/", postIngredientTypeData);


export default ingredientType_Route;