// Precio base del producto
let precio = 400000;

// Inicializamos cantidad y seleccionamos los elementos del DOM
let cantidad = 0;
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const btnSumar = document.querySelectorAll("button")[0]; // Botón de sumar
const btnRestar = document.querySelectorAll("button")[1]; // Botón de restar

// Mostrar el precio inicial
precioSpan.innerHTML = precio;

// Función para actualizar el total a pagar
function actualizarTotal() {
    const total = cantidad * precio;
    totalSpan.innerHTML = total;
}

// Eventos para los botones
btnSumar.addEventListener("click", () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad; // Actualiza la cantidad en el HTML
    actualizarTotal(); // Actualiza el total a pagar
});

btnRestar.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad; // Actualiza la cantidad en el HTML
        actualizarTotal(); // Actualiza el total a pagar
    }
});
