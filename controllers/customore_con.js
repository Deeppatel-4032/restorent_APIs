import { customer_model } from "../models/customers/customer_model.js"

const customerData = async (req, res) => {
    const customer_DataFind = await customer_model.find();

    console.log("customer_DataFind", customer_DataFind);
    
    res.json({
        status: 200,
        message: "Customer All Data",
        data: customer_DataFind
    })
}

const getCustomerData = async (req, res) => {
    try {
        const { userName, email, address, phone, password} = req.body;

        const newCustomer = new customer_model({
            userName,
            email,
            address,
            phone,
            password
        });

        await newCustomer.save();
        console.log("newCustomer", newCustomer);
        
        res.json({
            status: 200,
            message: "Customer Data successfully added.....!!",
            data: newCustomer
        })
    } catch (error) {
        console.log("getCustomerData Error", error);
    }
}

export { customerData, getCustomerData }