var nome = 'matheus';

var lista = ['Matheus', 'Lucas','Henrique', 'Joao',15]
console.log(lista);
console.log(' ');

console.log('lista.length');
console.log(lista.length);
console.log(' ');

console.log('lista[1]');
console.log(lista[1]);
console.log(' ');

console.log('lista[4]');
console.log(lista[4]);
console.log(' ');

console.log('lista.indexOf("Lucas")');
console.log(lista.indexOf("Lucas"));
console.log(' ');

console.log('lista.indexOf("Lucasssss")');
console.log(lista.indexOf("Lucasssss"));
console.log(' ');

console.log('lista.join(" , ")');
console.log(lista.join(" , "));
console.log(' ');

console.log('lista.join(" - ")');
console.log(lista.join(" - "));
console.log(' ');

console.log('lista.join(" / ")');
console.log(lista.join(" / "));
console.log(' ');

console.log(lista);
console.log('lista.pop()'); // Remove o ultimo
console.log(lista.pop());
console.log(lista);
console.log(' ');

console.log(lista);
console.log('lista.shift()');
console.log(lista.shift()); // Remove o primeiro
console.log(lista);
console.log(' ');

lista[0] = "Eduardo";
console.log(lista);
console.log('lista');
console.log(lista);
console.log(' ');

console.log(lista);
console.log('lista.push("Andre")');
console.log(lista.push("Andre")); // Insere no fim
console.log(lista);
console.log(' ');

console.log(lista);
console.log('lista.unshift("Thiago")');
console.log(lista.unshift("Thiago")); // Insere no inicio
console.log(lista);
console.log(' ');

if(lista.indexOf("Eduardo") > -1){
	console.log('Eduardo esta na lista!');
}else{
	console.log('Eduardo não esta na lista!');
}
