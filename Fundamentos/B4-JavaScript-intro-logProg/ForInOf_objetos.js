// mostrar os numeros pares de 0 a 100 com for tradicional
for (index = 2; index <=100; index +=2){
    console.log (index)
}

// Decompor uma string  e gerar um array ocm suas palavras

let arquivoTexto = "Rodrigo Fabiana Arthur Joussemar Pétala"
let arrayNomes = arquivoTexto.split (" ")
console.log (arrayNomes)

// Pegar o maior numero de array de forma rapida (uma das soluçoes)

let numeros = [3, 7, 13, 9, 100, 45, 123, 3];
let maiorNumero = Math.max.apply(null, numeros)
console.log (maiorNumero)
// multiplicar os numeros do array por 3
for ( numero of numeros){
    console.log (numero * 3)
}

// pecorrer uma string com for of
let senha = 'robot@2123'

for (letra of senha){
    console.log (letra)
}

//caminha pelo array com for IN

for(let n in arrayNomes){
    console.log (arrayNomes[n])
}
// Declarando e Trabalhando Objetos
let pessoa = {
    nome: "Renan Campos",
    idade: 28,
    localNascimento: "Pernambuco",
    apelido: 'N4nan'
};

// For in pra caminha por todas as chaves e valores do ob
for (chave in pessoa){
    console.log (chave)
    console.log (pessoa[chave])
}

console.log (pessoa.apelido) // pegando só o apelido

// FOR OF nao funciona para caminhar na estrutua do obje
//for (chave of pessoa){
//    console.log (chave)
//}

// incluir mais uma propriedade ao objeto
pessoa.endereco = {
    logadouro: 'ipanema',
    numero: '138'
}
console.log (pessoa)

//