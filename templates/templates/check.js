const checkAll = document.querySelector(".checkAll input");
const check1 = document.querySelector(".checkOne input");
const check2 = document.querySelector(".checkTwo input");
const check3 = document.querySelector(".checkThree input");
const button = document.querySelector(".form_btn");
const btnCon = document.querySelector(".form_btn button");
const main = document.querySelector("main");
const navBar = document.querySelector(".navigation_bar");

const check = () => {
  checkAll.checked = false,
  check1.checked = false ,
  check2.checked = false ,
  check3.checked = false,
  btnCon.disabled = true,
  btnCon.style.background = "#f6f6f6",
  btnCon.style.color = "#191919",
  btnCon.style.cursor = "pointer"
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if(check1.checked === true && check2.checked === true) {
    alert("동의 완료");
    main.style.display = "none";
    auth.style.display = "flex";
    navBar.style.width = "50%";
  } else {
    alert("동의 항목을 모두 선택해주세요.");
  }
});

button.addEventListener("mouseover", () => {
  btnCon.style.background = "#f1d900";
})

button.addEventListener("mouseout", () => {
  btnCon.style.background = "#fee500";
})

checkAll.addEventListener("click", () => {
  if(checkAll.checked === true) {
    confirm("약관을 읽고 모두 동의하시겠습니까?") ? (
      check1.checked = true ,
      check2.checked = true,
      check3.checked = true,
      btnCon.disabled = false,
      btnCon.style.background = "#fee500",
      btnCon.style.cursor = "pointer"
      )
      : (
      check()
      )
  } else {
    check()
  }
});

check1.addEventListener("click", () => {
  if(check1.checked === true && check2.checked === true) {
    btnCon.disabled = false;
    btnCon.style.background = "#fee500";
    btnCon.style.cursor = "pointer";
  } else {
    btnCon.disabled = true,
    btnCon.style.background = "#f6f6f6",
    btnCon.style.color = "#191919",
    btnCon.style.cursor = "pointer"
  }
})

check2.addEventListener("click", () => {
  if(check1.checked === true && check2.checked === true) {
    btnCon.disabled = false;
    btnCon.style.background = "#fee500";
    btnCon.style.cursor = "pointer";
  } else {
    btnCon.disabled = true,
    btnCon.style.background = "#f6f6f6",
    btnCon.style.color = "#191919",
    btnCon.style.cursor = "pointer"
  }
})

