//get parameters from document
let dayOfWeek = document.getElementById("day")
let timeOfDay = document.getElementById("time")


//create date and time
function updateClock() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var time = `${hours}:${minutes}:${seconds}`;

    timeOfDay.innerHTML = time;
}
setInterval(updateClock, 10);
var d = new Date();
var day = d.getDay();

switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

//link it to document

dayOfWeek.innerHTML = day;
