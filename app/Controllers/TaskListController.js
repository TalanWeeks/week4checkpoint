import { ProxyState } from "../AppState.js";
import { taskListService } from "../Services/TaskListService.js";

function _drawTaskList(){
  let tasks = ProxyState.tasks;
  let taskTemplate = ''
  tasks.forEach(task => taskTemplate += task.taskTemplate)
  document.getElementById("task").innerHTML= taskTemplate
}
export class  TaskListController{

  addTask(){
    taskListService.addTask(taskData)}

  createTask(listId){      
    event.preventDefault()
    let form = event.target
    
    let taskData = {
      //@ts-ignore
      name: form.name.value,
      id: listId,
      description: form.description.value,
      complete: false     
      
    }
  taskListService.addTask(taskData)
  _drawTaskList()  
  //@ts-ignore    
}


}