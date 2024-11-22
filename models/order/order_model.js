import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderNumber : {
        type : Number,
        required : true
    },
    order_date : {
        type : Date,
        required : true,
        default : Date.now.toString()
    },
    table_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "table",
        required : true
    },
    customer_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "customer",
        required : true
    },
    staff_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "staff",
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "pending",
        enum : ["pending", "cancle", "complete"]
    }
})

export const order_model = mongoose.model("order", orderSchema);