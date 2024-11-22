import { Router } from "express";
import { getStaffData, poststaffData } from "../../controllers/staff_Controllers/staff_con.js"
const staff_Route = Router();

staff_Route.get("/", getStaffData);
staff_Route.post("/", poststaffData);

export default  staff_Route;