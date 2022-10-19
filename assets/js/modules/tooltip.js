export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // criar tooltip box e coloca no body
  tooltipCreate(element) {
    const tooltipbox = document.createElement("div");
    tooltipbox.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    this.tooltipbox = tooltipbox;
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove({ pageX, pageY }) {
    this.tooltipbox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.tooltipbox.style.left = `${pageX - 160}px`;
    } else {
      this.tooltipbox.style.left = `${pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipbox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca em uma propriedade
    this.tooltipCreate(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
