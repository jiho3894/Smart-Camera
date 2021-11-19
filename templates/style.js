/*실시간 시간 표시 JS
Style.js*/
const clockEvent = document.querySelector("#clock"); 
const clockTitle = clockEvent.querySelector("h2");
const camera = document.getElementById('camera');
const loading = document.querySelector('.loadingPage');
const loader = document.querySelector('.loader');
const numberText = document.getElementById('numberText');
const call = document.querySelector('.call');
const container = document.querySelector('.container');

numberText.addEventListener('click', () => {
  numberText.value = "";
  numberText.style.opacity = 1;
})

setTimeout(() => {
  loader.style.background = 'aqua';
  loader.style.content = '완료';
}, 3800);

//로딩창 setTimeout

setTimeout(() => {
  loading.style.display = 'none';
  container.style.display = 'flex';
}, 5000);

container.style.display = 'none';
auth.style.display = 'none';
clockEvent.style.display = 'none';
camera.style.display = 'none';
call.style.display = 'none';

// 실시간 시간 확인
const getTime = () => {
  setInterval(() => {
    const date = new Date();
    const day = date.toLocaleString();
    clockTitle.innerHTML = `${day}`;
  }, 1000);
}
getTime();