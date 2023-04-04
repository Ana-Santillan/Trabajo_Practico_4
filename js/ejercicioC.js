/*
Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:

Mostrar la tabla completa

filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

Buscar un producto serum y mostrarlo por pantalla,

Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.
*/

let arreglo = [
    {
        nombreProducto: "Hidratante facial",
        precio: 3500,
        categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
        nombreProducto: "Protector solar factor 50",
        precio: 3300,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar toque seco factor 50",
        precio: 4100,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar con color factor 50",
        precio: 3850.5,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Gel de limpieza facial",
        precio: 1740.99,
        categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
        nombreProducto: "Exfoliante de azúcar cherry",
        precio: 1200,
        categoria: "Labios",
    },
    {
        nombreProducto: "Pads de hidrogel para contorno de ojos",
        precio: 2800,
        categoria: "Ojos",
    },
    {
        nombreProducto: "Mascarilla facial",
        precio: 3250.99,
        categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
        nombreProducto: "Protector solar en barra",
        precio: 3800,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Mascara de hidratación y reparación",
        precio: 1200,
        categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];
document.write("<p>Lista de productos:</p>");
function mostrarTabla() {
    document.write(`<table><thead><tr>
    <th>Productos</th>
    <th>Categorias</th>
    <th>Precios</th>
    </tr></thead><tbody>`);
    arreglo.forEach((producto) => {
        document.write(`<tr>
        <td>${producto.nombreProducto}</td>
        <td>${producto.categoria}</td>
        <td>${producto.precio}</td>
        </tr>`);
    })
    document.write(`</tbody></table>`);
}

mostrarTabla();
document.write("<br>");
document.write("<hr>");
document.write("<br>");

function protectoresSolares() {
    document.write(`<table><thead><tr>
    <th>Producto</th>
    <th>Categorias</th>
    <th>Precio</th>
    </tr></thead><tbody>`);
    arreglo.forEach((producto) => {
        producto.nombreProducto.includes("Protector")
            ? document.write(`<tr>
        <td>${producto.nombreProducto}</td>
        <td>${producto.categoria}</td>
        <td>${producto.precio}</td></tr>`)
            : false;
    })
    document.write(`</tbody></table>`);
}
document.write("<p>Mostrar Protectores Solares:</p>");
protectoresSolares();
document.write("<br>");
document.write("<hr>");
document.write("<br>");

document.write("<p>Buscar producto Sérum:</p>");
function mostrarSerum() {
    document.write(
        `<table><thead><tr>
        <th>Producto</th>
        <th>Categorias</th>
        <th>Precio</th>
        </tr></thead><tbody>`
    );
    arreglo.forEach((producto) => {
        producto.categoria.includes("Sérum")
            ? document.write(
                `<tr>
                <td>${producto.nombreProducto}</td>
                <td>${producto.categoria}</td>
                <td>${producto.precio}</td></tr>`
            )
            : false;
    });
    document.write(`</tbody></table>`);
}

mostrarSerum();
document.write("<br>");
document.write("<hr>");
document.write("<br>");

document.write("<p>Buscar producto bruma:</p>");

let productoBruma = arreglo.find((producto) =>
    producto.nombreProducto.includes("Bruma")
);

productoBruma != undefined ? mostrarTabla([productoBruma]) : document.write("<p>No se encontró el producto solicitado<p>");