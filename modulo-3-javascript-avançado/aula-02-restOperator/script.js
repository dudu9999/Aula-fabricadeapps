//function minhaLista(nomes) {
	// console.log(nomes); // assim retorna só matheus
//}
/*
function minhaLista(...nomes) {
	console.log(nomes); 
}
minhaLista('Matheus', 'Lucas', 'Joao');

// ou com numeros tambem funciona 

function minhaLista(...numeros) {
	console.log(nonumerosmes); 
}
minhaLista(1,2,3,4,5);
*/

function cadastrar(usuarios, ...novosUsusarios) {
	let todosUsuarios = [...novosUsusarios, ...usuarios ]
	return todosUsuarios;
}

let usuarios = ["Matheus", "Joao"];
let novosUsusarios = cadastrar(usuarios, "henrique", "Lucas");
console.log(novosUsusarios); 