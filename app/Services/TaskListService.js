import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"


// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/talan/todos'
})
class TaskListService{

  constructor(){
  this.getMyTasks()
  }
  async addTask(taskData){
    console.log('this is your task data',taskData)
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    await sandboxApi.post('', taskData)
    this.getMyTasks()
    console.log("hello from TasksServices", ProxyState.tasks)
  }

  async getMyTasks() {
    let res = await sandboxApi.get('')
    console.log('the res', res)
    ProxyState.tasks = res.data.map(s => new Task(s))
    console.log(ProxyState.tasks)    
  }

  async removeTask(id) {
    //TODO Send the id to be deleted from the server then update the store
   
    try {
      await sandboxApi.delete(id)      
    } catch (error) {
      console.log("delete failed",error);
    }
    ProxyState.tasks = ProxyState.tasks.filter(t => t._id !== id)
    // this.getMyTasks()
    console.log("after filter",ProxyState.tasks);      
    }

    async checkTasks(taskId){  
      console.log('the task id',taskId)
      const task = ProxyState.tasks.find(t => t._id === taskId)
      console.log("task after found id",task)
      task.completed =! task.completed
      console.log('your completed task mi lord0',task)
      await sandboxApi.put(`${taskId}`,task)
    }
}

export const taskListService = new TaskListService