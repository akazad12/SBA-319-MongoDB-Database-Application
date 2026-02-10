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

//Indexes
stockSchema.index({ symbol: 1 });
stockSchema.index({ sector: 1, techStock: 1 });

//Methods
stockSchema.statics.findBySector = function (getSector){
    return this.find({sector: getSector })
};

stockSchema.statics.findBySymbol = function (symbol){
    return this.findOne({symbol: symbol.toUpperCase()})
};

stockSchema.methods.updatePrice = async function (newPrice){
    this.currentPrice = newPrice;
    return this.save();
};


export default mongoose.model("Stock", stockSchema)