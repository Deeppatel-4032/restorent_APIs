import { Router } from "express";
import { getStaffRoleData, postStaffRoleData } from "../../controllers/staff_Controllers/staff_role_con.js"
const staff_role_Route = Router();


staff_role_Route.get("/", getStaffRoleData);
staff_role_Route.post("/", postStaffRoleData);


export default staff_role_Route;