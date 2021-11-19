const checkAll = document.querySelector(".checkAll input");
const check1 = document.querySelector(".checkOne input");
const check2 = document.querySelector(".checkTwo input");
const check3 = document.querySelector(".checkThree input");
const button = document.querySelector(".form_btn");
const main = document.querySelector("main");
const navBar = document.querySelector(".navigation_bar");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if(check1.checked === true && check2.checked === true) {
    alert("동의 완료");
    main.style.display = "none";
    auth.style.display = "flex";
    navBar.style.width = "33%";
  } else {
    alert("동의 항목을 모두 선택해주세요.");
  }
})

checkAll.addEventListener("click", () => {
  if(checkAll.checked === true) {
    confirm("약관을 읽고 모두 동의하시겠습니까?") ? (
      check1.checked = true ,
      check2.checked = true,
      check3.checked = true
      )
      : (
      check1.checked = false ,
      check2.checked = false ,
      check3.checked = false
      )
  } else {
    check1.checked = false ,
    check2.checked = false ,
    check3.checked = false;
  }
})

