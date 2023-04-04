/*
crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
de un avión y devolverá información en caso de encontrarlo, si no lo encontró
indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
de pasajeros. Los aviones tienen el método abordar el cual permite que un
pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto,
buscar un avión y usar el método abordar.
*/

class Aeropuerto {
    constructor(nombreAeropuerto, listaAviones = []) {
        this._nombreAeropuerto = nombreAeropuerto;
        this._listaAviones = listaAviones;
    }
    get nombreAeropuerto(){
        return this._nombreAeropuerto;
    }
    set nombreAeropuerto(nuevoNombre){
        this._nombreAeropuerto = nuevoNombre;
    }
    get listaAviones(){
        return this._listaAviones;
    }
    set listaAviones(nuevaLista){
        this._listaAviones = nuevaLista;
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
    }

    buscarAvion(nombreAvion) {
        const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);

        if (avionEncontrado) {
            document.write(`<p>El avión "${nombreAvion}" se encontró en el aeropuerto.</p>`);
            
        } else {
            document.write(`<p>El avión "${nombreAvion}" no se encontró en el aeropuerto.</p>`);
        }
    }
}

class Avion {
    constructor(nombre, capacidad, destino, listaPasajeros = []) {
        this._nombre = nombre;
        this._capacidad = capacidad;
        this._destino = destino;
        this._listaPasajeros = listaPasajeros;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get capacidad(){
        return this._capacidad;
    }
    set capacidad(nuevaCapacidad){
        this._capacidad = nuevaCapacidad;
    }
    get destino(){
        return this._destino;
    }
    set destino(nuevoDestino){
        this._destino = nuevoDestino;
    }
    get listaPasajeros(){
        return this._listaPasajeros;
    }
    set listaPasajeros(nuevaLista){
        this._listaPasajeros = nuevaLista;
    }

    abordar(pasajero) {
        if (this.listaPasajeros.length < this.capacidad) {
            this.listaPasajeros.push(pasajero);
            document.write(`<p>El pasajero ${pasajero} abordó el avión "${this.nombre}".</p>`);
        } else {
            document.write(`<p>El avión "${this.nombre}" está lleno.</p>`);
        }
    }
}

const aeropuerto1 = new Aeropuerto("Aeropuerto 1");

const avion1 = new Avion("Avión 1", 250, "Argentina");
const avion2 = new Avion("Avión 2", 90, "Francia");
const avion3 = new Avion("Avión 3", 200, "España");

aeropuerto1.agregarAvion(avion1);
aeropuerto1.agregarAvion(avion2);
aeropuerto1.agregarAvion(avion3);


aeropuerto1.buscarAvion("Avión 2");

avion1.abordar("Ana Santillan");
