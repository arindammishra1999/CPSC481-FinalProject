const signUpButton = document.getElementById("SignUpButton");

function signUpUser() {
    window.location.href = "mainscreen.html";

}

document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    signUpUser(); // Call the loginUser function
});
