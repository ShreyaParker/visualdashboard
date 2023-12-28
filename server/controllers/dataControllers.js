import DataModel from "../models/dataModel.js";

export const getData = async (req,res)=>{
    try {
        const data = await DataModel.find({})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
}
