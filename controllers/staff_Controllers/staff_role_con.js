import { staff_role_model } from "../../models/staff/staff_role_model.js";


const getStaffRoleData = async (req, res) => {
    const staff_role_DataFind = await staff_role_model.find({})

    console.log("staff_role_DataFind >>>>", staff_role_DataFind);

    res.json({
        status: 200,
        message: "Staff Role All Data",
        data: staff_role_DataFind
    })
}

const postStaffRoleData = async (req, res) => {
    try {
        const { role, role_Description} = req.body;

        const staffRole = new staff_role_model({
            role,
            role_Description
        })

        const addStaffRole = await staffRole.save();

        res.json({
            status: 201,
            message: "Staff Role Data successfully added.....!!",
            data: addStaffRole
        })

    } catch (error) {
        res.json({
            status: 400,
            message: "Bad Request",
            data: error
        })
    }
}


export { getStaffRoleData, postStaffRoleData };