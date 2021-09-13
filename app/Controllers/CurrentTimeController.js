import { ProxyState } from "../AppState.js";
import { currentTimeService } from "../Services/CurrentTimeService.js";


export class CurrentTimeController{
  constructor(){
    currentTimeService.getCurrentTime()
    setInterval(currentTimeService.getCurrentTime, 1000)
  }  
}