const faturamentoDiario = [1500, 2100, 1800, 2500, 1900, 2200, 2000, 1700, 2400, 2300, 2600, 2000, 2100, 1700, 1900, 2300, 2200, 2500, 2100, 2400, 2200, 1900, 2000, 2300, 2100, 2400, 2000, 2200, 1900, 2500, 2300];

let menorValor = faturamentoDiario[0];
let maiorValor = faturamentoDiario[0];
let totalFaturamento = 0;


for (let i = 0; i < faturamentoDiario.length; i++) {
  const valor = faturamentoDiario[i];
  if (valor < menorValor) {
    menorValor = valor;
  }
  if (valor > maiorValor) {
    maiorValor = valor;
  }
  totalFaturamento += valor;
}

const mediaMensal = totalFaturamento / faturamentoDiario.length;

let numeroDiasAcimaMedia = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
  const valor = faturamentoDiario[i];
  if (valor > mediaMensal) {
    numeroDiasAcimaMedia++;
  }
}

console.log(`Menor valor de faturamento diário: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento diário: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento diário acima da média mensal: ${numeroDiasAcimaMedia}`);
