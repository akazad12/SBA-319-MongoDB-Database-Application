import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        uppercase: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    currentPrice: {
        type: Number,
        default: 0,
    },
    sector: {
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

stockSchema.index({ symbol: 1 });
stockSchema.index({ sector: 1, techStock: 1 });


//const Stock = mongoose.model("Stock",stockSchema)

export default mongoose.model("Stock", stockSchema)