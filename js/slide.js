window.addEventListener("load", () => {
  const sliderEl = document.querySelector(".pro_wrap");
  const slideEls = document.querySelectorAll(".pro");
  const moveButtonEl = document.querySelector(".arrow");
  const rightArrowEl = document.querySelector(".right img");
  const leftArrowEl = document.querySelector(".left img");

  if (
    !sliderEl ||
    !slideEls.length ||
    !moveButtonEl ||
    !rightArrowEl ||
    !leftArrowEl
  ) {
    return;
  }

  const slideWidth = slideEls[0].clientWidth;
  sliderEl.style.width = `${slideWidth * slideEls.length}px`;

  let currentIndex = 0;
  let translateX = 0;

  const updateArrowState = () => {
    rightArrowEl.style.opacity = currentIndex === slideEls.length - 1 ? "0" : "1";
    leftArrowEl.style.opacity = currentIndex === 0 ? "0" : "1";
  };

  const moveSlide = (event) => {
    event.preventDefault();

    if (event.target === rightArrowEl && currentIndex < slideEls.length - 1) {
      currentIndex += 1;
      translateX -= slideWidth;
    }

    if (event.target === leftArrowEl && currentIndex > 0) {
      currentIndex -= 1;
      translateX += slideWidth;
    }

    sliderEl.style.transform = `translateX(${translateX}px)`;
    updateArrowState();
  };

  moveButtonEl.addEventListener("click", moveSlide);
  updateArrowState();
});
