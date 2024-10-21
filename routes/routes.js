import { Router } from "express";
import customer_Route from "./customer_Route.js";
const router = Router();



router.use("/customer", customer_Route);




export default router;