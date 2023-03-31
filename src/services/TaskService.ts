import { TaskDTO } from '../interfaces/TaskInterface'
import { v4 as uuidv4 } from 'uuid';

const task: TaskDTO[] = []

export class TaskService{

  create(taskDto: TaskDTO){
    if(taskDto.title !== ''){
      
      const taskExist = task.find((task)=> task.title === taskDto.title)
      
      if(!taskExist){
        taskDto.id = uuidv4();
        task.push(taskDto)
        return taskDto
      }

      throw new Error('A tarefa já existe!')
    }

    throw new Error('O título da tarefa não pode estar vazio!')
  }

  update(taskDto: TaskDTO, id: string){

    if(taskDto.title !== '' && id !== ""){
      
      const taskExist = task.find((task)=> task.id === id)

      if(taskExist && (taskDto.title !== taskExist.title || taskDto.finished !== taskExist.finished)){
         
        taskExist.title = taskDto.title
        taskExist.finished = taskDto.finished

        return taskExist
      }
      throw new Error('A tarefa não pode ser encontrada!')
    }

    throw new Error('O título e o id da tarefa não podem estar vazio!')
  }

  delete(id: string){
    if(id !== ""){
      const index = task.findIndex((tasks)=> tasks.id === id)

      if(index >= 0){
        const taskDeleted = task.splice(index, 1)
        return taskDeleted
      }

      throw new Error('A tarefa não pode ser encontrada!')
    }
    throw new Error('O id da tarefa não podem estar vazio!')
  }

  list(){
    return task.length > 0 ? task : []
  }

}