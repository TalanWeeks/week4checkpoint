import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

export class WeatherController{
  constructor(){
    // ProxyState.on('weather[6]',weatherService.getWeatherInfo)
    weatherService.getWeatherInfo()
  }
  ToggleUnit(){
    weatherService.toggleUnit()
  }
}