//Imports
import { configDotenv } from 'dotenv';
import express from 'express';
import dotenv from 'dotenv'
import {logReq,globalErr} from "./middleware/middlewares.js"
import portfolioRoutes from "./routes/portfolioRoutes.js"


//Setups
dotenv.config();
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(logReq)


//Routes
app.use("/api/portfolio",portfolioRoutes)

//Global Middleware
app.use(globalErr)

//Listener
app.listen(PORT,() =>{
    console.log(`Server is running on PORT: ${PORT}`)
})

