//Imports
import express from 'express';
import dotenv from 'dotenv'
import {logReq,globalErr} from "./middleware/middlewares.js"
import connectDB from "./db/conn.js"
import portfolioRoutes from "./routes/portfolioRoutes.js"
import stockRoutes from "./routes/stockRoutes.js"
import transRoutes from "./routes/transactionRoutes.js"
import connectDB from './db/conn.js';


//Setups
dotenv.config();
const app = express();
const PORT = process.env.Port || 3001;
connectDB();

//Middleware
app.use(express.json());
app.use(logReq)


//Routes
app.use("/api/portfolio",portfolioRoutes)
app.use("/api/stock",stockRoutes);
app.use("/api/transactions",transRoutes);

//Global Middleware
app.use(globalErr)

//Listener
app.listen(PORT,() =>{
    console.log(`Server is running on PORT: ${PORT}`)
})

