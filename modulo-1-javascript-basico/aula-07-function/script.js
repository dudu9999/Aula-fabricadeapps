function entrar(){
	var area = document.getElementById('area');
	var texto = prompt('Digite seu nome: ');

	if (texto == '' || texto == null) {
		alert('Digite seu nome novamente!');
		area.innerHTML = 'Bem vindo...';
	}else{
		area.innerHTML = 'Bem vindo '+texto;
	}
}

function entrar2(nome){
	var area2 = document.getElementById('area2');
	var texto2 = prompt('Digite seu sobrenome: ');

	if (texto2 == '' || texto2 == null) {
		alert('Digite seu sobrenome novamente!');
		area2.innerHTML = 'Bem vindo...';
	}else{
		area2.innerHTML = 'Bem vindo '+nome+' '+texto2;
	}
}