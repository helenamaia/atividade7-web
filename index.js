const nome = 'Helena';

console.log(nome);



let idade; 

idade = 22;

console.log(idade);

idade = idade + 15; 

console.log(idade);

//const peso = prompt('informe o peso:')
//console.log('peso do usuario: '+peso);

//const apagar = confirm('Voce de deseja apagar?');
//console.log(apagar);

// typeof

const pi = 3.14;
const calculo = (2/2)+3;

console.log(pi);
console.log(typeof pi);

console.log(calculo);
console.log(typeof pi);

let endereco = "rua Xyz,  ";
endereco = endereco +987;

console.log(endereco);

const sobrenome = 'maia';

const nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

const identificado = true;

console.log(typeof identificado);

const rodando = true;
const parado = !rodando;

console.log(`Aplicação rodando? ${rodando}`);
console.log(`Aplicação parada? ${parado}`);

if(rodando){
    console.log("iniciando menus...");
} else {
    console.log("Desligando sistema...");
}

const status = rodando ? 'executando' : 'parada';
console.log(`status do app: ${status}`);

let altura;
console.log(altura);
console.log(typeof altura);
altura = 10;
console.log(altura);
console.log(typeof altura);

const valor = prompt('Informe um valor');
console.log(typeof valor);
console.log(valor);
//const novoValor = valor + 5;
const novoValor = parseInt(valor) + 5;

console.log(novoValor);
