const express = require('express')
const router = express.Router()
const service = require('../service/TaskService')

router.route('/getAllTasks').get((req, res)=>{
    service.getAllTasks(req,res);
 });

 router.route('/postTask').post((req, res)=>{
    service.postTask(req,res);
 });

 router.route('/getTaskById/:id').get((req, res)=>{
    service.getTaskById(req,res);
 });

 router.route('/updateTask/:id').put((req, res)=>{
    service.updateTask(req,res);
 });

 router.route('/deleteTask/:id').delete((req, res)=>{
    service.deleteTask(req,res);
 });


module.exports = router;