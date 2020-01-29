var x = 2;
function acao(argument) {
	document.write(x+" - Executando...<br>");
	x++
}

function pararAcao(argument) {
	clearInterval(timer); //Cancela um ação de uma variavel
}

//setInterval(acao, 1000); // executa função de tempo em tempo
//---------------------------------

//setTimeout(acao, 1000); // executa função depois de um estimado tempo
//---------------------------------

setTimeout(pararAcao, 6000);
var timer = setInterval(acao, 1000);
//---------------------------------
