import { menu_item_model } from "../../models/menu/menu_Item_model.js";

const getMenuItemData = async (req, res) => {

    const menuItem_DataFind = await menu_item_model.find({}).populate("menu_id");
    res.json({
        status: 200,
        message: "Menu Item All Data",
        data: menuItem_DataFind
    });

}

const postMenuItemData = async (req, res) => {

    try {
        const { price, description, menu_id, status } = req.body;

        const newMenuItem = new menu_item_model({
            price,
            description,
            menu_id,
            status
        });

        const addMenuItem = await newMenuItem.save();

        console.log("addMenuItem", addMenuItem);
        
        res.json({
            status: 201,
            message: "Menu Item Data successfully added.....!!",
            data: addMenuItem
        });
    } catch (error) {
        console.log("postMenuItemData ERROR >>>>", error);

        res.json({
            status: 400,
            message: "Bad Request",
            data: error
        });
    }
    
}
export { getMenuItemData, postMenuItemData };