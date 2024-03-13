let openBtn = document.querySelector(".open_btn > i");
let closeBtn = document.querySelector(".close_btn > i");
let nav = document.querySelector(".m_menu");
let navMenu = document.querySelector(".m_menu > ul");

closeBtn.addEventListener("click", () => {
  nav.classList.add("isOff");
  nav.classList.remove("isOn");
  navMenu.classList.add("isOff");
  navMenu.classList.remove("isOn");
});

openBtn.addEventListener("click", () => {
  nav.classList.add("isOn");
  nav.classList.remove("isOff");
  navMenu.classList.add("isOn");
  navMenu.classList.remove("isOff");
});
