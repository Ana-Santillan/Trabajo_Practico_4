/*
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
*/

let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad){
        cuenta.saldo = cantidad;
        document.write(`<p>Saldo actualizado. Saldo actual = ${cuenta.saldo}</p>`);
    },
    extraer: function(cantidadExtraer){
        if(cuenta.saldo > cantidadExtraer){
            cuenta.saldo = cuenta.saldo - cantidadExtraer;
            document.write(`<p>Saldo actualizado. Saldo actual = ${cuenta.saldo}</p>`);
        } else{
            document.write(`La cantidad a extraer es mayor al saldo actual`);
        }
    },
    informar: function(){
        document.write(`<p>Estado de la cuenta <br>Titular: ${this.titular} <br> Saldo: ${this.saldo}</p>`);
        let cantidad= parseInt(prompt("Ingresar la cantidad de saldo a agregar"));
        let cantidadExtraer= parseInt(prompt("Ingresar la cantidad de saldo a extraer"));
        cuenta.ingresar(cantidad);
        cuenta.extraer(cantidadExtraer);
        document.write(`<p>Estado de la cuenta <br>Titular: ${this.titular} <br> Saldo: ${this.saldo}</p>`);
    }
}
cuenta.informar();