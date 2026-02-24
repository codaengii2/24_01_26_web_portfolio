const withTextEl = document.querySelector(".main_title span");
const mainTitleEl = document.querySelector(".main_title");
const nameWordEl = document.querySelector(".suin");

if (withTextEl && mainTitleEl && nameWordEl) {
  const DESKTOP_WIDTH = 1280;
  const REVEAL_DELAY_MS = 4000;
  const isDesktop = window.innerWidth >= DESKTOP_WIDTH;

  withTextEl.style.opacity = "1";

  setTimeout(() => {
    if (isDesktop) {
      withTextEl.style.display = "none";
      nameWordEl.style.opacity = "1";
      nameWordEl.style.marginTop = "20px";
      return;
    }

    withTextEl.style.opacity = "0";
    mainTitleEl.style.transform = "translateY(20px)";
    nameWordEl.style.opacity = "1";
    nameWordEl.style.marginTop = "-80px";
  }, REVEAL_DELAY_MS);
}
