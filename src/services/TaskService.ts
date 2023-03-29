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

    }
    
  }

  update(taskDto: TaskDTO){

    if(taskDto.title !== '' && taskDto.id !== ""){
      
      const taskExist = task.find((task)=> task.id === taskDto.id)

      if(taskExist && (taskDto.title !== taskExist.title || taskDto.description !== taskExist.description)){
         
        taskExist.title = taskDto.title
        taskExist.description = taskDto.description

        return taskExist
      }

    }

  }

  delete(taskDto: TaskDTO){

  }

  list(){
    return task.length > 0 ? task : "Não existe task cadastrada!"
  }

}