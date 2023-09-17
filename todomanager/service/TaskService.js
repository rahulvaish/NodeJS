const Task = require('../model/Task')

var getAllTasks = async (req,res)=>{
    try{
        const task = await Task.find({});
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

var postTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

var getTaskById = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            res.status(404).json({error: `No task id exists ${taskID}`});
        }
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

var updateTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true});
        if(!task){
            res.status(404).json({error: `No task id exists ${taskID}`});
        }
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

var deleteTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            res.status(404).json({error: `No task id exists ${taskID}`});
        }
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

module.exports = {getAllTasks,postTask,getTaskById,updateTask,deleteTask}