/*
Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
*/

class animal{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get edad(){
        return this._edad;
    }
    set edad(nuevaEdad){
        this._edad = nuevaEdad;
    }

    //metodo
    emitirSonido(){
        document.write("Se esta emitiendo un sonido");
    }
}

class perro extends animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    //metodo
    emitirSonido(){
        document.write("<p>El perro ladra</p>");
    }
}

class gato extends animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    //metodo
    emitirSonido(){
        document.write("<p>El gato maulla</p>");
    }
}

const perro1 = new perro("Bianca", 12);
const gato1 = new gato("Chimuelo", 3);

perro1.emitirSonido();
gato1.emitirSonido();