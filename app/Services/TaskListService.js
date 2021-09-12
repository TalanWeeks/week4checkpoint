import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"


// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/talan/todos'
})
class TaskListService{

 
  async addTask(taskData){
    console.log('this is your task data',taskData)
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    await sandboxApi.post('', taskData)
    this.getMyTasks()    
  }

  async getMyTasks() {
    let res = await sandboxApi.get('')    
    ProxyState.tasks = res.data.map(s => new Task(s))  
    ProxyState.checkedTasks = ProxyState.tasks.filter((tasks) => {return tasks.completed == true})    
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
          
    }

    async checkTasks(taskId){
      
      console.log('the task id',taskId)
      const task = ProxyState.tasks.find(t => t._id === taskId)
      console.log("task after found id",task)
      task.completed =! task.completed
      console.log('your completed task mi lord0',task)
      await sandboxApi.put(`${taskId}`,task)
      ProxyState.checkedTasks = ProxyState.tasks.filter((tasks) => {return tasks.completed == true})
      this.checkedVsUnchecked()
      // let checkedAmount = checkedTasks.length
      // let uncheckedAmount = ProxyState.tasks.length
      // document.getElementById("checked-vs-not").innerHTML = 'checkedAmount "/" uncheckedAmount'
    }

    checkedVsUnchecked(){
      console.log("hello from checkedVsUnchecked",ProxyState.checkedTasks.length,'/',ProxyState.tasks.length)
      let checkedTasks = ProxyState.checkedTasks.length.toString()
      let uncheckTasks = ProxyState.tasks.length.toString()
      document.getElementById("checked-vs-not").innerText = checkedTasks + "/" + uncheckTasks
    }
}

export const taskListService = new TaskListService