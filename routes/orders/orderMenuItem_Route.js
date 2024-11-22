import { Router } from "express";
import { getOrderMenuItemData, postOrderMenuItemData } from "../../controllers/order_Controllers/orderMenuItem_Con.js";

const orderMenuItem_Route = Router();

orderMenuItem_Route.get("/", getOrderMenuItemData);
orderMenuItem_Route.post("/", postOrderMenuItemData);

export default orderMenuItem_Route;