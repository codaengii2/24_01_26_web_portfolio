const wrapEl = document.getElementById("wrap");
const menuBtnEl = document.querySelector(".menu_btn");
const menuEl = document.querySelector(".menu");
const menuLineEls = document.querySelectorAll(".menu_btn .line");
const menuLinkEls = document.querySelectorAll(".menu a[data-target]");

if (wrapEl && menuBtnEl && menuEl && menuLineEls.length === 2) {
  const [lineTopEl, lineBottomEl] = menuLineEls;
  let isMenuOpen = false;

  const setMenuButtonState = (opened) => {
    lineTopEl.style.transform = opened ? "rotate(45deg)" : "rotate(0deg)";
    lineTopEl.style.top = opened ? "4px" : "0";
    lineBottomEl.style.transform = opened ? "rotate(-45deg)" : "rotate(0deg)";
    lineBottomEl.style.top = opened ? "-4px" : "0";
  };

  const openMenu = () => {
    isMenuOpen = true;
    setMenuButtonState(true);
    menuEl.classList.remove("activeNone");
    menuEl.classList.add("active02");
    wrapEl.style.position = "fixed";
  };

  const closeMenu = () => {
    isMenuOpen = false;
    setMenuButtonState(false);
    menuEl.classList.remove("active02");
    menuEl.classList.add("activeNone");
    wrapEl.style.position = "relative";
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
      return;
    }
    openMenu();
  };

  menuBtnEl.addEventListener("click", toggleMenu);
  menuBtnEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });

  menuLinkEls.forEach((linkEl) => {
    linkEl.addEventListener("click", (event) => {
      const targetId = linkEl.dataset.target;
      if (!targetId) return;

      const sectionEl = document.getElementById(targetId);
      if (!sectionEl) return;

      event.preventDefault();
      sectionEl.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    });
  });
}
