import { menu_model } from "../../models/menu/menu_model.js";

const getMenuData = async (req, res) => {

    const menu_DataFind = await menu_model.find({});

    res.json({
        status: 200,
        message: "Menu All Data",
        data: menu_DataFind
    });
}

const postMenuData = async (req, res) => {
    const { itemName, menu_Date } = req.body;

    const newMenu = new menu_model({
        itemName,
        menu_Date
    });

    const addMenu = await newMenu.save();

    res.json({
        status: 201,
        message: "Menu Data successfully added.....!!",
        data: addMenu
    });
}

export { getMenuData, postMenuData };

