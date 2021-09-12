class CurrentTimeService{
  getCurrentTime(){
    let today = new Date()

    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let date = today.getDate()

    let currentDate = `${month}/${date}/${year}`
    console.log(currentDate)

    let hours = today.getHours()
    let minutes = today.getMinutes() 

    let currentTime = `${hours}:${minutes}`
    console.log(currentTime)

    document.getElementById('current-date').innerText = currentDate
    document.getElementById('current-time').innerText = currentTime

  }
  
  addZero(num){
    return num<10 ? `0${num}` :num;
  }

}

export const currentTimeService = new CurrentTimeService