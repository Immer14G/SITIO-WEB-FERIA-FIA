function mostrarInformacion(titulo, descripcion, imagenSrc) {
    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const modalImagen = document.getElementById("modal-imagen");

    modalTitulo.textContent = titulo;
    modalDescripcion.textContent = descripcion;
    modalImagen.src = imagenSrc;

    modal.style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function mostrarCarreras() {
    const carreras = [
        "Arquitectura",
        "Ingeniería Civil",
        "Ingeniería en Desarrollo de Software",
        "Ingeniería Industrial",
        "Ingeniería Eléctrica"
    ];
    alert("Carreras participantes:\n" + carreras.join("\n"));
}
