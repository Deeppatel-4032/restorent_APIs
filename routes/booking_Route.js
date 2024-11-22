import { Router } from "express";
import { getBookingData, postBookingData } from "../controllers/booking_con.js"
const booking_Route = Router();

booking_Route.get("/", getBookingData);
booking_Route.post("/", postBookingData);


export default booking_Route