const clockEvent = document.querySelector(".clock") , 
    clockTitle = clockEvent.querySelector("h1");

function getTime() {
  const date = new Date();
  const day = date.toLocaleString();
  clockTitle.innerHTML = `${day}`;
}

function init() {
  getTime();
  setInterval(getTime , 1000);
}

init();