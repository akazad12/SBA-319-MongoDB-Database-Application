import mongoose from "mongoose";
import dotenv from "dotenv";
import Portfolio from "../models/portfolioSchema.js"
import Stock from "../models/stockSchema.js"
import Transaction from "../models/transactionSchema.js"
import { portfolios,stocks,genTransactions } from "./data.js";


dotenv.config();

const connectionStr = process.env.MONGO_URI || "";
async function seedDatabase() {
    try {
        await mongoose.connect(connectionStr);
        console.log("✅ Connected to DB");

        await Portfolio.deleteMany({});
        console.log('✅ Deleted Previous Portfolios')
        await Stock.deleteMany({});
        console.log('✅ Deleted Previous Stocks')
        await Transaction.deleteMany({});
        console.log('✅ Deleted Previous Transactions')

        const SavedPortfolios = await Portfolio.create(portfolios);
        console.log('✅ Added New Portfolios')
        const savedStocks = await Stock.create(stocks);
        console.log('✅ Added New Stocks')
        
        const transaction = genTransactions(SavedPortfolios,savedStocks);
        await Transaction.create(transaction)
        // console.log('sample port', portfolios[0])
        // console.log('sample stock',stocks[0])
        // console.log('sample transaction',transaction[0])
        console.log('✅ Generated new Transactions')

        console.log('🎉Successfully Seeded!')
        process.exit(1)
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

seedDatabase();

