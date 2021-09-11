import { ProxyState } from "../AppState.js";
import { taskListService } from "../Services/TaskListService.js";

function _drawTaskList(){  
  let tasks = ProxyState.tasks;
  let taskTemplate = ''
  tasks.forEach(task => taskTemplate += task.taskTemplate)
  document.getElementById("task").innerHTML= taskTemplate
  console.log("i tried to draw already")
}
export class  TaskListController{

  constructor(){
    ProxyState.on('tasks',_drawTaskList)
    taskListService.getMyTasks()
    _drawTaskList()
  }

  addTask(){
      //@ts-ignore
    taskListService.addTask(taskData)}

  createTask(listId){      
    event.preventDefault()
    let form = event.target
    
    let taskData = {
      //@ts-ignore
      name: form.name.value,
      id: listId,
      //@ts-ignore
      description: form.description.value,
      complete: false     
      
    }
    taskListService.addTask(taskData)
    //@ts-ignore    
    form.reset() 
    _drawTaskList() 
}
removeTask(id) { 
  taskListService.removeTask(id)
}


}