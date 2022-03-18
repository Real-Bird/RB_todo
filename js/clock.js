const clock = document.querySelector("#clock");
const fullDate = document.querySelector("#fulldate");

function getFullDate() {
  const toDayDate = new Date();
  const year = String(toDayDate.getFullYear());
  const month = String(toDayDate.getMonth() + 1);
  const day = String(toDayDate.getDate());
  fullDate.innerText = `${year}-${month}-${day}`;
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getFullDate();
getClock();
setInterval(getClock, 1000);
