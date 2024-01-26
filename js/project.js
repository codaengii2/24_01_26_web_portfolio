const proEl = document.querySelectorAll(".pro_wrap");

proEl.forEach(function (element) {
  const proCon = element.querySelector(".pro_con_wrap");
  element.addEventListener("click", function () {
    proCon.classList.toggle("active01");
    proCon.style.transition = "0.5s";
  });
});
