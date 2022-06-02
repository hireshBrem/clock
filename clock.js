const time = document.getElementById("time");
const timeOfDay = document.getElementById("timeOfDay");

setInterval(() => {
    display();
}, 1000)

function display() {
    let i = Date().split(" ");
    time.textContent = i[4];
    hours = time.textContent.split(":")[1];
    if(hours >= 12) {
        timeOfDay.textContent = " PM";
    }else{
        timeOfDay.textContent = " AM";
    }
}