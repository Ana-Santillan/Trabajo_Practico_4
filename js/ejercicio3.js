/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área
*/

class rectangulo{
    constructor(ancho, alto){
        this._ancho = ancho;
        this._alto = alto;
    }
    get ancho(){
        return this._ancho;
    }
    set ancho(nuevoAncho){
        this._ancho = nuevoAncho;
    }
    
    get alto(){
        return this._alto;
    }
    set alto(nuevoAlto){
        this._alto = nuevoAlto;
    }
    //metodos
    calcularPerimetro(){
        return 2 * (this.alto + this.ancho);
    }

    calcularArea(){
        return this.ancho * this.alto;
    }
}


const ancho = prompt("Ingrese el ancho del rectangulo");
const alto = prompt("Ingrese el alto del rectangulo");

const rectangulo1 = new rectangulo(parseFloat(ancho), parseFloat(alto));

document.write(`<p>Ancho: ${rectangulo1.ancho}</p>`);
document.write(`<p>Alto: ${rectangulo1.alto}</p>`);

document.write("<br>")
document.write(`<p>El perímetro del réctangulo es: ${rectangulo1.calcularPerimetro()}</p>`);
document.write(`<p>El área del réctangulo es: ${rectangulo1.calcularArea()}</p>`);
