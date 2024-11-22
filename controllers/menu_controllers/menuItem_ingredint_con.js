import { menuItem_ingredient_model } from "../../models/menu/menuItem_ingredient.js";


const getMenuItemIngredint = async (req, res) => {


    const menuItemIngredient_DataFind = await menuItem_ingredient_model.find({}).populate(
        {
            path: "ingredient_Id",
            populate: {
                path: "menu_Item_Id",
            }
        } 
    );

    res.json({
        status: 200,
        message: "Menu Item Ingredint All Data",
        data: menuItemIngredient_DataFind
    });

}

const postMenuItemIngredint = async (req, res) => {

    const { ingredient_Id, menu_Item_Id, quantity } = req.body;
    const menuItemIngredient_DataSave = await menuItem_ingredient_model({
        ingredient_Id,
        menu_Item_Id,
        quantity
    });
    res.json({
        status: 200,
        message: "Menu Item Ingredint Data successfully added.....!!",
        data: menuItemIngredient_DataSave
    });
}

export { getMenuItemIngredint, postMenuItemIngredint };