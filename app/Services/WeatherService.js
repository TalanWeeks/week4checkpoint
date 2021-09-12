import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"


// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})

class WeatherService{
  
  async getWeatherInfo() {
    let res = await sandboxApi.get('')

    console.log('this is the weather data mi lord',res.data)

    ProxyState.weather = Object.values(res.data.main)
    ProxyState.weather.push(false)
    console.log("weather data in proxystate",ProxyState.weather)
    this._displayTempFahr() 

  }

  toggleUnit(){
    ProxyState.weather[6] = !ProxyState.weather[6]
    console.log(ProxyState.weather[6])
    if(ProxyState.weather[6] == true){
      this._displayTempCelsius()
    } else{
      this._displayTempFahr() 
    }
    
  }

  _displayTempFahr(){
    let weatherFahr = Math.floor(((ProxyState.weather[0] - 273.15)*9)/5) + 32
    let tempFeels = Math.floor(((ProxyState.weather[1] - 273.15)*9)/5) + 32
    let tempLow = Math.floor(((ProxyState.weather[2] - 273.15)*9)/5) + 32
    let tempHigh = Math.floor(((ProxyState.weather[3] - 273.15)*9)/5) + 32
    console.log("weather in fahrein",weatherFahr)

    document.getElementById("current-temp").innerText = " " + weatherFahr.toString() + " °f"
    document.getElementById("temp-feels").innerText = " " + tempFeels.toString() + " °f"
    document.getElementById("temp-high").innerText = " " + tempHigh.toString() + " °f"
    document.getElementById("temp-low").innerText = " " + tempLow.toString() + " °f"
  }

  _displayTempCelsius(){
    let weatherCelsius = Math.floor(ProxyState.weather[0] - 273.15)
    let tempFeels = Math.floor(ProxyState.weather[1] - 273.15)
    let tempLow = Math.floor(ProxyState.weather[2] - 273.15)
    let tempHigh = Math.floor(ProxyState.weather[3] - 273.15)
    console.log('weather in celsius',weatherCelsius)

    document.getElementById("current-temp").innerText = " " + weatherCelsius.toString() + " °c"
    document.getElementById("temp-feels").innerText = " " + tempFeels.toString() + " °c"
    document.getElementById("temp-high").innerText = " " + tempHigh.toString() + " °c"
    document.getElementById("temp-low").innerText = " " + tempLow.toString() + " °c"
  }

}
export const weatherService = new WeatherService