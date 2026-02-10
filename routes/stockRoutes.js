import express from "express";
import Stock from "../models/stockSchema.js"

const router = express.Router();

// router.route('/').post(async (req,res)=>{
//     let newStock = await 
// })
//Create
router.route('/')
.post(async (req,res)=>{
    let newStock = await Stock.insertOne(req.body);

    res.json(newStock)
})
//Read - Show All
.get(async(req,res)=>{
    let allStocks = await Stock.find({});

    res.json(allStocks)
})

//Update
router.route("/:id")
.put(async(req,res)=>{
    let updatedStock = await Stock.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}
    )
    if(!updatedStock) return res.status(404).json({error: "Stock not found"});
    res.json(updatedStock);
})
//Delete
.delete(async(req,res)=>{
    let deletedStock = await Stock.findByIdAndDelete(req.params.id);

    if(!deletedStock) return res.status(404).json({error: "Stock not found"});

    res.json(deletedStock);
})

//Show One
.get(async (req,res)=>{
    let stock = await Stock.findById(req.params.id);

    if (!stock) return res.status(404).json({error: "Stock not found"});

    res.json(stock)
})


//filter stocks by sector
router.route("/sector/:sector")
.get(async (req,res)=>{
    const stocks = await Stock.findBySector(req.params.sector)

    res.json(stocks)
});
//filter stocks by symbol
router.route("/:symbol")
.get(async (req,res)=>{
    const stocks = await Stock.findBySymbol(req.params.symbol)

    res.json(stocks)
})


//Updates Stock Price //****NOT WORKING PATH */
router.route("/:symbol/price")
.put(async (req,res)=>{
    if (typeof req.params.newPrice !== 'number') {
        return res.status(400).json({ error: "newPrice must be a number" });
      }
    const stock = await Stock.findBySymbol(req.params.symbol)
    if (!stock) {
        return res.status(404).json({ error: `Stock with symbol "${symbol}" not found` });
      }
    const UPrice = await stock.updatePrice(req.body.newPrice)

    res.json(UPrice)
})



export default router;