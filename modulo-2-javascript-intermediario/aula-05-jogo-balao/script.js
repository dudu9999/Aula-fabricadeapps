
var total = 0;
function criaBalao() {
	var balao = document.createElement("div");
	balao.setAttribute("class", "balao");

	var x = Math.floor(Math.random() * 1250);
	var y = Math.floor(Math.random() * 550);
	var cor = Math.floor(Math.random() * 999999);

	balao.setAttribute("style", "left:"+x+"px;top:"+y+"px; background-color: #"+cor+";");
	balao.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(balao);
}


function estourar(balao) {
	var audio = document.querySelector('audio');	
	audio.play()
	document.body.removeChild(balao);
	total++;
	var score = document.getElementById('total');
	score.innerHTML = "Baloes estourados: "+total; 

}
// ------------------------------------------------------------
var valorVelocidade = 1000;

function vel(event) {
	var slider = document.getElementById("myRange");

	// valorVelocidade = event.value;
	console.log(slider.value);
	valorVelocidade = slider.value;
}

// -------------------------------------------------------------
function carregarJogo(balao) {
	var slider = document.getElementById("myRange");
	setInterval(criaBalao, 1000);
	// setInterval(criaBalao, valorVelocidade);
}
