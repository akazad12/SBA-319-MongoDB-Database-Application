import mongoose from "mongoose";
import { type } from "node:os";
import { object } from "webidl-conversions";

const accountType = ["traditional","modern"]

const portfolioSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        ref: "User",
    },
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
    diversification: {
        type: Number,
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

export default mongoose.model("Portfolio",portfolioSchema)
// import mongoose, { Types } from "mongoose";
// import type { InferSchemaType } from "mongoose";

// const journalEntrySchema = new mongoose.Schema({
//   authorId: {
//     type: Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },