const form = document.querySelector("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";

    let isValid = true;

    
    const nameRegex = /^[A-Za-z ]{9,50}$/;
    if (!nameRegex.test(nameInput.value.trim())) {
        nameError.textContent = "Name must be 9–50 letters (letters only).";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    const age = Number(ageInput.value);
    if (age < 16 || age > 30) {
        ageError.textContent = "Age must be between 16 and 30.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        form.submit();
    }
});
