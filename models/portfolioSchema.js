import mongoose from "mongoose";


const accountType = ["traditional","modern"]

const portfolioSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    accType: {
        type: String,
        required: true,
        enum: {
            values: accountType,
            message: `{VALUE} should be traditional or modern`,
        },
    },
    totalAssetValue: {
        type: Number,
    },
    managed: {
        type: Boolean,
        default: false,
    },
    assets: [{
        symbol: [String],
        shares: Number,
        avgPrice: Number,
    }]

})
// const Portfolio = mongoose.model("Portfolio",portfolioSchema)

export default mongoose.model("Portfolio",portfolioSchema)
// import mongoose, { Types } from "mongoose";
// import type { InferSchemaType } from "mongoose";

// const journalEntrySchema = new mongoose.Schema({
//   authorId: {
//     type: Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },