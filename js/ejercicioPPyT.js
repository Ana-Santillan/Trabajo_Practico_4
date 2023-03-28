/*
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)
*/

let vueltas = 0;

do{
    let opcion = prompt("Ingrese una opción: 1 = piedra; 2 = papel; 3 = tijera");
    if(isNaN(opcion)){
        alert("Ingrese una opción valida");
    }
    opcion = Number(opcion);
    const opcionPC = Math.floor(Math.random() * 3) + 1;
    if(opcion===1 && opcionPC===1){
        document.write("<p>El usuario eligió piedra <br> La PC eligió piedra <br> Hubo empate</p>");
    } else if(opcion===1 && opcionPC===2){
        document.write("<p>El usuario eligió piedra <br> La PC eligió papel <br> PC gana</p>");
    } else if(opcion===1 && opcionPC===3){
        document.write("<p>El usuario eligió piedra <br> La PC eligió tijera <br> Usuario gana</p>");
    } else if(opcion===2 && opcionPC===1){
        document.write("<p>El usuario eligió papel <br> La PC eligió piedra <br> Usuario gana</p>");
    } else if(opcion===2 && opcionPC===2){
        document.write("<p>El usuario eligió papel <br> La PC eligió papel <br> Hubo empate</p>");
    } else if(opcion===2 && opcionPC===3){
        document.write("<p>El usuario eligió papel <br> La PC eligió tijera <br> PC gana</p>");
    } else if(opcion===3 && opcionPC===1){
        document.write("<p>El usuario eligió tijera <br> La PC eligió piedra <br> PC gana</p>");
    } else if(opcion===3 && opcionPC===2){
        document.write("<p>El usuario eligió tijera <br> La PC eligió papel <br> Usuario gana</p>");
    } else if(opcion===3 && opcion===3){
        document.write("<p>El usuario eligió tijera <br> La PC eligió tijera <br> Hubo empate</p>");
    }
    vueltas++;
}while(confirm("¿Quiere jugar de nuevo?"))