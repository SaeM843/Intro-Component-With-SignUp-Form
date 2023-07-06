const inputs = document.querySelectorAll(".right-card input");
const form = document.querySelector(".right-card form");
const errorIcon = document.querySelector(".error-icon");
const statusMessages = document.querySelector(".status");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    inputs.forEach((input) => {
        // console.log(input.value);
        // console.log(input.parentElement)
        const inputValue = input.value.trim();
        console.log(inputValue);

        if(!inputValue) {
            input.parentElement.classList.add("error");
            
        } else {
            input.parentElement.classList.remove("error")

           if(input.type == "email") {
                if (!isEmail(inputValue)) {
                    input.parentElement.classList.add("error");
                }
            }
        }
    })
})

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}