const headerEl = document.querySelector(".header");
const menuBtnEl = document.querySelector(".menu-btn");

menuBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "initial" : "hidden";
});
