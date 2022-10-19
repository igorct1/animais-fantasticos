export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.7;

    // bind
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - this.halfWindow < 0;
      if (sectionVisible) {
        section.classList.add("active");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
    }
    window.addEventListener("scroll", this.animaScroll);
  }
}
