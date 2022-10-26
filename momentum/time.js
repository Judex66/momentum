const userName = document.querySelector('.name')

function zero(num)
{
    if (num < 10)
    {
        num='0'+num;
    }
    return num;
}
function time()
{
    var time = new Date();
    var hours = zero(time.getHours());
    var minutes = zero(time.getMinutes());
    var seconds = zero(time.getSeconds());
    return hours+":"+minutes+":"+seconds;
}
function date()
{
  var monthe=["Junuary","February","March","April","May","June","July","August","September","October","November","December"];
  var days=["Sunday","Monday","Tuesday","Wednes­day","Thursday","Friday","Saturday"];
    var date = new Date();
    var day = (date.getDate());
    return days[date.getDay()]+", "+monthe[date.getMonth()]+" "+day;
}
function mess(){
    var time = new Date();
    var hours = zero(time.getHours());
    var message='';
    if (hours <= 12) {
      message = 'Good morning';
    } else if (hours <= 18) {
      message = 'Good afternoon';
    } else {
      message = 'Good evening';
    }

    return message; 
}
setInterval(function () {
    document.querySelector('.greeting').innerHTML = mess();
},100);

setInterval(function () {
    document.querySelector('.time').innerHTML = time();
},100);
setInterval(function () {
    document.querySelector('.date').innerHTML = date();
},100);

