function teste() {
	var pecas = document.getElementById("numero").value;
	var tempo = document.getElementById("tempo").value;
	var pecaProduzida = document.getElementById("produzido").value;
	var totalRefugo = document.getElementById("refugo").value;
	var totalRetrabalho = document.getElementById("retrabalho").value;
	var ano = document.getElementById("anomaliat2").value;
	var ava = document.getElementById("avariat2").value;
	var setup = document.getElementById("setupt2").value;
	const t = 499;
	var x = 0;


	/*Ponto de partida*/
	if (tempo >= 1) {
		document.getElementById("feito").innerHTML = 0;
		x = pecaProduzida / tempo;
		document.getElementById("feito1").innerHTML = parseInt(x);
	}
	/*Ponto de partida1*/
	if (tempo == 2 || tempo >= 3) {
		document.getElementById("feito2").innerHTML = (pecaProduzida / tempo).toFixed(0);
		document.getElementById("feito3").innerHTML = parseInt((pecaProduzida / tempo * 2));
	} else {
		document.getElementById("feito2").innerHTML = 0;
		document.getElementById("feito3").innerHTML = 0;
	}
	/*Ponto de partida2*/
	if (tempo == 3 || tempo >= 4) {
		document.getElementById("feito4").innerHTML = (pecaProduzida / tempo).toFixed(0);
		document.getElementById("feito5").innerHTML = parseInt((pecaProduzida / tempo * 3));
	} else {
		document.getElementById("feito4").innerHTML = 0;
		document.getElementById("feito5").innerHTML = 0;
	}
	/*Ponto de partida3*/
	if (tempo == 4 || tempo >= 5) {
		document.getElementById("feito6").innerHTML = (pecaProduzida / tempo).toFixed(0);
		document.getElementById("feito7").innerHTML = parseInt(((pecaProduzida / tempo) * 4));
	} else {
		document.getElementById("feito6").innerHTML = 0;
		document.getElementById("feito7").innerHTML = 0;
	}
	/*Ponto de partida4*/
	if (tempo == 5 || tempo >= 6) {
		document.getElementById("feito8").innerHTML = (pecaProduzida / tempo).toFixed(0);
		document.getElementById("feito9").innerHTML = parseInt((pecaProduzida / tempo * 5));
	} else {
		document.getElementById("feito8").innerHTML = 0;
		document.getElementById("feito9").innerHTML = 0;
	}
	/*Ponto de partida5*/
	if (tempo == 6 || tempo >= 7) {
		document.getElementById("feito10").innerHTML = (pecaProduzida / tempo).toFixed(0);
		document.getElementById("feito11").innerHTML = parseInt((pecaProduzida / tempo * 6));
	} else {
		document.getElementById("feito10").innerHTML = 0;
		document.getElementById("feito11").innerHTML = 0;
	}
	/*Ponto de partida6*/
	if (tempo == 7) {
		document.getElementById("feito12").innerHTML = (pecaProduzida / tempo).toFixed(0);
		document.getElementById("feito13").innerHTML = parseInt((pecaProduzida / tempo * 7));
	} else {
		document.getElementById("feito12").innerHTML = 0;
		document.getElementById("feito13").innerHTML = 0;
	}

	/*Número informado*/
	document.getElementById("tabela").innerHTML = 0;
	document.getElementById("repeticao").innerHTML = pecas;

	/*Número informado com a primeira soma*/
	document.getElementById("repeticao1").innerHTML = pecas;
	document.getElementById("soma1").innerHTML = pecas * 2;

	/*Número informado com a segunda soma*/
	document.getElementById("repeticao2").innerHTML = pecas;
	document.getElementById("soma2").innerHTML = pecas * 3;

	/*Número informado com a terceira soma*/
	document.getElementById("repeticao3").innerHTML = pecas;
	document.getElementById("soma3").innerHTML = pecas * 4;

	/*Número informado com a quarta soma*/
	document.getElementById("repeticao4").innerHTML = pecas;
	document.getElementById("soma4").innerHTML = pecas * 5;

	/*Número informado com a quinta soma*/
	document.getElementById("repeticao5").innerHTML = pecas;
	document.getElementById("soma5").innerHTML = pecas * 6;

	/*Número informado com a sexta soma*/
	document.getElementById("repeticao6").innerHTML = pecas;
	document.getElementById("soma6").innerHTML = pecas * 7;

	/*Número informado com a sétima soma*/
	document.getElementById("repeticao7").innerHTML = pecas;
	document.getElementById("soma7").innerHTML = pecas * 8;

	/*Cálculando Performace*/
	document.getElementById("performace").innerHTML = "Performace (a) = " + (pecaProduzida / (pecas * 8) * 100).toFixed(2) + "%";

	/*Cálculo Refugo*/
	if (totalRefugo > 0) {
		document.getElementById("pecaRefugo").innerHTML = "Refugo(b) = " + (totalRefugo / pecaProduzida * 100).toFixed(2) + "%";
	}

	/*Cálculo Retrabalho*/
	if (totalRetrabalho > 0) {
		document.getElementById("pecaRetrabalho").innerHTML = "Retrabalho(c) =" + (totalRetrabalho / pecaProduzida * 100).toFixed(2) + "%";
	}

	/*Parada programada*/
	document.getElementById("t2").innerHTML = "Parada Programada(t2) = " + ((60 / t) * 100).toFixed(1) + "%";

	/*Tempo de produção*/
	document.getElementById("tProducao").innerHTML = "Produção(t2) = " + (x = t - 60 - ano - ava - setup) + "/" + (((x = t - 60 - ano - ava - setup) / t) * 100).toFixed(1) + "%";


	/*Parada por anomalia, avaria ou setup*/
	if (ano > 0) {
		document.getElementById("anomalia").innerHTML = "Parada por anomalia (t2)= " + ((ano / t) * 100).toFixed(1) + "%";
	}
	if (ava > 0) {
		document.getElementById("avaria").innerHTML = "Parada por avaria(t2) = " + ((ava / t) * 100).toFixed(1) + "%";
	}
	if (setup > 0) {
		document.getElementById("setup").innerHTML = "parada por setup(t2) = " + ((setup / t) * 100).toFixed(1) + "%";
	}


}