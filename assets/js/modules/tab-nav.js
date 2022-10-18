export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  function activeTab(index) {
    const dataset = tabContent[index].dataset.anime;
    tabContent.forEach((section) => {
      section.classList.remove("active");
    });
    tabContent[index].classList.add("active", dataset);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active", "show-right");

    tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
