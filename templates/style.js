/*실시간 시간 표시 JS
Style.js*/
const clockEvent = document.querySelector("#clock"); 
const clockTitle = clockEvent.querySelector("h2");
const loading = document.querySelector('.loadingPage');
const loader = document.querySelector('.loader');
const container = document.querySelector('.container');
const full = document.querySelector('.full');
const cameraFull = document.querySelector('#camera_full');
const backScreen = document.querySelector('.backScreen');
const numberText = document.getElementById('numberText');

//카메라 확대
full.addEventListener('click', () => {
  cameraFull.style.display = "flex";
  clockEvent.style.display = 'none';
  container.style.display = 'none';
})

backScreen.addEventListener('click', () =>{
  cameraFull.style.display = "none";
  clockEvent.style.display = '';
  container.style.display = 'flex';
})

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

// 실시간 시간 확인
const getTime = () => {
  setInterval(() => {
    const date = new Date();
    const day = date.toLocaleString();
    clockTitle.innerHTML = `${day}`;
  }, 1000);
}
getTime();