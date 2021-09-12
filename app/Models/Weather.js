import { generateId } from "../Utils/generateId.js"


export class Weather{
  constructor(weatherData){
    this.id = weatherData.id 
    this.weatherId = generateId()
    this.currentTempKelvin = weatherData.main.temp 
    this.currentTempFahren = (((weatherData.main.temp - 273.15)*9)/5) + 32
    this.currentTempCelsius = (weatherData.main.temp - 273.15) 
    this.highTemp = weatherData.main.temp_max
    this.lowTemp = weatherData.main.temp_min
    this.feelTemp = weatherData.main.temp.feels_like
    
  }

  // get weatherTemplate(){

  // }
}