/*
Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá
crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
(10).
Los métodos de la agenda serán los siguientes:
● agregarContacto(Contacto): Añade un contacto a la agenda, sino la agenda
no puede almacenar más contactos indicar por pantalla.
● existeContacto(Contacto): indica si el contacto pasado existe o no.
● listarContactos(): Lista toda la agenda
● buscarContacto(nombre): busca un contacto por su nombre y muestra su
teléfono.
● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
ha eliminado o no por pantalla
● agendaLlena(): indica si la agenda está llena.
● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un
prompt, las salidas de las operaciones seleccionadas por el usuario se pueden
mostrar en pantalla y por consola.
*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(longitud = 10) {
        this.longitud = longitud;
        this.contactos = [];
    }

    agregarContacto(contacto) {
        if (this.contactos.length < this.longitud) {
            this.contactos.push(contacto);
            document.write(`<p>El contacto ${contacto.nombre} ha sido añadido a la agenda.</p>`);
        } else {
            document.write('<p>La agenda está llena, no se puede añadir el contacto.</p>');
        }
    }

    // Verificar si un contacto existe en la agenda
    existeContacto(contacto) {
        return this.contactos.some(c => c.nombre === contacto.nombre);
    }

    // Listar todos los contactos de la agenda
    listarContactos() {
        if (this.contactos.length > 0) {
            document.write('Lista de contactos:');
            this.contactos.forEach(c => document.write(`<p>${c.nombre}: ${c.telefono}</p>`));
        } else {
            document.write('<p>La agenda está vacía.<p>');
        }
    }

    // Buscar un contacto por su nombre y mostrar su teléfono
    buscarContacto(nombre) {
        const contacto = this.contactos.find(c => c.nombre === nombre);
        if (contacto) {
            document.write(`<p>Teléfono de ${contacto.nombre}: ${contacto.telefono}</p>`);
        } else {
            document.write(`<p>No se encontró el contacto con el nombre ${nombre}.</p>`);
        }
    }

    // Eliminar un contacto de la agenda
    eliminarContacto(contacto) {
        const index = this.contactos.findIndex(c => c.nombre === contacto.nombre);
        if (index !== -1) {
            this.contactos.splice(index, 1);
            document.write(`<p>El contacto ${contacto.nombre} ha sido eliminado de la agenda.</p>`);
        } else {
            document.write(`<p>No se encontró el contacto ${contacto.nombre} en la agenda.</p>`);
        }
    }

    // Verificar si la agenda está llena
    agendaLlena() {
        return this.contactos.length === this.longitud;
    }

    // Verificar cuántos contactos más se pueden añadir a la agenda
    huecosLibres() {
        return this.longitud - this.contactos.length;
    }
}

// Crear una instancia de la agenda con tamaño por defecto
const miAgenda = new Agenda();

// Crear un menú con opciones para el usuario
let opcion;
while(opcion !== "0") {
    opcion = prompt(`Seleccione una opción:
    1. Añadir contacto
    2. Verificar que existe contacto
    3. Listar contactos
    4. Buscar contacto
    5. Eliminar contacto
    6. Verificar si la agenda está llena
    7. Verificar cuántos contactos más se pueden añadir
    0. Salir`);

    switch (opcion) {
        case '1':
            const nombre = prompt('Nombre del contacto:');
            const telefono = prompt('Teléfono del contacto:');
            const nuevoContacto = new Contacto(nombre, telefono);
            miAgenda.agregarContacto(nuevoContacto);
            break;

        case '2':
            const contactoExiste = prompt('Nombre del contacto:');
            miAgenda.existeContacto(contactoExiste);
            break;
        case '3':
            miAgenda.listarContactos();
            break;
        case '4':
            const nombreABuscar = prompt('Nombre del contacto a buscar:');
            miAgenda.buscarContacto(nombreABuscar);
            break;
        case '5':
            const nombreEliminar = prompt('Nombre del contacto a eliminar:');
            const contactoEliminar = new Contacto(nombreEliminar, "");
            miAgenda.eliminarContacto(contactoEliminar);
            break;
        case '6':
            document.write(`<p>La agenda está${miAgenda.agendaLlena() ? "" : " no"} llena.</p>`);
            break;
        case '7':
            document.write(`<p>Hay ${miAgenda.huecosLibres()} huecos libres en la agenda.</p>`);
            break;
        case '0':
            document.write("<p>Saliendo de la agenda telefónica.</p>");
            break;
        default:
            document.write("Opción inválida.");
            break;
    }
}