function tecladoApertado(event) {
	if (event.keyCode == 13) {
		console.log('Voce apertou o ENTER');
	}else if (event.keyCode == 8) {
		console.log('Voce apagou o que escreveu com backspace');
	}else if (event.keyCode == 46) {
		console.log('apagou o que escreveu com del');
	}else if (event.shiftKey == true) {
		console.log('Voce apertou o shift');
	}else if (event.ctrlKey == true) {
		console.log('Voce apertou o ctrl');
	}else{
		console.log('teclado apertado '+event.keyCode);
	}
}