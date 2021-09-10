import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"


// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})
class TaskListService{
  async addTask(taskData){
    console.log('this is your task data',taskData)
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    await sandboxApi.post('talan/todos', taskData)
    console.log("hello from TasksServices", ProxyState.tasks)
  }
}

export const taskListService = new TaskListService