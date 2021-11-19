/* 이메일 인증 , 인증 확인 절차 JS */

// 보안문자 변수
const number = Math.floor(Math.random() * 9999);

const btn = document.getElementById('button');
const sameNumber = document.getElementById('sameNumber');
const auth = document.getElementById('auth');
const form = document.getElementById('form');

//임시 확인용 보안문자
console.log(number);

const sendNumber = () => {
  message.value = number;
}
sendNumber();

//Email.js
form.addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = '이메일 전송 중...';
  const serviceID = 'default_service';
  const templateID = 'template_hefz86s';
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '다시 전송하기';
      alert('전송 완료!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

sameNumber.addEventListener("submit", (e) => {
  //새로고침 x
  e.preventDefault();
  const value = Number(numberText.value);
  if(value === number) {
    // 인증 폼 안보이게하기
    alert('인증에 성공하였습니다.');
    auth.style.display = "none";
    clockEvent.style.display = 'block';
    camera.style.display = 'block';
    call.style.display = 'block';
  } else {
    // alert 오류 재 검사
    alert('인증 실패하였습니다. 다시 입력해주세요');
  }
});