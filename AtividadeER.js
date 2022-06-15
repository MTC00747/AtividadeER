let peso = 100;
let listaPecas = 7;
let nomeDaPecas = "Motor de partida";

if(peso >= 100) {
    console.log("Peso da peça superior a 100g!");
} else{
    console.log("Não tem capacidade para ser instalado!");
}

if (listaPecas >= 10){
    console.log("Não temos espaço para cadatros de novas peças, CAIXA LOTADA!")
} else {
    console.log("Peça cadastrada na CaIXA Com sucesso!")
}
if(nomeDaPecas.length < 3 ) {
    console.log ("Erro no cadasto!");
} else {
    console.log("cadastro finalizado!")
}