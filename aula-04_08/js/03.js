//string é indexada
//             01234567...........................................51
const texto = 'JavaScript é uma linguagem de programação fantástica';
console.log(texto);

//tamanho da String
console.log(`Tamanho do texto: ${texto.length}`);

//letras maiúsculas
console.log(`Texto em maiúsculo: ${texto.toUpperCase()}`);

//letras minúsculas
console.log(`Texto em minúsculo: ${texto.toLowerCase()}`);

//exibir um caracter em uma determinada posição
console.log(`Caracter da posição 4: ${texto[4]}`);
console.log(`Caracter da posição 4: ${texto.charAt(4)}`);

//verificar se existe determinado conteúdo na string
console.log(`Procurar por ling: ${texto.indexOf('ling')}`);

//caso nao encontre ele retorna -1
console.log(`Procurar por @: ${texto.indexOf('@')}`);

// pegar uma parte da String
//nesse exemplo começará na posição 3 e para na 8 - não pega o caracter na posição 8
console.log(`Conteúdo entre 3 e 8: ${texto.slice(3,8)}`);

//copiar uma parte da string para uma variável
//se o segundo parametro nao for informado - pega até o fim da string
const stringCopiada = texto.slice(3,8);
console.log(texto);
console.log(stringCopiada);

//separar uma string por Caracter - define o que será o separador
//espaço em branco
const stringSeparada1 = texto.split(' ');
console.log(texto);
console.log(stringSeparada1);

//letra a como separador
const stringSeparada2 = texto.split('a');
console.log(stringSeparada2);

//gera um array onde cada caracter será uma nova posição
const stringSeparada3 = texto.split('');

console.log(stringSeparada3);
// definir quantidade elementos terão o array
const stringSeparada4 = texto.split(' ',3);
console.log(stringSeparada4);

// substituir caracteres
//substituindo o A por @ - fez isso apenas com o primeiro encontrado
console.log(texto.replace('a','@'));

//substuindo todos com Expressão regular - todas as letras A por @
//i permitirá a substituição de letras maiúsculas e minúsculas
//g verificará toda a string
console.log(texto.replace(/a/ig,'@'));

//caracteres com acento
console.log(texto.replace(/[a,\xE0-\xe6]/ig,'@'));
