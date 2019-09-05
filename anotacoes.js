/* Exemplo de CSS
body{ /* Comentário em CSS é só com  "/*" Estamos fazendo um design para o body
        font: normal 20pt Arial;
    }
h1{ /* Comentário em CSS é só com  "/*" Estamos fazendo um design para o h1
        font: bold 25pt Arial;
        color: blue;
    }
*/


/* Exemplo de como colocar no HTML o que foi feito no JS
var nome = window.prompt('Digite seu nome: ');
document.write(`Seu nome é ${nome}! <br> ${nome} possui ${nome.length} letras`);
document.write(`<br>Seu nome em maiusculo é <strong>${nome.toUpperCase()}</strong>`);
document.write(`<br>Seu nome em minusculo é <strong>${nome.toLowerCase()}</strong>`);
let item = document.createElement('option') // criando elemento html option para colocar dentro do select
item.text = `${numero} x ${c} = ${numero*c}` // colocando o resultado dentro do campo texto do option criado previamente
item.value = `tab${c}` // Isso é bom para PHP
selectTabuada.appendChild(item) // colocando o option dentro do select
*/


// Anotações JS
n1 = 123.456; //numero real
n2 = n1.toFixed(2); //Numero com duas casas depois da virgula

palavra = 'colegio';
tamanho_palavra = palavra.length;

numero_string = '789' // string de um numero
numero = Number(numero_string) // transformando para o formato de numero automaticamente
numero2 = parseFloat(numero_string) // transformando o string para float
numero3 = parseInt(numero_string) // transformando o string para int

frase = 'Meu nome é'
nome = 'andré'
frase_nome = frase + nome // + está concatenando
frase_nome2 = 'Meu nome é ' + nome
frase_nome3 = `Meu nome é ${nome}` // Aqui é usado crase
frase

numero = n2 // o n2 lá de cima
numero = numero.replace('.',',') // substituindo ponto por virgula
moeda = n1.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
moeda = n1.toLocaleString('pt-BR',{style: 'currency',currency: 'EUR'})


// Operações aritméticas
    soma = 1+5
    subtracao = 6-2
    multiplicacao = 2*2
    divisao = 10/5
    resto = 4%3
    potencia = 2**2
    // Precedencia é aquela classica (), *,/,** de sempre
    soma += 5
    subtracao -= 6
    multiplicacao *= 0
    divisao /= 2
    resto %= 2
    potencia **= 3
    // Incremento
    x = 10
    x ++
    y = x--

// Operações relacionais
    5 > 2
    7 < 4
    8 <= 8
    5 == 5
    0 != 0
    a = 8
    b = 10
    a < b
    a <= b - 2
    curso = 'JS'
    curso == 'HTML'

// Identidade. É identico? Mesmo valor e tipo?
    5 == '5' // 5 numero e 5 string (aqui só comparar valor)
    5 === '5' // São do mesmo tipo e possuem mesmo valor?
    5 === 5 // São identicos?
    4 !== '5'
    4 !== '4'

// Operadores lógicos
    true
    false
    x1 = true
    x2 = true
    x3 = false
    y = false
    !x1
    !y
    x1 || x2
    x1 || x3
    x1 && x2
    x1 && x3
    z1 && !x3

// Misturando tudo
    a = 5
    b = 10
    c = true
    d = false
    a + 2 < b && b + 1 == 0
    a < b == d || !(b-a) == 0

// Ordem de precedencia com todos
    // - Operadores aritméticos
    // - Operadores relacionais 
    // - NÃO, E e OU

// Ternário
    media = 5
    média >= 7 ? 'Aprovado':'Reprovado'

// Array
let num = [5,8,4] // criando array
console.log(num) // exibindo no console log
num[3] = 6 // colocando um elemento na posição 3, para isso esta foi criada automaticamente
num.push(7) // colocando um valor na última posição do array
tamanho = num.length // tamanho do array
ordem = num.sort() // ordenando os valores do array

//// for para array
var valores = [2,5,4,1,3,5,5,5]
for(var pos in valores){
    console.log(valores[pos])
}

//// Procurando valores no vetor
console.log('-----------------')
pos = valores.lastIndexOf(4) // se o 
console.log(`O número ${4} está na posição ${pos} \n`)