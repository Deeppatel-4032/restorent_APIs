import { Router } from "express";
import { getTableData_Con, postTableData_Con } from "../controllers/table_con.js"
const table_Route = Router();

table_Route.get("/", getTableData_Con);
table_Route.post("/", postTableData_Con);

export default table_Route;