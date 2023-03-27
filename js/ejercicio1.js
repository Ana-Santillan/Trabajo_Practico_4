/*
Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

let auto = {
    color: "rojo",
    marca: "toyota",
    modelo: 2022,
    estado: "apagado",
    encender: function(){
        auto.estado = "encendido";
        document.write(`<p>El auto esta ${auto.estado}</p>`);
    },
    apagar: function(){
        auto.estado = "apagado";
        document.write(`<p>El auto esta ${auto.estado}</p>`);
    }
}
auto.encender();
auto.apagar();