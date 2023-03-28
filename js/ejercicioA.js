/*
Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.
*/

let persona = {
    nombre: "Ana",
    apellido: "Santillan",
    edad: 23,
    estudiante: true,
    hobbies: ["participar en sorteos", "dibujar", "viajar", "bailar"],
    presentar: function(){
        if(persona.estudiante=== true){
            persona.estudiante = "Si";
            document.write(`Nombre: ${this.nombre} <br> Apellido: ${this.apellido} <br> Edad: ${this.edad} <br> Estudiante: ${this.estudiante} <br> Hobbies: ${this.hobbies}`);
        } else{
            persona.estudiante = "No";
            document.write(`Nombre: ${this.nombre} <br> Apellido: ${this.apellido} <br> Edad: ${this.edad} <br> Estudiante: ${this.estudiante} <br> Hobbies: ${this.hobbies}`);
        }
    }
}

persona.presentar();