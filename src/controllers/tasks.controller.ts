import {Response,Request } from 'express'
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient();

export const getAllTasks = async (req :Request,res:Response)=>{
    try{
        const tasks= await client.tasks.findMany();
        res.status(200).json(tasks)
    }
    catch (e){
      res.status(500).json({Message:"Something went wrong." })  
    }
}

export const getSpecificTask =async (req:Request,res:Response)=>{
    const taskId = req.params.id
    // console.log(taskId.id)
    try{
        const newTask= await client.tasks.findFirst({
            where:{id: taskId}
        })
         if (newTask){
             res.status(200).json({Message:"task found successfully", Task:newTask})
        }else {
             res.status(404).json({Message:"Not found"})
        }
    }
    catch (e) {
        res.status(500).json({Message:"Something went wrong." })  
    }
}

export const createTasks = async (req:Request,res:Response)=>{ 
    const  {tittle, description} = req.body
    
    try{
        const newTasks = await client.tasks.create({
            data:{ tittle:tittle, 
                description:description}
            
        }) 
        res.status(201).json({Message:`tasks created successfully.`,Task: newTasks})
        
    }
    catch (e){
        res.status(500).json({Message:`Something went wrong. `})
    }

}

export const deleteTask =  async (req:Request,res:Response)=>{
     const taskId = req.params.id
    
    try{
        const newTask= await client.tasks.update({
            where:{id: taskId},
            data:{isdeleted:true}
        })
         if (newTask){
             res.status(200).json({Message:"task deleted successfully", Task:newTask})
        }else {
             res.status(404).json({Message:"Not found"})
        }
    }
    catch (e) {
        res.status(500).json({Message:"Something went wrong." })  
    }
}
export const modifyTask = async(req:Request,res:Response)=>{
    try {
        const {tittle,description,isCompleted}=req.body
         const taskId = req.params.id
        const Tasks =await client.tasks.update({
            where: {id: taskId},
            data: {tittle: tittle && tittle,
                description: description && description,
                isCompleted: isCompleted && isCompleted

            }
        })
        if (Tasks){
             res.status(200).json({Message:"task updated successfully", Task:Tasks})
        }else {
             res.status(404).json({Message:"Not found"})
        }
        
    }
    catch (e){
       res.status(500).json({Message:"Something went wrong." })  
    }
}
