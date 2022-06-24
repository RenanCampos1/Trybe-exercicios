// Declarar uma funçao
function imprimeMensagemBoasVindas(){
    console.log ("seja muito bem vindo")
}
imprimeMensagemBoasVindas();

function imprimeMensagemBoasVindas (nome){
    console.log ('seja muito bem vindo', nome)
}
imprimeMensagemBoasVindas ('Renan')

// chamando uma funçao

function soma (n1, n2){
    return n1 + n2
}
console.log (soma (12, 8))

// criar um array de objetos com base no arrays nomes e idade
let nomes = ['marcos', 'dirles', 'joseli', 'leticia']
let idades = [21, 51, 34, 12,]
function nomesIdade (arraynomes, arrayidades){
    let arrayNomesEIdades = [];
    for (let index = 0; index < arraynomes.length; index +=1){
        arrayNomesEIdades.push({nome: arraynomes[index], idade: arrayidades [index]})
    }
    return arrayNomesEIdades;
}
console.log (nomesIdade(nomes, idades))