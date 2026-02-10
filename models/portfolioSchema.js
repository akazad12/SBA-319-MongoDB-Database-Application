import mongoose from "mongoose";


const accountType = ["traditional", "modern"]

const portfolioSchema = new mongoose.Schema({
    name: {
        type: String,
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

//indexes by name of person
portfolioSchema.index({ name: 1 })
//index by whether an account type is modern and if it is also manually managed by the company
portfolioSchema.index({ accountType: 'modern', managed: true })

//Portfolio Methods
portfolioSchema.statics.priceAbove = function (value){
    return this.find({totalAssetValue: {$gt: value}})
};
portfolioSchema.statics.priceBelow = function (value){
    return this.find({totalAssetValue: {$lt: value}})
};

export default mongoose.model("Portfolio", portfolioSchema)
