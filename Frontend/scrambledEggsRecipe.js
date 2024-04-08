const checkboxes = document.querySelectorAll('.steps input[type="checkbox"]');
const previousButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const homeButton = document.getElementById("home-btn");

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
    window.location.href = "bananaBreadRecipe.html";
});

previousButton.addEventListener("click", () => {
    window.location.href = "scrambledeggs.html";
});

homeButton.addEventListener("click", () => {
    window.location.href = "mainscreen.html";
});