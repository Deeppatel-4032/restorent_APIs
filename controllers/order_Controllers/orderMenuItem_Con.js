import { orderMenuItem_model } from "../../models/order/order_menu_item_model.js"

const getOrderMenuItemData = async (req, res) => {

    const orderMenuItem_DataFind = await orderMenuItem_model.find({}).populate(
        {
            path: "order_Id",
            populate: {
                path: "menu_Item_Id",
            }
        }
    );
    res.json({
        status: 200,
        message: "Order Menu Item All Data",
        data: orderMenuItem_DataFind
    });
}

const postOrderMenuItemData = async (req, res) => {
    try {

        const { order_Id, menu_Item_Id, quantity, Comment } = req.body;

        const newOrderMenuItem = new orderMenuItem_model({
            order_Id,
            menu_Item_Id,
            quantity,
            Comment
        });

        const addOrderMenuItem = await newOrderMenuItem.save();

        res.json({
            status: 201,
            message: "Order Menu Item Data successfully added.....!!",
            data: addOrderMenuItem
        });
    } catch (error) {

        console.log("getOrderMenuItemData ERROR >>>>", error);

        res.json({
            status: 400,
            message: "Bad Request",
            data: error
        });
    }
}

export { getOrderMenuItemData, postOrderMenuItemData };