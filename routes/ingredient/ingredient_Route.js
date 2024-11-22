import { Router } from "express";
import { getingredientData, postingredientData } from "../../controllers/ingredients/ingredients_con.js";

const ingredient_Route = Router();

ingredient_Route.get("/", getingredientData);
ingredient_Route.post("/", postingredientData);

export default ingredient_Route;