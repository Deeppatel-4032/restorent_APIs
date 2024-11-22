import { staff_model } from "../../models/staff/staff_model.js";

 const getStaffData = async (req, res) => {

    const staff_DataFind = await staff_model.find({}).populate("staff_role");

    console.log("staff_DataFind >>>>", staff_DataFind);

    res.json({
        status: 200,
        message: "Staff All Data",
        data: staff_DataFind
    })
}

const poststaffData = async (req, res) => {

    try {
        const { fname, lname, phone, role_Id } = req.body;

        const newstaff = new staff_model({
            fname,
            lname,
            phone,
            role_Id
        })

       const addStaff = await newstaff.save();
        console.log("addStaff", addStaff);
        
        res.json({
            status: 200,
            message: "Staff Data successfully added.....!!",
            data: addStaff
        })

    } catch (error) {

        console.log("getstaffData Error", error);
        res.json({
            status: 400,
            message: "Staff Data not added.....!!",
            data: error
        })
    }
}

export { getStaffData, poststaffData };