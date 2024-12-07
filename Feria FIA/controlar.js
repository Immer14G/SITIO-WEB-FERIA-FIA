
function mostrarInformacion(titulo, descripcion) {
    alert(`Título: ${titulo}\nDescripción: ${descripcion}`);
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
