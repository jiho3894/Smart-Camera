/*실시간 시간 표시 JS
Style.js*/

const clockEvent = document.querySelector("#clock"); 
const clockTitle = clockEvent.querySelector("h2");
const camera = document.getElementById('camera');
const loading = document.querySelector('.container');
const numberText = document.getElementById('numberText');
const call = document.querySelector('.call');

numberText.addEventListener('click', () => {
  numberText.value = "";
})

setTimeout(() => {
  loading.style.display = 'none';
}, 5000);

clockEvent.style.display = 'none';
camera.style.display = 'none';
call.style.display = 'none';

const getTime = () => {
  setInterval(() => {
    const date = new Date();
    const day = date.toLocaleString();
    clockTitle.innerHTML = `${day}`;
  }, 1000);
}
getTime();