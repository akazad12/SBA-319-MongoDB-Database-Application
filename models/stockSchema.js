import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    stockId: {
            type:mongoose.Types.ObjectId,
            ref: "stockref",
        },
    symbol:{
        type: String,
        required: true,
        uppercase: true,
    },
    companyName:{
        type: String,
        required: true,
    },
    currentPrice: {
        type: Number,
        default: 0,
    },
    sector:{
        type: String,
        default: 'Unknown'
    },
    techStock: {
        type: Boolean,
        default: false,
    },
    // datePrice: {
    //     type: Date,
    // }



})

export default mongoose.model("Stock",stockSchema)