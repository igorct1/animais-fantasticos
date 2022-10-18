export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  function tooltipCreate(element) {
    const tooltipbox = document.createElement("div");
    tooltipbox.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    return tooltipbox;
  }
  const onMouseMove = {
    handleEvent({ pageX, pageY }) {
      this.tooltipBox.style.top = `${pageY + 20}px`;
      this.tooltipBox.style.left = `${pageX + 20}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  function onMouseOver({ pageX, pageY }) {
    const tooltipBox = tooltipCreate(this);
    tooltipBox.style.top = `${pageY}px`;
    tooltipBox.style.left = `${pageX}px`;
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
