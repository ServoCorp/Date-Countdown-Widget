function updateTimer() {
    newDate = Date.parse("dec 12, 2021 01:30:00");
 now = new Date();
 diff = newDate - now;

 days = Math.floor(diff / (1000 * 60 * 60 * 24));
 hours = Math.floor(diff / (1000 * 60 * 60));
 mins = Math.floor(diff / (1000 * 60));
 secs = Math.floor(diff / 1000);

 d = days;
 h = hours - days * 24;
 m = mins - hours * 60;
 s = secs - mins * 60;

 //console.log(document.getElementsByClassName("myDay"))

 document.getElementsByClassName("myDay")[0]
  .innerHTML = d;
  document.getElementsByClassName("myHour")[0]
  .innerHTML = h;
  document.getElementsByClassName("myMin")[0]
  .innerHTML = m;
  document.getElementsByClassName("mySec")[0]
  .innerHTML = s;
}
setInterval('updateTimer()', 1000);