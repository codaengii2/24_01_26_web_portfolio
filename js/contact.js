window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const backEl = document.querySelector(".background");
  if (scrollValue > 2500) {
    // console.log("흰배경 나와");
    // backEl.style.height = "100%";
    backEl.style.opacity = "1";
  } else {
    // console.log("검은배경 나와");
    // backEl.style.height = "0";
    backEl.style.opacity = "0";
  }
});
