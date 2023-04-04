/*
Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método.
*/

calculadora = {
    sumar: function(num1, num2){
        return num1 + num2;
    },
    restar: function(num1, num2){
        return num1 - num2;
    },
    multiplicar: function(num1, num2){
        return num1 * num2;
    },
    dividir: function(num1, num2){
        if(num2 === 0){
            document.write("No se puede realizar la división");
        } else{
            return num1 / num2;
        }
    }
}

const numero1 = parseInt(prompt("Ingrese el primer número"));
const numero2 = parseInt(prompt("Ingrese el segundo número"));

document.write("<p>Suma: </p>", calculadora.sumar(numero1, numero2));
document.write("<p>Resta: </p>", calculadora.restar(numero1, numero2));
document.write("<p>Multiplicación: </p>", calculadora.multiplicar(numero1, numero2));
document.write("<p>División: </p>", calculadora.dividir(numero1, numero2));