function dibujarCanvas(){
    tablero.linewidth = 8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="#8A3871";

    tablero.fillRect(0,0,1200,860)
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
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