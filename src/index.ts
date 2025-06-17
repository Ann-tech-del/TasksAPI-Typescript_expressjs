
import express from 'express'

import { PrismaClient } from '@prisma/client'

import tasksRouter from './routes/tasks.routes'

const app = express()
const client = new PrismaClient();
app.use(express.json());
app.use("/tasks",tasksRouter);

app.get("/",(req,res)=>{
res.send("<h1>Tasks API in Typescript and Express</h1>") 
})





















const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log (`Server listening at ${port}`)
})