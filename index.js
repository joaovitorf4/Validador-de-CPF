//Validador CPF

let cpf = '705.484.450-52';

let cpfLimpo = cpf.replace(/\D+/g, '').slice(0, -2);
cpfArray = Array.from(cpfLimpo).map(Number);

let acumulador = 0;
let valorUni;
let j = 10;
let conta1;

function contaCPF(j){
    for (let i = 0; i < cpfArray.length; i++) {
        valorUni = cpfArray[i] * j;
        acumulador += valorUni;
        j--;
    
    }
    
    conta1 = 11 - (acumulador % 11)
    
    if ( conta1 > 9 ) {
        conta1 = 0
    }
    
    cpfArray.push(conta1);

    acumulador = 0;
    valorUni = 0;
    conta1 = 0;
}

contaCPF(10);
contaCPF(11);

let cpfNovo = cpfArray.join('');
cpfNovo = cpfNovo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

if ( cpfNovo === cpf ){
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
