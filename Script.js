
var img= [document.getElementById("base"), 
document.getElementById("poste"),
document.getElementById("palo-superior"),
document.getElementById("cuerda"),
document.getElementById("cabeza"),
document.getElementById("tronco"),
document.getElementById("brazo-izq"),
document.getElementById("brazo-derecho"),
document.getElementById("pierna-izq"),
document.getElementById("pierna-derecha")]

var b1= document.getElementById("b1");
var b2= document.getElementById("b2");
var b= document.getElementById("inicio");
var palabraOculta=["poder","logrado","alura","html","contactos"];
var escondida;


function palabraOculta(){
	
	var aleatoria= Math.floor((Math.random()*palabraOculta.length));

	escondida = palabraOculta[aleatoria];

}



function esconderBotonesInicio(){

	b1.style.visibility = "hidden"
	b2.style.visibility = "hidden"

	for(var i=0; i< img.length; i++){
  img[i].style.visibility = "visible"

}

	return

}



b1.onclick = console.log(escondida)
b2.onclick = palabraOculta