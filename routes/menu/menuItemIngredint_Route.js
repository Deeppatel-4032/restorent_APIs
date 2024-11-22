import { Router } from "express";
import { getMenuItemIngredint, postMenuItemIngredint } from "../../controllers/menu_controllers/menuItem_ingredint_con.js";

const menuItemIngredint_Route = Router();

menuItemIngredint_Route.get("/", getMenuItemIngredint);
menuItemIngredint_Route.post("/", postMenuItemIngredint);

export default menuItemIngredint_Route;