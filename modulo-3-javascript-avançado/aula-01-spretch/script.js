function cadastroPessoa(info) {
	let novosDados = {
		...info,
		cargo: 'Desenvolvedor',
		status:1,
		codigo:'452657654352'
	};
	return novosDados;
}

console.log(cadastroPessoa({nome: 'Matheus', sobrenome: 'Fraga', anoInicio:2045}));