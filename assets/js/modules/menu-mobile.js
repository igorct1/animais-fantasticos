import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.menuEvents = ["click", "touchstart"];
    this.activeClass = "active";
    // bind
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.menuEvents, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  // adiciona o evento ao menu
  addMenuEvents() {
    this.menuEvents.forEach((item) => {
      this.menuButton.addEventListener(item, this.openMenu);
    });
  }

  // inicia eventos
  init() {
    if (this.menuButton && this) {
      this.addMenuEvents();
    }
    return this;
  }
}
