import mongoose from "mongoose";
import dotenv from "dotenv";
import Portfolio from "../models/portfolioSchema.js"

dotenv.config();

const connectionStr = process.env.MONGOO_URI || "";
async function seedDatabase(){
    try{
        await mongoose.connect(connectionStr);
        console.log("✅ Connected to DB");

        await Portfolio.deleteMany({});
        console.log('✅ Deleted Previous')

        await Portfolio.create(data);
        console.log('✅ Added New Chars')

        console.log('🎉Successfully Seeded!')
        process.exit(1)
    }catch (err){
        console.error(err.message);
        process.exit(1)
    }
}