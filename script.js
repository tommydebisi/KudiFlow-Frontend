//eye-icon script
    const passwordField = document.getElementById("password");
    const iconEye = document.querySelector('.input-icon');

    iconEye.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            iconEye.classList.remove("ti-eye-off");
            iconEye.classList.add("ti-eye");
        } else {
            passwordField.type = "password";
            iconEye.classList.remove("ti-eye");
            iconEye.classList.add("ti-eye-off");
        }
    });
// return button script
    const backButton = document.querySelector('.return-button');

    backButton.addEventListener('click', () => {
        window.history.back();
    });
