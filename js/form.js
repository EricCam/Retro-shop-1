document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registration-form").addEventListener("submit", function (event) {
        event.preventDefault();
        enviar();
    });

    function enviar() {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const codigo = document.getElementById("codigo").value;
        const direccion = document.getElementById("direccion").value;
        const numero = document.getElementById("numero").value;
        const clave = document.getElementById("clave").value;
        const confirmarClave = document.getElementById("confirmar-clave").value;
        const mail = document.getElementById("mail").value;

        if (nombre && apellido && codigo && direccion && numero && clave && confirmarClave && mail) {
            if (clave === confirmarClave) {
                alert("¡Su mensaje fue recibido correctamente!");
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("codigo").value = "";
                document.getElementById("direccion").value = "";
                document.getElementById("numero").value = "";
                document.getElementById("clave").value = "";
                document.getElementById("confirmar-clave").value = "";
                document.getElementById("mail").value = "";
            } else {
                alert("Las contraseñas no coinciden.");
            }
        } else {
            alert("Por favor, complete todos los campos obligatorios.");
        }
    }
});
