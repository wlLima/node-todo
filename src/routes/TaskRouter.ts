import { response, Router } from "express";
import { TaskService } from "../services/TaskService";

export const taskRouter = Router()

const taskService = new TaskService()


taskRouter.post('/create', (request, response)=>{
  const data = taskService.create(request.body)
  response.json(data)
})

taskRouter.put('/update/:id', (request, response)=>{
  const data = taskService.update(request.body, request.params.id)
  response.json(data)
})

taskRouter.get('/list', (request, response)=>{
  const data = taskService.list()
  response.json(data)
})

taskRouter.delete('/delete/:id', (request, response)=>{
  const { id } = request.params
  const data = taskService.delete(id)
  response.json(data)
})
