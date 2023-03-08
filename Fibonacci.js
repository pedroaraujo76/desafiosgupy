function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const numero = 10; // Escolha o número aqui

let encontrado = false;

for (let i = 0; i <= numero; i++) {
  const valor = fibonacci(i);
  if (valor === numero) {
    encontrado = true;
    break;
  } else if (valor > numero) {
    break;
  }
}

if (encontrado) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
