import { generateId } from "../Utils/generateId.js"


export class Task{
  constructor(taskData){
    this.user = taskData.user || "talan"
    this._id = taskData._id || generateId()
    this.taskId = generateId()
    this.completed = taskData.completed || false 
    this.description =  taskData.description
  }

  get taskTemplate(){
    return /*html*/`
    <div class="p-2">
      <label for ="checked">
      </label>
      <input type="checkbox" id="completed" class="completed" value='false' ${this.completed ? "completed" : ""} onclick="app.tasksController.checkTasks('${this.taskId}')"></input>
      <label class="p-2 task-slasher"for="task" id="task-slasher">${this.description}</label>
      <i class="mdi mdi-delete mdi-16px text-danger selectable"
      onclick="app.taskListController.removeTask('${this._id}')"></i>
    </div>
    `
  }
}