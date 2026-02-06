import mongoose from "mongoose";


const transSchema = new mongoose.Schema({
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

export default mongoose.model("Transaction",transSchema)