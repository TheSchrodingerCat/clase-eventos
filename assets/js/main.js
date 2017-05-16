var cambiaTexto = function(){
	var a = document.getElementById("menu-principal");
	this.childNodes[1].childNodes[1].innerHTML = "Hola mundo";
	this.innerHTML = "hello world";
}

function principal(){
	var ultimo = document.querySelector("#menu-principal ul li:last-child"); //funciona también con getElementsByTagName("li")[3]
	ultimo.addEventListener("mouseover",function(){
		alert("hola, estoy sobre About");
	})

	var menu = document.getElementById("menu-principal");
	menu.addEventListener("click", cambiaTexto);

	var div1 = document.getElementsByTagName("div")[0]; //para el parrafo
	div1.addEventListener("click",cambiaTexto);


	var miInput = document.getElementById("mi-input");
	miInput.addEventListener("focus",function(){ //cuando situo el cursor en el input 
		console.log("entro a mi input");
	});

	miInput.addEventListener("blur",function(){ //cuando salgo del area de input
		console.log("salgo del input");
	});

	miInput.addEventListener("change",function(){ //cuando apreto enter
		console.log("cambiando");
	});
}
principal();