//usando o console
//usando ""

//Case sensitive
//não é obrigatório o uso de ;

console.log("Olá Usando JS");

//usando '' eu prefiro dessa forma
console.log('Começando JS em 04/08');

//agrupar conteúdo com ,
console.log('Olá sou o Israel',49,'anos');

//concatenar
console.log('Olá sou o Israel '+49+' anos');

//exibir mensagem no documento NÃO É MUITO USUAL
document.write('Escrevendo na página<br>');
document.write('Escrevendo na página<br>');
document.write('Escrevendo na página<br>');
document.write('Escrevendo na página<br>');
document.write('Escrevendo na página<br>');
document.write('Escrevendo na página<br>');

//exibir um alerta
//alert('Olá Mundo !!!!!');

// variáveis
// JS não é tipado - tipagem automática

// var declara variável - GLOBAL GERALLLLLL
// Não vamos usar o VAR
// var nome = 'Israel';
// var idade = 49;
// Não vamos usar , e + para juntar ou concatenar string
// console.log('O meu nome é',nome,'. Eu tenho',idade,'anos.');
// var nome = 'José';
// console.log(nome);
// profissao = 'Professor';
// console.log(profissao);

//cria um variável com escopo de bloco
let nome = 'Israel';
let idade = 49;
let salario = 25000.89;
let noite = true;
let quadro;
let letras = 'ZZZZ';
let coisas = {};

//verificar o tipo
console.log('Nome é do tipo:',typeof nome);
console.log('Idade é do tipo:',typeof(idade));
console.log('Salario é do tipo:',typeof(salario));
console.log('Noite é do tipo:',typeof noite);
console.log('Quadro é do tipo:',typeof(quadro));
console.log(idade * letras);
console.log('Coisas é do tipo',typeof(coisas));

idade = true;
console.log(idade, typeof idade);

// usando template string
// Deve abrir a crase 2 vezes ``
//USAR SEMPRE ESSE PARA EXIBIR NO CONSOLE OU MESMO NA TELA COM DOCUMENT
console.log(`Olá eu sou o ${nome} e tenho ${idade}. Já é noite ${noite}`);

nome = 'João';
console.log(nome);

//nome de vriável é case sensitive
//const - ele não muda
const CPF = '222.698.741-69';
console.log(CPF);
