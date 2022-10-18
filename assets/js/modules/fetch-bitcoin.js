export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((res) => res.json())
    .then((value) => {
      const btcpreco = document.querySelector(".btc-preco");
      const precoBtc = value.BRL.sell;
      btcpreco.innerText = (100 / precoBtc).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
