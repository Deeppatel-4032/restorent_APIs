import { customer_model } from "../models/customers/customer_model.js"

const getCustomerData = async (req, res) => {
    const customer_DataFind = await customer_model.find({});

    console.log("customer_DataFind", customer_DataFind);
    
    res.json({
        status: 200,
        message: "Customer All Data",
        data: customer_DataFind
    })
}

const postCustomerData = async (req, res) => {
    console.log("REQ", req.body);
    
    try {
        const { userName, email, address, phone, password} = req.body;

        const newCustomer = new customer_model({
            userName,
            email,
            address,
            phone,
            password
        });

        const addCustomer = await newCustomer.save();
        console.log("newCustomer", addCustomer);
        
        res.json({
            status: 200,
            message: "Customer Data successfully added.....!!",
            data: addCustomer
        })
    } catch (error) {
        console.log("getCustomerData Error", error);
    }
}

export { getCustomerData, postCustomerData }