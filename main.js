class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto, cantidad) {
        this.productos.push({ producto, cantidad });
    }

    calcularTotal() {
        return this.productos.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);   

    }

    mostrarDetalles() {
        let mensaje = "Detalle de la compra:\n\n";
        this.productos.forEach(item => {
            mensaje += `- ${item.producto.nombre} x${item.cantidad}: $${item.producto.precio * item.cantidad}\n`;
        });
        mensaje += `\nTotal: $${this.calcularTotal()}`;
        alert(mensaje);
    }

    finalizarCompra() {
        alert("Gracias por su compra, vuelva pronto");
        this.productos = []; 
    }
}


const productosDisponibles = [
    new Producto(1, "Leche", 1000),
    new Producto(2, "Pan de Molde", 2000),
    new Producto(3, "Queso", 1200),
    new Producto(4, "Mermelada", 890),
    new Producto(5, "Azucar", 1300),
];

function mostrarProductos() {
    let mensaje = "Bienvenido al Supermercado\nEstos son los productos disponibles:\n\n";
    productosDisponibles.forEach(producto => {
        mensaje += `${producto.id}.- ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
}

function agregarProductoAlCarrito() {
    mostrarProductos();
    const carrito = new Carrito();

    let seguirAgregando = true;
    while (seguirAgregando) {
        const idProducto = parseInt(prompt("Ingrese el número del producto que deseas agregar:"));

        const productoEncontrado = productosDisponibles.find(producto => producto.id === idProducto);

        if (productoEncontrado) {
            const cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"));
            carrito.agregarProducto(productoEncontrado, cantidad);
            alert(` ${cantidad} ${productoEncontrado.nombre} agregado(s) al carrito`);
            seguirAgregando = confirm("¿Desea agregar otro producto?");
        } else {
            alert("Opción invalida. Por favor, ingrese un número que corresponda.");
        }
    }

    carrito.mostrarDetalles();
    const finalizar = confirm("¿Desea finalizar la compra?");
    if (finalizar) {
        carrito.finalizarCompra();
    }
}

agregarProductoAlCarrito();
