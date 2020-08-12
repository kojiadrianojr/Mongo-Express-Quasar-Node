const express = require('express');
const mongoose = require('mongoose');
const json = require('body-parser/lib/types/json');
const route = express.Router();
const Task = mongoose.model("Tasks")


route.post('/', async(req, res) => {
    const { name, desc, status } = req.body;
    const task = await new Task({
        name,
        desc,
        status
    });
    try {
        const newTask = await task.save();
        res.status(201).json(` new task created!`);
    }catch (e) {
        res.status(400).res.json({msg: e.message});
    }
})

route.get('/list', async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks) 
    }catch (e){
        res.status(500).json({msg: e.message});
    }
})

route.delete('/delete-all', async(req,res) => {
    try {
        await Task.deleteMany();
        res.status(204).json({msg: 'SUCCESS'});
    } catch (e){
        res.status(500).json({msg: e.message});
    }
})

route.patch('/edit/:id', findTask, async(req, res) => {
    let { name, desc, status } = req.body;

    if (name == null) {
        name = res.task.name
    } 
    if (desc == null) {
        desc = res.task.desc
    }
    if (status == null) {
        status = res.task.status
    }

    try {
        const UpdatedTask = await Task.updateOne({ name, desc, status});
        res.status(200).json(UpdatedTask);
    }catch (e){
        json.status(500).json({msg: e.message});
    }
})

route.get('/list/:id', findTask, async(req, res) => {
    try {
        let task = res.task;
        res.status(200).json(task);
    } catch (e){
        res.status(500).json({msg: e.message});
    }
})

route.delete('/list/:id', findTask, async(req,res) => {
    try {
        await Task.deleteOne(res.task)
        res.status(200).json({msg: 'SUCCESS'})
    } catch (e){
        res.status(500).json({msg: e.message});
    }
})

async function findTask(req, res, next) {
    let task
    try {
        task = await Task.findById(req.params.id);
        if (task === null) res.status(404).json({msg: 'TASK NOT FOUND!!!'})
    } catch (e) {
        res.status(500).json({msg: e.message});
    }
    res.task = task;
    next();
}

module.exports = route;

