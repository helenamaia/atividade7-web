

const nome1 = prompt("Informe o nome da primeira pessoa:");
const peso1 = prompt("Informe o peso da primeira pessoa:");
const altura1 = prompt("Informe a altura da primeira pessoa:");


const nome2 = prompt("Informe o nome da segunda pessoa:");
const peso2 = prompt("Informe o peso da segunda pessoa");
const altura2 = prompt("Informe a altura da segunda pessoa");



const Imc1 = (peso1/(altura1*altura1));
const Imc2 = (peso2/(altura2*altura2));


if(Imc1>Imc2){
    console.log(`O IMC de ${nome1} (${Imc1}) é maior que o de ${nome2}
    (${Imc2})`);
} else if(Imc2>Imc1){
    console.log(`O IMC de ${nome2} (${Imc2}) é maior que o de ${nome1}
    (${Imc1})`);
}else{
    console.log('inválido');
}

