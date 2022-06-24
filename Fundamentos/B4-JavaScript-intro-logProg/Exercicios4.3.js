//1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
//A soma de 35 a 105 é: X.
let soma = 0
for (index = 35; index <= 105; index += 1){
    soma = soma + index;
}
console. log( "a soma de 35 a 105 é:", soma)



//2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por
//Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.
let contador = 0

for (index = 15; index <=155; index +=1){
    if(index % 3 === 0){
        contador ++
    }
}
console.log (contador)




//3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
//“Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
function pedra (jogador1,jogador2) {
    if (jogador1 === jogador2) {
        return ("Empate")
    } else if (jogador1 === "Pedra" && jogador2 === "Tesoura"|| jogador1 === "Papel" && jogador2 === "Pedra" || jogador1 === "Tesoura" && jogador2 === "Papel") {
        return ("Jogador 1 Vence")
    }else{
        return ("Jogador 2 Vence")
    }
}
console.log (pedra("Pedra","Pedra"));



//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
//Bônus: Crie a condição utilizando operador ternário.





//5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
//“Pessoa” é a mais nova.