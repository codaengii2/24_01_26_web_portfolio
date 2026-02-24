const topButtonEl = document.querySelector(".top_btn");

if (topButtonEl) {
  topButtonEl.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}
