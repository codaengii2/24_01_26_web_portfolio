// setTimeout(function () {
const withEl = document.querySelector(".main_title span");
const mainEl = document.querySelector(".main_title");
const suinEl = document.querySelector(".suin");
let windowW = window.innerWidth;
console.log(windowW);
withEl.style.opacity = 1;
// if (windowW >= 1280) {
//   mainEl.style.marginTop = "150px";
//   // suinEl.style.marginTop = "50px";
// }

setTimeout(function () {
  if (windowW >= 1280) {
    withEl.style.display = "none";
    // mainEl.style.transform = "translateX(100px)";
    suinEl.style.opacity = 1;
    suinEl.style.marginTop = "20px";
  } else {
    withEl.style.opacity = 0;
    mainEl.style.transform = "translateY(20px)";
    suinEl.style.opacity = 1;
    suinEl.style.marginTop = "-80px";
  }
}, 4000);
// }, 0);
