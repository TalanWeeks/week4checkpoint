class CurrentTimeService{
  getCurrentTime(){
    let today = new Date()

    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let date = today.getDate()
    let currentDate = `${month}/${date}/${year}` 

    let hour = today.getHours();     
    let minute = today.getMinutes();     
    let second = today.getSeconds();     
    let period = "";
     
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
     
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
     
    hour = update(hour);
    minute = update(minute);
    second = update(second);
     
    document.getElementById('current-date').innerText = currentDate
    document.getElementById("current-time").innerText = hour + " : " + minute + " : " + second + " " + period;        
    }       
  }
  function update(t) {
   if (t < 10) {
   return "0" + t;
    }
   else {
   return t;
   }
  }
export const currentTimeService = new CurrentTimeService 