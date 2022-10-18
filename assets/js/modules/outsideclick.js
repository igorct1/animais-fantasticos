export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute("data-outside");
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
  if (!element.hasAttribute("data-outside")) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute("data-outside", "");
  }
}
