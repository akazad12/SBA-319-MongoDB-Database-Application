import express from "express";
import Transaction from "../models/transactionSchema.js"
import Portfolio from "../models/portfolioSchema.js";
import Stock from "../models/stockSchema.js";

const router = express.Router();


// router.route('/').post(async (req,res)=>{
//     let newTran = await 
// })
//Create
router.route('/')
    .post(async (req, res) => {
        try {
            let newTran = await Transaction.insertOne(req.body)

            res.json(newTran)
        } catch (err){
            res.status(500).json({ error: "Failed to retrieve data" })
        }
})
    //Read - Show All
    .get(async (req, res) => {
        try {
            let allTrans = await Transaction.find()
                .populate({
                    path: "portID",
                    select: 'name'
                })
                .populate({
                    path: "stockID",
                    select: 'symbol'
                });

            res.json(allTrans)

        } catch (err) {
            res.status(500).json({ error: "Failed to retrieve data" })
        }
    })

//Update
router.route("/:id")
    .put(async (req, res) => {
        let updatedTran = await Transaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        if (!updatedTran) return res.status(404).json({ error: "Transaction not found" });
        res.json(updatedTran);
    })
    //Delete
    .delete(async (req, res) => {
        let deletedTran = await Transaction.findByIdAndDelete(req.params.id);

        if (!deletedTran) return res.status(404).json({ error: "Transaction not found" });

        res.json(deletedTran);
    })

    //Show One
    .get(async (req, res) => {
        let Tran = await Transaction.findById(req.params.id);

        if (!Tran) return res.status(404).json({ error: "Transaction not found" });

        res.json(Tran)
    })


export default router;