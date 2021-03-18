const nome = prompt('Informe seu nome:');
const idade = prompt('Informe sua idade');

function calcularIdade(idade, nome){
    const conta = 65-parseInt(idade);
    if(conta<0){
        console.log(`${nome} você já está aposentado!`);
    }
    else{
        console.log(`${nome} faltam ${conta} para você se aposentar`);
    }
}

console.log(calcularIdade(idade, nome));
