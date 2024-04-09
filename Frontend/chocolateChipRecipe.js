const checkboxes = document.querySelectorAll('.steps input[type="checkbox"]');
const previousButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const homeButton = document.getElementById("home-btn");
const favoriteButton = document.getElementById("favorite-btn");
const tooltip = favoriteButton.querySelector('.tooltip');

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            // Check all the checkboxes above the clicked checkbox
            for (let i = 0; i < index; i++) {
                checkboxes[i].checked = true;
            }
        } else {
            // Uncheck all the checkboxes below the clicked checkbox
            for (let i = index + 1; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }
        }
        checkCheckboxes();
    });
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
    window.location.href = "chocolatechip.html";
});

homeButton.addEventListener("click", () => {
    window.location.href = "mainscreen.html";
});

favoriteButton.addEventListener("click", toggleFavorite);

function toggleFavorite() {
    favoriteButton.classList.toggle("favorite");
    if (favoriteButton.classList.contains('favorite')) {
        tooltip.textContent = 'Remove recipe from favorites';
    } else {
        tooltip.textContent = 'Add recipe to favorites';
    }
}
