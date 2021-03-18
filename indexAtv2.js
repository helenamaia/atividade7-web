const nome = prompt("Informe o seu nome:");
const peso = prompt("Informe o seu peso:");
const altura = prompt("Informe a sua altura:");

const imc = peso/(altura*altura);

if(imc<17){
    console.log(`${nome}! Você está muito abaixo do peso`);
    console.log("Coma bastante!");
}else if(imc>=17 && imc<+18.49){
    console.log(`${nome}! Você está Abaixo do peso`);
    console.log("Coma um pouquinho mais!");
}else if(imc>=18.5 && imc<=24.99){
    console.log(`${nome}! Você está no Peso normal`);
    console.log("Você está ótimo!");
}else if(imc>= 25 && imc<=29.99){
    console.log(`${nome}! Você está Acima do peso`);
    console.log("Vamos maneirar um pouquinho!");
}else if(imc>=30 && imc<=34.99){
    console.log(`${nome}! Você está na Obesidade I`);
    console.log("Que tal uma dieta?");
}else if(imc>=35 && imc <=39.99){
    console.log(`${nome}! Você está na Obesidade II(severa)`);
    console.log("Comer bem menos viu");
}else if(imc>40){
    console.log(`${nome}! Você está na Obesidade III(mórbida)`);
    console.log("Recomendável procurar um médico");
}

