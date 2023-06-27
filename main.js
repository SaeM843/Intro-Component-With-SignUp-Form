const inputs = document.querySelectorAll(".right-card input");
const form = document.querySelector(".right-card form");
const errorIcon = document.querySelector(".error-icon");
const statusMessages = document.querySelector(".status");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
        // console.log(input.value);

        if(!input.value) {
            statusMessages.style.display = "block"
            errorIcon.style.display = "block"
        } else {
            statusMessages.style.display = "none"
            errorIcon.style.display = "none"
        }
    })
})