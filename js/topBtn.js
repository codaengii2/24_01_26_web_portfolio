const topEl = document.querySelector(".top_btn");
topEl.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
