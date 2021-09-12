import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


// function _drawWeatherInfo(){
//   console.log("i shall draw thy weather")
//   let weather = ProxyState.weather
//   let weatherTemplate = ''
//   weather.forEach(weather => weatherTemplate += weather.weatherTemplate)
//   document.getElementById("weather").innerHTML= weatherTemplate
// }

export class WeatherController{
  constructor(){
    // ProxyState.on('weather[6]',weatherService.getWeatherInfo)
    weatherService.getWeatherInfo()
  }

  ToggleUnit(){
    weatherService.toggleUnit()
  }
}