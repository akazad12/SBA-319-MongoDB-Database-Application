import mongoose from "mongoose";


const transSchema = new mongoose.Schema({
    portID: {
        type: mongoose.Types.ObjectId,
        ref: "Portfolio",
        required: true
    },
    stockID: {
        type: mongoose.Types.ObjectId,
        ref: "Stock",
        required: true
    },
    action: {
        type: String,
        enum: {
            values: ["BUY", "SELL"],
            message: "{VALUE} can be BUY or SELL only"
        },
        required: true,
    },
    shares: {
        type: Number,
        required: true,
        min: 0,
    },
    sharePrice: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
})
//indexes by most recent transaction of a given portfolio
transSchema.index({ portID: 1, date: -1 });
//indexes by most recent transaction of a given stock
transSchema.index({ stockID: 1, date: -1 })






// const Transaction = mongoose.model("Transaction",transSchema)

export default mongoose.model("Transaction", transSchema)