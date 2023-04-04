/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class libro{
    constructor(isbn, titulo, autor, nroPaginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._nroPaginas = nroPaginas;
    }
    get isbn(){
        return this._isbn;
    }
    set isbn(nuevoIsbn){
        this._isbn = nuevoIsbn;
    }
    get titulo(){
        return this._titulo;
    }
    set titulo(nuevoTitulo){
        this._titulo = nuevoTitulo;
    }
    get autor(){
        return this._autor;
    }
    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
    get nroPaginas(){
        return this._nroPaginas;
    }
    set nroPaginas(nuevoNroPagina){
        this._nroPaginas = nuevoNroPagina;
    }

    //metodos
    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.nroPaginas} páginas.</p>`)
    }
}

const libro1 = new libro(9788478887200, "El principito", "Antoine de Saint-Exupéry", 120);
const libro2 = new libro(9788497592208, "100 años de soledad", "Gabriel García Márquez", 496);

libro1.mostrarLibro();
libro2.mostrarLibro();

if(libro1.nroPaginas < libro2.nroPaginas){
    document.write(`<p>El libro ${libro2.titulo} tiene mayor cantidad de páginas.</p>`);
} else if(libro1.nroPaginas > libro2.nroPaginas){
    document.write(`<p>El libro ${libro1.titulo} tiene mayor cantidad de páginas.</p>`);
} else{
    document.write(`<p>Los dos libros tienen la misma cantidad de páginas.</p>`);
}
