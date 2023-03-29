import { response, Router } from "express";
import { TaskService } from "../services/TaskService";

export const taskRouter = Router()

const taskService = new TaskService()


taskRouter.post('/create', (request, response)=>{
  const data = taskService.create(request.body)
  response.json(data)
})

taskRouter.put('/update', (request, response)=>{
  const data = taskService.update(request.body)
  response.json(data)
})

taskRouter.get('/', (request, response)=>{
  const data = taskService.list()
  response.json(data)
})
