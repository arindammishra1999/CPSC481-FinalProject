const checkboxes = document.querySelectorAll('.steps input[type="checkbox"]');
const previousButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const homeButton = document.getElementById("home-btn");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", checkCheckboxes);
});

function checkCheckboxes() {
    let allChecked = true;
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            allChecked = false;
        }
    });
    nextButton.disabled = !allChecked;
}

nextButton.addEventListener("click", () => {
    window.location.href = "mainscreen.html";
});

previousButton.addEventListener("click", () => {
    window.location.href = "pancakes.html";
});

const favoriteButton = document.getElementById("favorite-btn");

favoriteButton.addEventListener("click", toggleFavorite);

function toggleFavorite() {
    favoriteButton.classList.toggle("favorite");
}

homeButton.addEventListener("click", () => {
    window.location.href = "mainscreen.html";
});
