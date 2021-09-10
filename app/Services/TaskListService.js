import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TaskListService{
  addTask(taskData){
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    console.log("hello from TasksServices", ProxyState.tasks)
  }
}

export const taskListService = new TaskListService