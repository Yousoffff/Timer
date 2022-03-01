const second = document.querySelector("#second");
const minute = document.querySelector("#minute");
const hour = document.querySelector("#hour");
const day = document.querySelector("#day");

const date =  new Date("1 Jan2023");

function calculateTime(){
    const currentDate = new Date();
    const sec = (date - currentDate) /1000;
    day.innerHTML = Math.floor(sec/86400);
    hour.innerHTML = Math.floor(sec/3600)%24;
    minute.innerHTML = Math.floor(sec/60)%60;
    second.innerHTML = Math.floor(sec) % 60;

}
calculateTime();
setInterval(calculateTime,1000);


