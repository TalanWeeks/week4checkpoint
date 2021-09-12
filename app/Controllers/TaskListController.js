import { ProxyState } from "../AppState.js";
import { taskListService } from "../Services/TaskListService.js";
import { generateId } from "../Utils/generateId.js";

function _drawTaskList(){  
  console.log("i shall draw thy tasks")
  let tasks = ProxyState.tasks;
  let taskTemplate = ''
  tasks.forEach(task => taskTemplate += task.taskTemplate)
  document.getElementById("task").innerHTML= taskTemplate
}
export class  TaskListController{

  constructor(){
    
    ProxyState.on('tasks',_drawTaskList)
    taskListService.getMyTasks()
    // _drawTaskList()
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
    title: "Are you done with your chorin?",
    text: "Better hit cancel if you didn't do you chores",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
  if (willDelete) {
    taskListService.removeTask(id)
//@ts-ignore
    // swal("Poof! Your task has been deleted!", {
    //   icon: "success",
    // });
  } else {
//@ts-ignore
    swal("Sorry cheater no take backs...");
  }
    })
  }

  checkTasks(taskId){
    taskListService.checkTasks(taskId)}

}
