import { Request,Response ,NextFunction} from "express";

export  const validateTasks = async(req:Request,res:Response,next:NextFunction)=>{
    const {tittle,description} =req.body;
    if(!tittle){
      res.status(400).json({Message:`task tittle required`})
        return
    }
    if(!description){
       res.status(400).json({Message:`task content required`})
        return 
    }
    next()
}