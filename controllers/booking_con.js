import { booking_model } from "../models/booking/booking_model.js"

const getBookingData = async (req, res) => {

    const booking_DataFind = await booking_model.find({}).populate("table_Id").populate("customer_Id");

    console.log("booking_DataFind >>>>", booking_DataFind);

    res.json({
        status : 200,
        message : "Booking All Data",
        data : booking_DataFind
    });
}

const postBookingData = async (req, res) => {
    
    try {
        const { date, member, table_Id, customer_Id } = req.body;

        const newBooking = new booking_model({
            date,
            member,
            table_Id,
            customer_Id
        });

       const newBookingDataAdd = await newBooking.save();

       console.log("newBookingDataAdd >>>>", newBookingDataAdd);

       res.json({
           status : 201,
           message : "Booking Data successfully added.....!!",
           data : newBookingDataAdd
       })
    } catch (error) {
        console.log("getBookingData ERROR >>>>", error);
    }
}


export { getBookingData, postBookingData };