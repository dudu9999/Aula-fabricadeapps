/*
Abaixo de 17 Muito Abaixo do Peso
Entre 17 e 18.49 Abaixo do peso
Entre 18.5 e 24.99 Peso Normal
Entre 25 e 29.99 Acima do Peso
*/

// resultado = (peso / (altura * altura))

var peso;
var altura;
var imc;
var resultado;

function calcular(){

	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	
	imc = (peso / (altura * altura));
	
	if (imc < 17) {
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<h1><h1>Seu resultado foi: '+imc.toFixed(2)+'</h1><h1 style="color:#FF0000">Cuidado você está	muito abaixo do peso.</h1>';
		document.getElementById('peso').value = '';
		document.getElementById('altura').value = '';
		return false;
	}else if(imc > 17 && imc < 18.49){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<h1>Seu resultado foi: '+imc.toFixed(2)+'</h1><h1 style="color:#FF0000">Cuidado você está abaixo do peso.</h1>';
		document.getElementById('peso').value = '';
		document.getElementById('altura').value = '';
		return false;
	}else if(imc > 18.5 && imc < 24.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<h1>Seu resultado foi: '+imc.toFixed(2)+'</h1><h1 style="color:green">Ótimo você está no peso certo.</h1>';
		document.getElementById('peso').value = '';
		document.getElementById('altura').value = '';
		return false;
	}else if(imc > 25 && imc < 29.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<h1>Seu resultado foi: '+imc.toFixed(2)+'</h1><h1 style="color:orange">Atenção você está acima do peso.</h1>';
		document.getElementById('peso').value = '';
		document.getElementById('altura').value = '';
		return false;
	}else if(imc > 29.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<h1>Seu resultado foi: '+imc.toFixed(2)+'</h1><h1 style="color:#FF0000">Cuidado você está muito acima do peso.</h1>';
		document.getElementById('peso').value = '';
		document.getElementById('altura').value = '';
		return false;
	}else{
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<h1>Dados não informados ou errados!</h1>';
		return false;
	}
	
}
