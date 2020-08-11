// Objeto Math
let num1 = 321.53534564435;
console.log(num1);

//arrendondamento para o próximo inteiro
console.log(Math.ceil(num1));

//arrendondamento para o inteiro atual
console.log(Math.floor(num1));

//arrendondamento para cima - caso o decimal seja maior que 50
//arrendondamento para baixo - caso o decimal seja menor ou igual a 49
console.log(Math.round(num1));

//encontra o maior valor em um grupo de valores
console.log(Math.max(23,12,45,33,11,46,-14,-89));

//encontra o menor valor em um grupo de valores
console.log(Math.min(23,12,45,33,11,46,-14,-89));

//raiz quadrada
console.log(Math.sqrt(25));

//raiz cúbica
console.log(Math.cbrt(27));

//potência
console.log(Math.pow(2,10));
console.log(2**10);

//sorteio de um número entre 0 e 1
let numeroSorteado1 = Math.random();
console.log(`Número sorteado: ${numeroSorteado1}`);

// Sortear um número entre 0 e 100
let numeroSorteado2 = Math.random()*101;
console.log(`Número sorteado: ${numeroSorteado2}`);

// Sortear um número entre 0 e 100 - sem casas decimais
let numeroSorteado3 = Math.round(Math.random()*101);
console.log(`Número sorteado: ${numeroSorteado3}`);

// Sortear um número entre 0 e 100 - apenas a parte inteira
let numeroSorteado4 = parseInt(Math.random()*101);
console.log(`Número sorteado: ${numeroSorteado4}`);

//Recebe uma String mas podemos converter em um number
let numeroDigitado = Number(prompt('Entre com um valor qualquer'));
console.log(`Número digitado:${numeroDigitado}`);
console.log(typeof(numeroDigitado));

numeroDigitado+=10;
console.log(`Número digitado:${numeroDigitado}`);
