//selectores
let palabras = ["ALURA","ORACLE" ,"ONE","JAVASCRIPT","HTML"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let palabraNueva = "";
var ejecutar = false
const regexp = /^[A-Z]+$/i;
var c=0

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

function intentaDeNuevo(){
    alert("Error, intenta de nuevo");
    document.getElementById("ingresar").value = "";
    document.getElementById("ingresar").focus();
}

function validar(){
    if(!palabraNueva){
        ejecutar= false;
        }else{
            if(palabraNueva.length > 8){
            ejecutar = false; 
            }else{
                if(regexp.test(palabraNueva)){
                    ejecutar = true;
                }else ejecutar = false; 

            }
        }
        
}

//iniciar juego

function iniciarJuego(){
    document.getElementById("b1").style.display ="none" ;
    document.getElementById("b2").style.display ="none";
    document.getElementById("botonesFinales").style.display = "initial";
    escogerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()
    
}

function agregarText(){
    document.getElementById("b1").style.display ="none" ;
    document.getElementById("b2").style.display ="none";
    document.getElementById("agregar").style.display = "initial";
    document.getElementById("ingresar").focus() ;
}

function guardarEmpezar(){
    palabraNueva = document.getElementById("ingresar").value 

    validar()

    if(ejecutar){
        palabras.push(document.getElementById("ingresar").value.toUpperCase())
        document.getElementById("agregar").style.display = "none";
        iniciarJuego()
    }
    else intentaDeNuevo();
}

function volver(){
    document.getElementById("b1").style.display ="initial" ;
    document.getElementById("b2").style.display ="initial";
    document.getElementById("agregar").style.display = "none";
}

document.getElementById("b1").onclick = iniciarJuego ;
document.getElementById("b2").onclick = agregarText ;
document.getElementById("b3").onclick = guardarEmpezar;
document.getElementById("b4").onclick = volver ;
document.getElementById("b5").onclick = iniciarJuego ;
