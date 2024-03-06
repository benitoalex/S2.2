window.addEventListener('load', function() {
    var passwordField = document.getElementById('fPassword');
    passwordField.value = ''; // Limpia el valor del campo de contraseña al cargar la página
});
// Exercise 6
function validate() {
    var error = 0;
    
    var fName = document.getElementById("fName");
    var fEmail = document.getElementById("fEmail");
    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");
    var fLastN = document.getElementById("fLastN");
    var fPassword = document.getElementById("fPassword");

    var errorName = document.getElementById("errorName");
    var errorEmail = document.getElementById("errorEmail");
    var errorPhone = document.getElementById("errorPhone");
    var errorAddress = document.getElementById("errorAddress");
    var errorLastN = document.getElementById("errorLastN");
    var errorPassword = document.getElementById("errorPassword");

    // Limpiar estilos y mensajes de error
    clearErrors();

    // Validar campos
    if (!/^[A-Za-z]{3,}$/.test(fName.value.trim())) {
        displayError(fName, errorName);
        error++;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fEmail.value.trim())) {
        displayError(fEmail, errorEmail);
        error++;
    }
    if (fPhone.value.trim().length !== 9 || isNaN(fPhone.value.trim())) {
        displayError(fPhone, errorPhone);
        error++;
    }
    if (fAddress.value.trim().length < 3) {
        displayError(fAddress, errorAddress);
        error++;
    }
    if (!/^[A-Za-z]{3,}$/.test(fLastN.value.trim())) {
        displayError(fLastN, errorLastN);
        error++;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/.test(fPassword.value.trim())) {
        displayError(fPassword, errorPassword);
        error++;
    }

    if (error > 0) {
        return false; // Evitar envío del formulario si hay errores
    } else {
        alert("Formulario enviado correctamente");
        return true; // Permitir envío del formulario si no hay errores
    }
}

function displayError(inputField, errorElement) {
    inputField.classList.add("invalid-input");
    errorElement.style.display = "block";
}

function clearErrors() {
    var inputFields = document.querySelectorAll(".form-control");
    inputFields.forEach(function(inputField) {
        inputField.classList.remove("invalid-input");
    });

    var errorElements = document.querySelectorAll(".invalid-feedback");
    errorElements.forEach(function(errorElement) {
        errorElement.style.display = "none";
    });
}
