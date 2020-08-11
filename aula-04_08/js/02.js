//operadores

let valor1 = 10;
let valor2 = 2;
let resultado = 0;

//operadores aritméticos
resultado = (valor1 + valor2);
console.log(`${valor1} + ${valor2} = ${resultado}`);

resultado = (valor1 - valor2);
console.log(`${valor1} - ${valor2} = ${resultado}`);

resultado = (valor1 * valor2);
console.log(`${valor1} * ${valor2} = ${resultado}`);

resultado = (valor1 / valor2);
console.log(`${valor1} / ${valor2} = ${resultado}`);

resultado = (valor1 % valor2);
console.log(`${valor1} % ${valor2} = ${resultado}`);

resultado = (valor1 ** valor2);
console.log(`${valor1} ** ${valor2} = ${resultado}`);

console.log(`--------------------INCREMENTO-----------------------`);
//operadores de incremento
let contador = 0;
console.log(`Valor do contador: ${contador}`);

contador++;
console.log(`Valor do contador: ${contador}`);

contador++;
console.log(`Valor do contador: ${contador}`);

contador++;
console.log(`Valor do contador: ${contador}`);

console.log(`--------------------DECREMENTO-----------------------`);
//operadores de incremento
contador--;
console.log(`Valor do contador: ${contador}`);

contador--;
console.log(`Valor do contador: ${contador}`);

contador--;
console.log(`Valor do contador: ${contador}`);

//calcular e depois faz o incremento
console.log(`--------------------Pós fixada-----------------------`);
console.log(valor1);
console.log(valor2);
resultado = valor1++ + valor2++;
console.log(resultado);
console.log(valor1);
console.log(valor2);


//fazer o incremento e depois calcular
console.log(`--------------------Pré fixada-----------------------`);
console.log(valor1);
console.log(valor2);
resultado = valor1++ + ++valor2;
console.log(resultado);
console.log(valor1);
console.log(valor2);


console.log(`--------------------Atribuição-----------------------`);
valor1 = 10;
valor2 = 2;
console.log(valor1);
console.log(valor2);
valor1+=20;
console.log(valor1);
valor1-=20;
console.log(valor1);

console.log(`--------------------Relacionais-----------------------`);

resultado = (valor1 > valor2);
console.log(`${valor1} > ${valor2} = ${resultado}`);

resultado = (valor1 < valor2);
console.log(`${valor1} < ${valor2} = ${resultado}`);

resultado = (valor1 >= valor2);
console.log(`${valor1} >= ${valor2} = ${resultado}`);

resultado = (valor1 <= valor2);
console.log(`${valor1} <= ${valor2} = ${resultado}`);

resultado = (valor1 == valor2);
console.log(`${valor1} == ${valor2} = ${resultado}`);

resultado = (valor1 != valor2);
console.log(`${valor1} != ${valor2} = ${resultado}`);

valor1 = 20;
valor2 = '20'
//não usar essse
resultado = (valor1 == valor2);
console.log(`${valor1} == ${valor2} = ${resultado}`);

// usar esse aqui - compara se são iguais E tem o mesmo tipo
resultado = (valor1 === valor2);
console.log(`${valor1} === ${valor2} = ${resultado}`);

// não usar
resultado = (valor1 != valor2);
console.log(`${valor1} != ${valor2} = ${resultado}`);

// usar esse aqui
resultado = (valor1 !== valor2);
console.log(`${valor1} !== ${valor2} = ${resultado}`);

console.log(`--------------------Lógicos-----------------------`);
valor2 = 20;

//Com operador OU basta 1 ser verdadeiro para resultado ser verd
resultado = ((valor1 === valor2) || (valor1 < valor2));
console.log(`${valor1} === ${valor2} || ${valor1} < ${valor2} = ${resultado}`);

//Com operador E todos precisam ser verdadeiros para resultado ser verd
resultado = ((valor1 === valor2) && (valor1 < valor2));
console.log(`${valor1} === ${valor2} && ${valor1} < ${valor2} = ${resultado}`);

//Negação !
resultado = !((valor1 === valor2) && (valor1 < valor2));
console.log(`!(${valor1} === ${valor2} && ${valor1} < ${valor2} = ${resultado})`);
