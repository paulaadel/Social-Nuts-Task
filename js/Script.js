const icon = document.querySelector(".opener");
const sideMenu = document.querySelector(".side-menu");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".showMenu");



icon.addEventListener("click", () => {
  sideMenu.style.left = "0";
  });
  menu.addEventListener("click", () => {
    sideMenu.style.left = "0";
    });
closeIcon.addEventListener("click", () => {
  sideMenu.style.left = "100%";
});

