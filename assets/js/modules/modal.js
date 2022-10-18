export default function initModal() {
  const btnOpen = document.querySelector("[data-modal='abrir']");
  const btnClose = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function outButton(event) {
    if (event.target === this) {
      this.classList.remove("ativo");
    }
  }
  if (btnOpen && btnClose && containerModal) {
    btnOpen.addEventListener("click", toggleModal);
    btnClose.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", outButton);
  }
}
