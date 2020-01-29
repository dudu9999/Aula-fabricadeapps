document.write("<h1>1 - Hamburguer</h1>");
document.write("<h1>2 - Cachorro Quente</h1>");
document.write("<h1>3 - Prensado</h1>");
document.write("<h1>4 - Farropilha</h1>");

function pedir(){
	var x = prompt('Digite o numero do pedido: ');
	
	switch(x){
		case '1':
			alert("Voce pediu um Hamburguer!");
			break;
		case '2':
			alert("Voce pediu um Cachorro Quente!");
			break;
		case '3':
			alert("Voce pediu um Prensado!");
			break;
		case '4':
			alert("Voce pediu um Farropilha!");
			break;
		default:
			alert("O pedido não existe!");
		}
}