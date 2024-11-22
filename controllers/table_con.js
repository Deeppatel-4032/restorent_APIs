import { teble_model } from "../models/table/table_model.js";

const getTableData_Con = async (req, res) => {
    const table_DataFind = await teble_model.find({}).populate("booking");

    console.log("table_DataFind >>>>", table_DataFind);
    

    res.json({
        status: 200,
        message: "Table All Data",
        data: table_DataFind
    })
}

const postTableData_Con = async (req, res) => {
    try {
        const { tebleNumber, teble_detail, teble_seat, status, booking_Id } = req.body;
        const newTable = new teble_model({
            tebleNumber,
            teble_detail,
            teble_seat,
            status,
            booking_Id
        });

        const newTableDataAdd = await newTable.save();

        console.log("newTableDataAdd >>>", newTableDataAdd);
        
        res.json({
            status: 201,
            message: "Table Data successfully added.....!!",
            data: newTableDataAdd
        });
    } catch (error) {
        console.log("getTableData Error", error);
    }
}

export { getTableData_Con, postTableData_Con } 