/*
Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.
// Objeto persona
const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 25,
  esEstudiante: true,
  hobbies: ["leer", "correr", "bailar"],

  // Método para presentar a la persona
  presentar: function() {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y mis hobbies son: ${this.hobbies.join(", ")}.`);
  },

  // Método para agregar un hobbie
  agregarHobbie: function(hobbie) {
    this.hobbies.push(hobbie);
    console.log(`Se ha agregado el hobbie ${hobbie}.`);
  },

  // Método para borrar un hobbie
  borrarHobbie: function(hobbie) {
    const index = this.hobbies.indexOf(hobbie);
    if (index > -1) {
      this.hobbies.splice(index, 1);
      console.log(`Se ha eliminado el hobbie ${hobbie}.`);
    } else {
      console.log(`El hobbie ${hobbie} no se encuentra en la lista.`);
    }
  },

  // Método para buscar un hobbie
  buscarHobbie: function(hobbie) {
    const index = this.hobbies.indexOf(hobbie);
    if (index > -1) {
      console.log(`La persona tiene el hobbie ${hobbie}.`);
    } else {
      console.log(`La persona no tiene el hobbie ${hobbie}.`);
    }
  }
};

// Agregar hobbies
persona.agregarHobbie("cocinar");
persona.agregarHobbie("viajar");
persona.agregarHobbie("tocar guitarra");

// Mostrar hobbies por pantalla
console.log(`Los hobbies de la persona son: ${persona.hobbies.join(", ")}`);

// Buscar el hobbie 'viajar'
persona.buscarHobbie("viajar");

// Eliminar el primer hobbie
persona.borrarHobbie(persona.hobbies[0]);

// Mostrar hobbies por pantalla
console.log(`Los hobbies de la persona son: ${persona.hobbies.join(", ")}`);

// Presentar a la persona
persona.presentar();

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
    },
    agregarHobbie: function(){
        let vueltas =1;
        do{
            agregar = prompt("Ingrese hobbie, minimo 3: ");
            this.hobbies.push(agregar);
            vueltas++;
        }while(confirm("¿Queres agregar otro hobbie?"))
        document.write("<hr>")
        document.write("<br>")
        persona.presentar();
    },
    borrarHobbie: function(){
        borrar = prompt("Ingrese hobbie a borrar");
        const index = this.hobbies.indexOf(borrar);
        if (index > -1) {
        this.hobbies.splice(index, 1);
        document.write("<br>");
        document.write("<hr>");
        document.write(`Se ha eliminado el hobbie ${borrar}.`);
        } else {
        document.write("<br>")
        document.write(`El hobbie ${borrar} no se encuentra en la lista.`);
        }
        document.write("<br>")
        persona.presentar();
    },
    buscarHobbie: function(hobbie) {
      const index = this.hobbies.indexOf(hobbie);
      if (index > -1) {
        document.write("<br>");
        document.write("<hr>");
        document.write(`La persona tiene el hobbie ${hobbie}.`);
      } else {
        document.write("<br>");
        document.write("<hr>");
        document.write(`La persona no tiene el hobbie ${hobbie}.`);
      }
    },
    borrarPrimerHobbie: function() {
      this.hobbies.shift();
      document.write("<br>");
      document.write("<hr>");
      document.write(`Se ha eliminado el primer hobbie`);
      document.write("<br>");
      persona.presentar();
    }
}

persona.presentar();
persona.agregarHobbie();
persona.borrarHobbie();
persona.buscarHobbie("viajar");
persona.borrarPrimerHobbie();