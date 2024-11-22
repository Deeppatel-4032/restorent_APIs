import { Router } from "express";
import { getMenuData, postMenuData } from "../../controllers/menu_controllers/menu_controller.js";
const menu_Route = Router();

menu_Route.get("/", getMenuData);
menu_Route.post("/", postMenuData);

export default menu_Route;