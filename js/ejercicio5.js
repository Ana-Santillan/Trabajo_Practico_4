/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
*/
class persona{
    constructor(nombre, edad, dni, sexo, peso, altura, fechaNac){
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._fechaNac = fechaNac;
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
    get dni(){
        return this._dni;
    }
    set dni(nuevoDni){
        this._dni = nuevoDni;
    }
    get sexo(){
        return this._sexo;
    }
    set sexo(nuevoSexo){
        this._sexo = nuevoSexo;
    }
    get peso(){
        return this._peso;
    }
    set peso(nuevoPeso){
        this._peso = nuevoPeso;
    }
    get altura(){
        return this._altura;
    }
    set altura(nuevaAltura){
        this._altura = nuevaAltura;
    }
    get fechaNac(){
        return this._fechaNac;
    }
    set fechaNac(nuevaFechaNac){
        this._fechaNac = nuevaFechaNac;
    }

    //metodos
    mostrarGeneracion(){
        if(this.fechaNac >= 1994 && this.fechaNac <= 2010){
            document.write("<p>La generación es: Generación Z <br> Su rasgo característico es: Irreverencia</p>")
        } else if(this.fechaNac >= 1981 && this.fechaNac <= 1993){
            document.write("<p>La generación es: Generación Y millennials <br> Su rasgo característico es: Frustración</p>")
        } else if(this.fechaNac >= 1969 && this.fechaNac <= 1980){
            document.write("<p>La generación es: Generación X <br> Su rasgo característico es: Obsesión por el éxito</p>")
        } else if(this.fechaNac >= 1949 && this.fechaNac <= 1968){
            document.write("<p>La generación es: Baby Boom <br> Su rasgo característico es: Ambición</p>")
        } else if(this.fechaNac >= 1930 && this.fechaNac <= 1948){
            document.write("<p>La generación es: Silent Generation <br> Su rasgo característico es: Austeridad</p>")
        }
    }
}

const persona1 = new persona("Ana", 23, 41984183, "F", 61, 1.58, 1999);
persona1.mostrarGeneracion();
const persona2 = new persona("Maria", 63, 41984183, "F", 70, 1.65, 1960);
persona2.mostrarGeneracion();
const persona3 = new persona("Juan", 33, 41984183, "F", 80, 1.70, 1990);
persona3.mostrarGeneracion();