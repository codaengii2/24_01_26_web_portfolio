const projectCardEls = document.querySelectorAll(".pro_wrap");

projectCardEls.forEach((cardEl) => {
  const contentEl = cardEl.querySelector(".pro_con_wrap");
  if (!contentEl) return;

  cardEl.addEventListener("click", () => {
    contentEl.classList.toggle("active01");
  });
});
