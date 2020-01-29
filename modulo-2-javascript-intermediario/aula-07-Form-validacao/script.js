function validar(){
	var valor = document.getElementById('numero').value;
	var texto = document.getElementById('name').value;

	if (valor.length > 2) {
		alert("Digite 2 numeros ou menos!");
		console.log("Digite 2 numeros ou menos!");
		document.formulario.numero.focus();
		return false
	}else if(texto.length < 3){
		alert("Digite nome maior!");
		console.log("Digite nome maior!");
		document.formulario.name.focus();
		return false
	}else{
		alert("Dados enviados com sucesso");
		console.log("Dados enviados com sucesso");
		return true
	}
	
}
