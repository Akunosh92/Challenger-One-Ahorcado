function dibujarCanvas(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.fillRect(0,0,1200,860);
  
}

function dibujarBase(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarposte(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(750,500);
    tablero.lineTo(750,140);
    tablero.stroke();
    tablero.closePath();
}
function dibujarCuerda1(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(750,140);
    tablero.lineTo(928,140);
    tablero.stroke();
    tablero.closePath();
}
function dibujarCuerda2(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(928,140);
    tablero.lineTo(928,190);
    tablero.stroke();
    tablero.closePath();
}
function dibujarCabeza(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(928,190);
    tablero.arc(928,222,32,0,2*Math.PI,false);
    tablero.stroke();
    tablero.fill();
    tablero.closePath();
}
function dibujarTronco(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(928,254);
    tablero.lineTo(928,400);
    tablero.stroke();
    tablero.closePath();
}
function dibujarBrazoIqz(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(928,264);
    tablero.lineTo(886,322);
    tablero.stroke();
    tablero.closePath();
}
function dibujarBrazoDer(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(928,264);
    tablero.lineTo(970,322);
    tablero.stroke();
    tablero.closePath();
}
function dibujarPieIqz(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(928,400);
    tablero.lineTo(886,458);
    tablero.stroke();
    tablero.closePath();
}
function dibujarPieDer(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#0A3871";

    tablero.beginPath();
    tablero.moveTo(928,400);
    tablero.lineTo(970,458);
    tablero.stroke();
    tablero.closePath();
}
function dibujarmono(){
    if(malas==1)dibujarBase();
    if(malas==2)dibujarposte();
    if(malas==3)dibujarCuerda1();
    if(malas==4)dibujarCuerda2();
    if(malas==5)dibujarCabeza();
    if(malas==6)dibujarTronco();
    if(malas==7)dibujarBrazoDer();
    if(malas==8)dibujarBrazoIqz();
    if(malas==9)dibujarPieDer();
    if(malas==10){dibujarPieIqz(); dibujarTexto()}
}
function dibujarLinea(){
    tablero.linewidth = 6;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5" ;
    tablero.strokeStyle = "#8A3871" ;
    tablero.beginPath();

    let anchura = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (anchura*i), 640);
        tablero.lineTo(550 + (anchura*i), 640);
    }
    tablero.stroke();
    tablero.closePath();

}
function dibujarLetraCorrecta(){
    tablero.linewidth = 6;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.strokeStyle ="#0A3871";
    tablero.font="bold 50px arial"
    tablero.beginPath();
    let anchura = 600/palabraSecreta.length;
    tablero.strokeText(letra,500 + (anchura*posicion), 630);
    tablero.fillText(letra,500 + (anchura*posicion), 630);
    tablero.stroke();
    tablero.closePath();

}
function dibujarLetraIncorrecta(){
    tablero.linewidth = 6;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "red";
    tablero.strokeStyle ="#0A3871";
    tablero.font="bold 50px arial"
    tablero.beginPath();

    let anchura = 600/5;
    if(malas<=5){
    tablero.strokeText(letra,440 + (anchura*malas), 720);
    tablero.fillText(letra,440 + (anchura*malas), 720);
    }
    else{tablero.strokeText(letra,440 + (anchura*(malas-5)), 775);
        tablero.fillText(letra,440 + (anchura*(malas-5)), 775);
        }
    tablero.stroke();
    tablero.closePath();    
}
function dibujarTexto(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "red";
    tablero.strokeStyle ="#0A3871";
    var texto = "Fin del Juego"
    tablero.font="bold 50px arial"
    tablero.strokeText(texto,650,450)
    tablero.fillText(texto,650,450)
    tablero.beginPath();
}
function dibujarGanaste(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "green";
    tablero.strokeStyle ="#0A3871";
    var texto = "Felicidades Ganaste"
    tablero.font="bold 50px arial"
    tablero.strokeText(texto,500,450)
    tablero.fillText(texto,500,450)
    tablero.beginPath();
}