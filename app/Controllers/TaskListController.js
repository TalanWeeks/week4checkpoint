import { ProxyState } from "../AppState.js";
import { taskListService } from "../Services/TaskListService.js";
import { generateId } from "../Utils/generateId.js";

function _drawTaskList(){  
  let tasks = ProxyState.tasks;
  let taskTemplate = ''
  tasks.forEach(task => taskTemplate += task.taskTemplate)
  document.getElementById("task").innerHTML= taskTemplate
}
export class  TaskListController{

  constructor(){
    ProxyState.on('tasks',_drawTaskList)
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
      completed: false 
      
    }
    taskListService.addTask(taskData)
    //@ts-ignore    
    form.reset() 
    _drawTaskList() 
}
  removeTask(id) { 
  //@ts-ignore
    swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this task!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
  if (willDelete) {
    taskListService.removeTask(id)
//@ts-ignore
    swal("Poof! Your task has been deleted!", {
      icon: "success",
    });
  } else {
//@ts-ignore
    swal("Your task is safe!");
  }
    })
  }

  checkTasks(taskId){
    taskListService.checkTasks(taskId)}

}
