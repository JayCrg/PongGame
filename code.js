var bola, posX, posY, velocidad, direccionX, direccionY, radio, direccionbarra, alto, 
ancho, limitebarra1X, limitebarra2X, jugador1, jugador2, puntuacion1=0, puntuacion2=0;

window.onload = () => {
    init();
    setInterval(dibujaescenario, 1000/60)
}

function dibujaescenario() {
    if(posX+radio>700 || posX-radio<0)
    {
        direccionX*=-1;
        if (posX+radio>700){
            puntuacion1++;
            document.getElementById("p1").innerHTML = puntuacion1;
        }
        else{
            puntuacion2++;
            document.getElementById("2").innerHTML = puntuacion2;
        }

  
    }

    posX+=direccionX*velocidad;
    bola.setAttribute("cx", posX)
    
    if(posY+radio>550 || posY-radio<0)
    direccionY*=-1;

    posY+=direccionY*velocidad;
    bola.setAttribute("cy", posY)

    //player1
    if (direccionbarra == 1 && parseInt(jugador1.getAttribute("y")) > 5)
        jugador1.setAttribute("y", parseInt(jugador1.getAttribute("y"))-8)
    if (direccionbarra == -1 && parseInt(jugador1.getAttribute("y")) < 445)
        jugador1.setAttribute("y", parseInt(jugador1.getAttribute("y"))+8)
    
    
    jugador2.setAttribute("y", posY-50)

    
    if(posX-radio<limitebarra1X && (posY<parseInt(jugador1.getAttribute("y"))+alto && posY>parseInt(jugador1.getAttribute("y")))){
        direccionX*=-1;
        // posX+=direccionX*velocidad;
        // bola.setAttribute("cx", posX)
        calcularDireccionY(jugador1);
        // posY+=direccionY*velocidad;
        // bola.setAttribute("cy", posY)
    }
    
    if(posX+radio>limitebarra2X && (posY<parseInt(jugador2.getAttribute("y"))+alto && posY>parseInt(jugador2.getAttribute("y")))){
    direccionX*=-1;
    // posX+=direccionX*velocidad;
    // bola.setAttribute("cx", posX)
    calcularDireccionY(jugador2);
    // posY+=direccionY*velocidad;
    // bola.setAttribute("cy", posY)

}
}   

function init() {
    bola = document.getElementById("bola")
    jugador1 = document.getElementById("jugador1")
    jugador2 = document.getElementById("jugador2")
    ancho = parseInt(jugador1.getAttribute("width"))
    alto = parseInt(jugador1.getAttribute("height"))
    limitebarra1X = jugador1.getAttribute("x")
    limitebarra2X = jugador2.getAttribute("x")
    direccionbarra = 0
    posX=350 
    posY=275
    direccionX=-1;
    direccionY=-1;
    velocidad=5;
    radio=parseInt(bola.getAttribute('r'));
    document.addEventListener("keydown", (e) => {
        if  (e.key == "ArrowUp" )
            direccionbarra = 1;
        if (e.key == "ArrowDown")
            direccionbarra = -1;
    })
}