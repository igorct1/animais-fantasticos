export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.active = "active";
  }

  activeTab(index) {
    const dataset = this.tabContent[index].dataset.anime;
    this.tabContent.forEach((section) => {
      section.classList.remove(this.active);
    });
    this.tabContent[index].classList.add(this.active, dataset);
  }

  addTabEvent() {
    this.tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabEvent();
    }
    return this;
  }
}
