import { Router } from "express";
import { getMenuItemData, postMenuItemData } from "../../controllers/menu_controllers/menuItem_Controller.js";
const menuItem_Route = Router();

menuItem_Route.get("/", getMenuItemData);
menuItem_Route.post("/", postMenuItemData);

export default menuItem_Route;