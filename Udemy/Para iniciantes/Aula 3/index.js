function fatorial(n) {
  let resultado = 1;
  for (let i = n; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5)); // saída: 120
