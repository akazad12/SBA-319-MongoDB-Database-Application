import express from "express";
import Portfolio from "../models/portfolioSchema.js"

const router = express.Router();

// router.route('/').post(async (req,res)=>{
//     let newPort = await 
// })
//Create
router.route('/')
.post(async (req,res)=>{
    let newPort = await Portfolio.insertOne(req.body);

    res.json(newPort)
})
//Read - Show All
.get(async(req,res)=>{
    let allPorts = await Portfolio.find({});

    res.json(allPorts)
})

//Update
router.route("/:id")
.put(async(req,res)=>{
    let updatedPort = await Portfolio.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}
    )
    if(!updatedPort) return res.status(404).json({error: "Portfolio not found"});
    res.json(updatedPort);
})
//Delete
.delete(async(req,res)=>{
    let deletedPort = await Portfolio.findByIdAndDelete(req.params.id);

    if(!deletedPort) return res.status(404).json({error: "Portfolio not found"});

    res.json(deletedPort);
})

//Show One
.get(async (req,res)=>{
    let port = await Portfolio.findById(req.params.id);

    if (!port) return res.status(404).json({error: "Portfolio not found"});

    res.json(port)
})


export default router;