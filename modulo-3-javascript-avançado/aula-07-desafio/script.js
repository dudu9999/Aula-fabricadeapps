/*
Desafios JavaScript

- Crie uma lista de produtos

 1 - A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
 2 - Mostre no console quantos produtos tem nessa lista.
 3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
 4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
 5 - Remova o segundo item da sua lista.

----------------------------------------------------------------------------------------------------------------------------------
- Crie uma lista de apenas numeros 1,3,5,7,0,9​

 1 - Ordene essa lista do menor para o maior.
 2 - Retire o primeiro numero desta lista.
 3 - Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

----------------------------------------------------------------------------------------------------------------------------------
- Crie uma string que contenha o dia de hoje, exemplo: 

let hoje = '20/07/2019';

 Separe essa data em variaveis dia onde contenha apenas o dia, 
 mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

Obs: Esse desafio não precisa ser entregue, mas tente fazer sem olhar no resuldo :)

*/
/*
// desafio 1 //////////////////////////////////////////////////////////
listaProdutos = ["Computador", "Telefone", "Mouse", "Teclado"];

//1
console.log('------------');
console.log(listaProdutos);
console.log('------------');

//2
console.log('A lista tem '+listaProdutos.length+' Produtos');
console.log('------------');

//3
listaProdutos.splice(listaProdutos.indexOf('Mouse'), 1);

console.log(listaProdutos);
console.log('------------');

//4
if(listaProdutos.indexOf("Teclado") > -1){
	console.log(listaProdutos[listaProdutos.indexOf("Teclado")]+' esta na lista!');
}else{
	console.log('Teclado não esta na lista!');
}
console.log('------------');

//5
listaProdutos.splice(listaProdutos.indexOf('Telefone'), 1);
console.log(listaProdutos);

// desafio 2 //////////////////////////////////////////////////////////
console.log('----------------------------------------------------------');
*/
/*
listaNumeros = [1,3,5,7,0,9];
novaLista = []
terceiraLista = []
temp = 0
//1
//listaNumeros = [0,1,3,5,7,9​];
var x = 0
for(x = 0;listaNumeros.length > x; x++ ){
	if(listaNumeros[x]>temp){
			novaLista.push(listaNumeros[x]);
	}else{
			novaLista.unshift(listaNumeros[x]);
	}
	temp = listaNumeros[x]
}
console.log(novaLista);
console.log('-------------------------');
console.log(' ');

//2
novaLista.shift();
console.log(novaLista);
console.log('-------------------------');
console.log(' ');

//3 
temp = 0
for(x = 0;novaLista.length > x; x++ ){
	if(novaLista[x]<temp){
			terceiraLista.push(novaLista[x]);
	}else{
			terceiraLista.unshift(novaLista[x]);
	}
	temp = novaLista[x]
}
console.log(terceiraLista);
*/

// desafio 3 //////////////////////////////////////////////////////////
let hoje = '25/01/2020';
listaHoje = hoje.split('/');
dia = listaHoje[0];
mes = listaHoje[1];
ano = listaHoje[2];
console.log(`${dia}/${mes}/${ano}`);
