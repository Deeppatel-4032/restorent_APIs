import { Router } from "express";
import { getCustomerData, postCustomerData } from "../controllers/customore_con.js"
const customer_Route = Router();


customer_Route.get("/", getCustomerData);
customer_Route.post("/", postCustomerData);


export default customer_Route;