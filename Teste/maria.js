let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

// Corrigido: convertendo cada variável em sua própria linha
num1 = Number(num1);
num2 = Number(num2);

// Agora a divisão funcionará como esperado
alert(`O resultado da sua conta foi: ${ num1 / num2 }`);