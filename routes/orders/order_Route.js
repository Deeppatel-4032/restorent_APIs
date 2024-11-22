import { Router } from "express";
import { getOrderData, postorderData } from "../../controllers/order_Controllers/order_con.js";

const order_Route = Router();

order_Route.get("/", getOrderData);
order_Route.post("/", postorderData);


export default order_Route;
