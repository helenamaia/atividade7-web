const numero = prompt("Informe o numero de palavras");

const array=[]; 

for (let i = 0; i < numero; i++) {
    const palavra = prompt("Informe a palavra:");
    array[i]=palavra;
}


for (let i = numero-1; i != -1; i--) {
    const palavraa = array[i];
    console.log(`Palavra ${i=1}: ${palavraa}`);
    
}