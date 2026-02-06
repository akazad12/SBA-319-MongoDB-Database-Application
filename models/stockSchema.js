import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const stockSchema = new mongoose.Schema({
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