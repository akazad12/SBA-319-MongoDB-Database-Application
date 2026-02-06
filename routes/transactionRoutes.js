import express from "express";
import Transaction from "../models/transactionSchema.js"

const router = express.Router();

// router.route('/').post(async (req,res)=>{
//     let newTran = await 
// })
//Create
router.route('/')
.post(async (req,res)=>{
    let newTran = await Transaction.insertOne(req.body);

    res.json(newTran)
})
//Read - Show All
.get(async(req,res)=>{
    let allTrans = await Transaction.find({});

    res.json(allTrans)
})

//Update
router.route("/:id")
.put(async(req,res)=>{
    let updatedTran = await Transaction.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}
    )
    if(!updatedTran) return res.status(404).json({error: "Transaction not found"});
    res.json(updatedTran);
})
//Delete
.delete(async(req,res)=>{
    let deletedTran = await Transaction.findByIdAndDelete(req.params.id);

    if(!deletedTran) return res.status(404).json({error: "Transaction not found"});

    res.json(deletedTran);
})

//Show One
.get(async (req,res)=>{
    let Tran = await Transaction.findById(req.params.id);

    if (!Tran) return res.status(404).json({error: "Transaction not found"});

    res.json(Tran)
})


export default router;