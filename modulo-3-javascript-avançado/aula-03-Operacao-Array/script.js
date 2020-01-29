console.log('lista')
const lista = [1,2,3,4,5,6];

const novaLista = lista.map(function(item, index) {
	console.log(index+1 +' - '+item * 5);
	return item * 5;
})

console.log(novaLista);

const soma = lista.reduce(function(total, proximoItem) {
	return total + proximoItem;
})
console.log(soma);

const find = lista.find(function(item) {
	return item === 6;
})

console.log(find);


const find2 = lista.find(function(item) {
	return item === 7;
})

console.log(find2);
