/*
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse".
*/

class persona{
    constructor(nombre, edad, profesion){
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;
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
    get profesion(){
        return this._profesion;
    }
    set profesion(nuevaProfesion){
        this._profesion = nuevaProfesion;
    }

    //metodos
    saludar(){
        document.write(`<p>${this.nombre} esta saludando</p>`);
    }
    despedirse(){
        document.write(`<p>${this.nombre} esta despidiéndose</p>`);
    }
}

const persona1 = new persona("Ana Santillan", 23, "Estudiante");
const persona2 = new persona("Eloisa Iribarren", 25, "Estudiante");

persona1.saludar();
persona1.despedirse();
persona2.saludar();
persona2.despedirse();
