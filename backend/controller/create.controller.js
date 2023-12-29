import express from "express";
import { TodoModel } from "../models/ToDolist";

const router = express.Router();

router.route('/todolist').get((req,res)=>{
    async function getData(){
        try{
            const data = await TodoModel.find().lean();
            
        }catch(error){
            console.log(error);
        }
    }

}).post((req,res)=>{

})