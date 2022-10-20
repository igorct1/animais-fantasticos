import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(menus, userEvents) {
    this.dropdownMenus = document.querySelectorAll(menus);
    if (userEvents === undefined) this.userEvents = ["touchstart", "click"];
    else this.userEvents = userEvents;
    this.activeClass = "active";
    // bind
    this.activeDropDown = this.activeDropDown.bind(this);
  }

  // ativa o dropdownmenu e adiciona a
  // função que observa o clique fora dele
  activeDropDown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDown);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length && this.userEvents) {
      this.addMenuEvents();
    }
    return this;
  }
}
