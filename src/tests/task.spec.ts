import { TaskService } from "../services/TaskService";
import { TaskDTO } from "../interfaces/TaskInterface";

let taskId = ""
let taskService = new TaskService()

describe('testar a criação de uma tarefa', () => {

  test('deve criar uma tarefa', () => {

    const task: TaskDTO = {
      id: "",
      title: "teste",
      finished: false
    }

    const response = taskService.create(task)
    taskId = response.id //salva o id para ser utilizado nos testes seguintes

    if(response){
      expect(response.id).toEqual(task.id)
      expect(response.title).toEqual(task.title)
      expect(response.finished).toEqual(task.finished)
    } 
  })

  test('deve gerar erro ao tentar criação da tarefa', () => {

    const task: TaskDTO = {
      id: "",
      title: "",
      finished: false
    }

    expect(() => taskService.create(task)).toThrow()
  })
})

describe('testar a edição de uma tarefa', () => { 

  test('deve editar uma tarefa', () => {
    const task: TaskDTO = {
      id: taskId,
      title: "testes",
      finished: true
    }

    const response = taskService.update(task, taskId)
   
    expect(response?.id).toEqual(taskId)
    expect(response?.title).toEqual(task.title)
    expect(response?.finished).toEqual(task.finished)
  })

  test('deve gerar erro ao tentar editar uma tarefa', () => {

    const task: TaskDTO = {
      id: taskId,
      title: "",
      finished: true
    }

    expect(() => taskService.update(task, taskId)).toThrow()
    expect(() => taskService.update(task, "")).toThrow()
  })
})

describe('testar a remoção de uma tarefa', () => {
  
  test("deve remover a tarefa", () => {
    taskService.delete(taskId)
    const task = taskService.list()
    const result = task.find((item)=> item.id === taskId)

    expect(result).toBeUndefined()
  })

  test("deve gerar um erro ao remover a tarefa", () => {
    expect(()=> taskService.delete("qualquer coisa")).toThrow()
    expect(()=> taskService.delete("")).toThrow()
  })

})