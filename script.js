document.addEventListener("DOMContentLoaded", function () {
    console.log("Bienvenidos a Encanto Isleño");
});
const imagenes = [
    "images/mofongo-camarones.jpg",
    "images/nuggets.jpg",
    "images/arroz-gandules.jpg",
    "images/churrasco.jpg",
    "images/vegano.jpg",
    "images/piñacolada.jpg",
    "images/sangria.jpg",
    "images/strawberry-cheesecake.jpg"
];

let posicion = 0;

setInterval(function () {
    const imagen = document.getElementById("imagenCarrusel");

    if (imagen) {
        posicion = (posicion + 1) % imagenes.length;
        imagen.src = imagenes[posicion];
    }
}, 3000);
const formulario = document.getElementById("formularioContacto");
const mensaje = document.getElementById("mensajeFormulario");
if (formulario && mensaje) {
    formulario.addEventListener("input", function (evento) {
        evento.preventDefault();
        if (formulario.checkValidity()) {
            mensaje.textContent = "¡Todos los campos están completos!";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "¡Completa los campos obligatorios!";
            mensaje.style.color = "red";
        }
    });
}
if (formulario && mensaje) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (formulario.checkValidity()) {
            mensaje.textContent = "¡Gracias por contactarnos!";
            mensaje.style.color = "green";
        }
    });
}