export default class Funcionamento {
  constructor(weekDate) {
    this.funcionamento = document.querySelector(weekDate);
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana
      .split(",")
      .map((dia) => Number(dia));
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map((horario) => Number(horario));
    this.funcionamento.innerText = "Segunda a sex das 8 as 18h";
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add("active");
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
