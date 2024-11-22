import { order_model } from "../../models/order/order_model.js";

const getOrderData = async (req, res) => {
    const order_DataFind = await order_model.find({}).populate(
    {
        path : "table_Id",
        populate : {
            path : "customer_Id",
            populate : {
                path : "staff_id"
            },
        },
    }
);
    console.log("order_DataFind >>>>", order_DataFind);

    res.json({
        status: 200,
        message: "Order All Data",
        data: order_DataFind
    })
}

const postorderData = async (req, res) => {

    try {

        const { orderNumber, order_date, table_Id, customer_Id, staff_id, status } = req.body;

        const neworder = new order_model({
            orderNumber,
            order_date,
            table_Id,
            customer_Id,
            staff_id,
            status
        });

        const addOrderDataAdd = await neworder.save();

        res.json({
            status: 201,
            message: "Order Data successfully added.....!!",
            data: addOrderDataAdd
        });

    } catch (error) {
        console.log("getOrderData ERROR >>>>", error);
        res.json({
            status: 400,
            message: "Bad Request",
            data: error
        })
    }
}

export { getOrderData, postorderData };