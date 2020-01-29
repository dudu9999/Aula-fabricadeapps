/*
class ListaTarefas{
	constructor(){
		this.tarefas = [];
	}

	addTarefas(){
		this.tarefas.push("Nova Tarefa");
		console.log(this.tarefas);
	}

};

const minhaTarefa = new ListaTarefas();
document.getElementById('novo').onClick = function() {
	minhaTarefa.addTarefas();
}
*/
////////////////////////////////////////////////////////////////////////////////////////
/*
class List{
	constructor(){
		this.data =  [];
	}

	add(data){
		this.data.push(data);
		console.log(this.data);
	}
};

class ListaTarefas extends List{};

const minhaTarefa = new ListaTarefas();
document.getElementById('novo').onClick = function() {
	minhaTarefa.add("Minha Tarefa Nova");
}*/
////////////////////////////////////////////////////////////////////////////////////////
class List{
	constructor(){
		this.data =  [];
	}

	add(data){
		this.data.push(data);
		console.log(this.data);
	}
};

class ListaTarefas extends List{
	constructor(){
		super();
		this.nome = "Matheus";
	}

	mostrarNome(){
		console.log(this.nome);
	}
};

const minhaTarefas = new ListaTarefas();

document.getElementById('novo').onclick = function() {
	minhaTarefas.add("Minha Tarefa Nova");
}

minhaTarefas.mostrarNome();

