export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  funcionamento.innerText = "Seg a sex - 8 as 18h";
  const diasAberto = funcionamento.dataset.semana
    .split(",")
    .map((dia) => Number(dia));
  const horariosAbertos = funcionamento.dataset.horario
    .split(",")
    .map((horario) => Number(horario));
  const dataHoje = new Date();
  const dia = dataHoje.getDay();
  const horarioAgora = dataHoje.getHours();
  const semanaAberto = diasAberto.indexOf(dia) !== -1;
  const horarioAberto =
    horarioAgora >= horariosAbertos[0] && horarioAgora < horariosAbertos[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("active");
  }
}
