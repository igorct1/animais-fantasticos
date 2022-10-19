export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((value) => {
      const btcpreco = document.querySelector(target);
      const precoBtc = value.BRL.sell;
      btcpreco.innerText = (100 / precoBtc).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
