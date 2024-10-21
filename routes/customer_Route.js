import { Router } from "express";
import { customerData, getCustomerData } from "../controllers/customore_con.js"
const customer_Route = Router();


customer_Route.get("/", customerData);
customer_Route.post("/", getCustomerData);


export default customer_Route;