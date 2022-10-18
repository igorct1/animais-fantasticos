import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
  ["click", "touchstart"].forEach((item) => {
    menuButton.addEventListener(item, openMenu);
  });
}
