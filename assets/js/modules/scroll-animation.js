export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.7;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - halfWindow < 0;
      if (sectionVisible) {
        section.classList.add("active");
      }
    });
  }
  if (sections.length) {
    sections[0].classList.add("active");
    // animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
