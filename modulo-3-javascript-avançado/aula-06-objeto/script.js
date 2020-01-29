
class Pessoa{
	construtor(){
		this.nome = '',
		this.sobrenome = ''
	}

	nomePessoa(primeiroNome){
		this.nome = primeiroNome;
		console.log('Meu nome é: '+this.nome);
	}

	segundoNome(segundonome){
		this.sobreNome = segundonome;
		console.log('Meu sobrenome é: '+this.sobreNome);	
	}

	nomeCompleto(){
		let nomecompleto = this.nome + ' ' + this.sobreNome;
		console.log('Meu nome completo é: '+nomecompleto);	

	}
};

let pessoa1 = new Pessoa();

pessoa1.nomePessoa('Eduardo');
pessoa1.segundoNome('Caetano');
pessoa1.nomeCompleto();










