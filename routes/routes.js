import { Router } from "express";
import customer_Route from "./customer_Route.js";
import table_Route from "./table_Route.js";
import booking_Route from "./booking_Route.js";
import staff_role_Route from "./staffs/staff_role_Route.js";
import staff_Route from "./staffs/staff_Route.js";
import order_Route from "./orders/order_Route.js";
import orderMenuItem_Route from "./orders/orderMenuItem_Route.js";
import menu_Route from "./menu/menu_Route.js";
import menuItem_Route from "./menu/menuItem_Route.js";
import menuItemIngredint_Route from "./menu/menuItemIngredint_Route.js";
import ingredientType_Route from "./ingredient/ingredientType_Route.js";
import ingredient_Route from "./ingredient/ingredient_Route.js";
const router = Router();



router.use("/customers", customer_Route);
router.use("/tables", table_Route);
router.use("/bookings", booking_Route);
router.use("/staff_role", staff_role_Route);
router.use("/staff", staff_Route);
router.use("/orders", order_Route);
router.use("/orderMenuItem", orderMenuItem_Route);
router.use("/menu", menu_Route);
router.use("/menuItem", menuItem_Route);
router.use("/menuItemIngredint", menuItemIngredint_Route);
router.use("/ingredientType", ingredientType_Route);
router.use("/ingredient", ingredient_Route);


export default router;