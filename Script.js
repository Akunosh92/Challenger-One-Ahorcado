
let palabras = ["ALURA","ORACLE" ,"ONE","JAVASCRIPT","HTML"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let palabraNueva = "";
var ejecutar = false
var ejecutar2 = false
const regexp = /^[A-Z]+$/i;
var c=0
var letra ="";
var posicion =0;
var letras=[""];
var malas=0;
var buenas=0;

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
function validar2(){
    if(!letra){
        ejecutar2= false;
        
        }else{
            if(letra.length > 1){
            ejecutar2 = false; 
            
            }else{
                if(regexp.test(letra)){
                    ejecutar2= true;c=3
                }else ejecutar2= false; 

            }
        }
        
}
//iniciar juego

function iniciarJuego(){
    document.getElementById("b1").style.display ="none" ;
    document.getElementById("b2").style.display ="none";
    document.getElementById("botonesFinales").style.display = "initial";
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    juego();
    
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
function nuevoJuego(){
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    juego();
    
}
function desistir(){
    dibujarTexto();
    document.getElementById("botonesFinales").style.display = "none";

}
function juego(){

    window.addEventListener("keyup",(event)=>{ letra = event.key.toLocaleUpperCase();juego2()})
}

function juego2(){
    validar2();
    if(letras.includes(letra));
    else{
        if(malas==10||buenas==palabraSecreta.length);
            else{
                letras.push(letra);
                if(ejecutar2){
                    if(palabraSecreta.includes(letra)){
                        posicion = palabraSecreta.indexOf(letra);
                        while(posicion !=-1){
                            dibujarLetraCorrecta();
                            buenas++;
                            console.log(posicion);
                            posicion++;
                            posicion = palabraSecreta.indexOf(letra,posicion);
                        }
                        if(buenas==palabraSecreta.length){
                            dibujarGanaste();
                        }
                    }else{
                        malas = malas+1;
                        dibujarLetraIncorrecta();
                        dibujarmono();
                    }
                } 
            }
    }
}

document.getElementById("b1").onclick = iniciarJuego ;
document.getElementById("b2").onclick = agregarText ;
document.getElementById("b3").onclick = guardarEmpezar;
document.getElementById("b4").onclick = volver ;
document.getElementById("b5").onclick = nuevoJuego ;
document.getElementById("b6").onclick = desistir ;