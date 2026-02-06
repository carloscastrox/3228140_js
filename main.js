//Desarrollar el insertar datos, editar, mostrar y eliminar en localStorage

function validateForm() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("nombre").value;
    let doc = document.getElementById("documento").value;
    
    if (email === "" || name === "" || doc === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    return true;
}