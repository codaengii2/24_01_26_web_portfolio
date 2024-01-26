window.onload = function () {
  const slider = document.querySelector(".pro_wrap");
  const slideLis = document.querySelectorAll(".pro");
  const moveButton = document.querySelector(".arrow");
  const rightEl = document.querySelector(".right img");
  const leftEl = document.querySelector(".left img");

  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * slideLis.length;
  slider.style.width = `${sliderWidth}px`;

  let currentIdx = 0; // 슬라이드 현재 번호
  let translate = 0; // 슬라이드 위치 값

  moveButton.addEventListener("click", moveSlide);
  function moveSlide(e) {
    e.preventDefault();
    if (e.target === rightEl) {
      if (currentIdx !== slideLis.length - 1) {
        translate -= liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        currentIdx += 1;
      }
    } else if (e.target === leftEl) {
      if (currentIdx !== 0) {
        translate += liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        currentIdx -= 1;
      }
    }

    if (currentIdx == slideLis.length - 1) {
      rightEl.style.opacity = 0;
    } else {
      rightEl.style.opacity = 1;
    }

    if (currentIdx == 0) {
      leftEl.style.opacity = 0;
    } else {
      leftEl.style.opacity = 1;
    }

    console.log(currentIdx);
  }
};
