const nav = document.querySelector(".m_menu");
const navMenu = document.querySelector(".m_menu > ul");
const menuItem = document.querySelectorAll(".m_menu > ul > li > a");

function closeMenu() {
  nav.classList.add("isOff");
  navMenu.classList.add("isOff");
  nav.classList.remove("isOn");
  navMenu.classList.remove("isOn");
}
function openMenu() {
  nav.classList.add("isOn");
  navMenu.classList.add("isOn");
  nav.classList.remove("isOff");
  navMenu.classList.remove("isOff");
}

document.querySelector(".open_btn > i").addEventListener("click", openMenu);
document.querySelector(".close_btn > i").addEventListener("click", closeMenu);

menuItem.forEach((item) => {
  item.addEventListener("click", closeMenu);
});
