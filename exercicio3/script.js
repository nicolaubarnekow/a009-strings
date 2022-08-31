const frase = " Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair ";
console.log(frase)
const novaFrase = frase.replace("verde", "rosa")
console.log(novaFrase);
const novaFrase1 = novaFrase.replace("azul", "laranja" );
console.log(novaFrase1);
const fraseNova = "\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(`Jorge tem uma casa verde e com portão azul, com os dizeres: ${fraseNova.toUpperCase()}`)

