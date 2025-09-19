/*
Luiz Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.84 de altura e seu imc é de 25.9259
*/

const nome = 'Gabriel Fernando'; 
const sobrenome = 'Herber';
const idade = 22;
const peso = 63;
const alturaEmCm = 165;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2025 - idade;
console.log (anoNascimento);


console.log(nome, sobrenome,'tem', idade, "anos, pesa", peso, 'kg');
console.log('tem', alturaEmCm, 'de altura e seu IMC e de', imc);
console.log(nome, 'nasceu em', anoNascimento,'.');
