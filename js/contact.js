const CONTACT_BACKGROUND_TRIGGER_Y = 2500;
const contactBackgroundEl = document.querySelector(".background");

if (contactBackgroundEl) {
  window.addEventListener("scroll", () => {
    const shouldShow = window.scrollY > CONTACT_BACKGROUND_TRIGGER_Y;
    contactBackgroundEl.style.opacity = shouldShow ? "1" : "0";
  });
}
