import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
  dropdownMenus.forEach((menu) => {
    const userEvents = ["touchstart", "click"];
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
    // menu.addEventListener("click", handleClick);
    // menu.addEventListener("touchstart", handleClick);
  });
}
