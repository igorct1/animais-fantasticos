// Scroll Suave link Interno
export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
  if (internalLinks.length) {
    internalLinks.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
