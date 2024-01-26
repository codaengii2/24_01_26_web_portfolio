const wrapEl = document.getElementById("wrap");
const btnEl = document.querySelector(".menu_btn");
const liEl = document.querySelectorAll(".menu li");
const lineEl1 = document.querySelector(".line:nth-child(1)");
const lineEl2 = document.querySelector(".line:nth-child(2)");
const menuEl = document.querySelector(".menu");

const openMenu = () => {
  lineEl1.style.transform = "rotate(45deg)";
  lineEl1.style.top = "4px";
  lineEl2.style.transform = "rotate(-45deg)";
  lineEl2.style.top = "-4px";
};

const closeMenu = () => {
  lineEl1.style.transform = "rotate(0deg)";
  lineEl1.style.top = "0";
  lineEl2.style.transform = "rotate(0deg)";
  lineEl2.style.top = "0";
  menuEl.style.zIndex = "-99";
};

const menuHandler = () => {
  if (menuEl.classList.contains("active02") === false) {
    openMenu(); //메뉴버튼
    menuEl.classList.remove("activeNone");
    menuEl.classList.add("active02"); //메뉴창 생기게
    wrapEl.style.position = "fixed";
  } else if (menuEl.classList.contains("active02") === true) {
    closeMenu();
    menuEl.classList.remove("active02");
    wrapEl.style.position = "relative";
    // li01();
    // li02();
    // li03();
  }
};

btnEl.addEventListener("click", menuHandler);

// liEl.forEach(function (element) {
//   element.addEventListener("click", function () {
//     //각 메뉴 버튼을 클릭하면
//     if (menuEl.classList.contains("activeNone") === false) {
//       //메뉴가 열린상태
//       menuEl.classList.add("activeNone"); // 메뉴창이 사라지게
//       closeMenu();
//       wrapEl.style.position = "relative"; //wrap에 스크롤바가 다시 생기게
//     } else if (menuEl.classList.contains("activeNone") === true) {
//       //메뉴 닫힌상태
//       menuEl.classList.add("active02"); //메뉴창이 다시 생기게
//     }
//   });
// });

// function li01() {
//   liEl[1].addEventListener("click", function () {
//     const sec2 = document.querySelector(".sec_2");
//     sec2.scrollIntoView({ behavior: "smooth" });
//   });
// }

// function li02() {
//   liEl[2].addEventListener("click", function () {
//     const sec3 = document.querySelector(".sec_3");
//     sec3.scrollIntoView({ behavior: "smooth" });
//   });
// }

// function li03() {
//   liEl[3].addEventListener("click", function () {
//     const sec4 = document.querySelector(".sec_4");
//     sec4.scrollIntoView({ behavior: "smooth" });
//   });
// }

liEl.forEach(function (element, index) {
  element.addEventListener("click", function () {
    if (menuEl.classList.contains("activeNone") === false) {
      menuEl.classList.add("activeNone");
      closeMenu();
      wrapEl.style.position = "relative";
      wrapEl.style.zIndex = "99";
    } else if (menuEl.classList.contains("activeNone") === true) {
      menuEl.classList.add("active02");
    }

    // Scroll to corresponding section
    const sections = [null, ".sec_2", ".sec_3", ".sec_4"];
    const section = document.querySelector(sections[index]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
