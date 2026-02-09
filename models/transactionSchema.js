import mongoose from "mongoose";


const transSchema = new mongoose.Schema({
    portID: {
        type:mongoose.Types.ObjectId,
        ref: "Portfolio",
        required: true
    },
    stockID: {
        type:mongoose.Types.ObjectId,
        ref: "Stock",
        required: true
    },
    action:{
        type:String,
        enum: {
            values: ["BUY","SELL"],
            message: "{VALUE} can be BUY or SELL only"
        },
        required: true,
    },
    shares:{
        type: Number,
        required: true,
        min: 0,
    },
    sharePrice: {
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
 })





// const Transaction = mongoose.model("Transaction",transSchema)

export default mongoose.model("Transaction",transSchema)