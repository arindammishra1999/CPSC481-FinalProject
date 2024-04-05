// login.js

function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("profiles.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const users = data.users;
            const user = users.find(
                (user) =>
                    user.username === username && user.password === password
            );
            if (user) {
                console.log("User should be logged in");
                window.location.href = "recipe.html"; // Redirect to homepage if login successful
            } else {
                alert("Invalid username or password");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    loginUser(); // Call the loginUser function
});
