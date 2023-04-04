/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.
*/

class producto{
    constructor(codigo, nombre, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }
    get codigo(){
        return this._codigo;
    }
    set codigo(nuevoCodigo){
        this._codigo = nuevoCodigo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(nuevoPrecio){
        this._precio = nuevoPrecio
        ;
    }

    // metodos
    mostrarDatos(){
        document.write(`<ul>
        <li>Código: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>`)
    }
}

const producto1 = new producto(1, "Jabón", 250);
const producto2 = new producto(2, "Shampoo", 750);
const producto3 = new producto(3, "Perfume", 1050);

const productos = [producto1, producto2, producto3];

for (const producto of productos) {
    producto.mostrarDatos();
}