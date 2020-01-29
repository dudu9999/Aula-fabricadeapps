// forma completa 
/*
function soma (total, proximo) {
 		return total + proximo;
}

function adicionar(...numeros) {
	let total = numeros.reduce(soma(total, proximo));
	console.log(total);
}
*/
///////////////////////////////////////////////////////
/*
// forma reduzida
function adicionar(...numeros) {
	let total = numeros.reduce(function(total, proximo) {
		return total + proximo;
	});
	console.log(total);
}
*/
///////////////////////////////////////////////////////
// mais reduzida ainda
/*
function adicionar(...numeros) {
	let total = numeros.reduce((total, proximo) => {
		return total + proximo;
	});
	console.log(total);
}
*/

///////////////////////////////////////////////////////
// ainda mais reduzida ainda

function adicionar(...numeros) {
let total = numeros.reduce((total, proximo) => total + proximo);
console.log(total);
}


adicionar(1,2,3,4,5);