const numero = parseInt(Math.random() * 100);

console.log(`O número sorteado foi ${numero}`);

if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR`);
} else {
    console.log(`O número ${numero} é ÌMPAR`);
}


//switch -> testar uma variável
const numero2 = parseInt(Math.random() * 5);

switch (numero2) {
    case 0:
        console.log(`Número sorteado foi ${numero} (ZERO)`);;
        break;
    case 1:
        console.log(`Número sorteado foi ${numero} (UM)`);;
        break;
    case 2:
        console.log(`Número sorteado foi ${numero} (DOIS)`);;
        break;
}