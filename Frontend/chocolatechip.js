let quantity = 1;
const quantityInput = document.getElementById("quantity");
const decreaseButton = document.getElementById("decrease-btn");
const increaseButton = document.getElementById("increase-btn");
const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("prev-btn");
const homeButton = document.getElementById("home-btn");
const selectAllCheckbox = document.getElementById("select-all");
const favoriteButton = document.getElementById("favorite-btn");
const tooltip = favoriteButton.querySelector('.tooltip');

function updateButtonsState() {
    decreaseButton.disabled = quantity == 0.25;
    increaseButton.disabled = quantity == 10;
}

selectAllCheckbox.addEventListener("change", () => {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox.checked;
    });
    checkCheckboxes();
});

decreaseButton.addEventListener("click", () => {
    if (quantity > 1) quantity--;
    else if (quantity == 1) quantity = 0.5;
    else if (quantity == 0.5) quantity = 0.25;
    quantityInput.value = quantity;
    updateButtonsState();
    updateIngredientQuantities();
});

increaseButton.addEventListener("click", () => {
    if (quantity == 0.25) quantity = 0.5;
    else if (quantity == 0.5) quantity = 1;
    else if (quantity < 10) quantity++;
    quantityInput.value = quantity;
    updateButtonsState();
    updateIngredientQuantities();
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", checkCheckboxes);
});

function checkCheckboxes() {
    let allChecked = true;
    checkboxes.forEach((checkbox) => {
        if (!checkbox.checked && checkbox.id != "select-all") {
            allChecked = false;
        }
        else if (checkbox.id == "select-all" && allChecked == true) {
            checkbox.checked = true;
        }
    });
    nextButton.disabled = !allChecked;
}

nextButton.addEventListener("click", () => {
    window.location.href = "chocolateChipRecipe.html";
});

previousButton.addEventListener("click", () => {
    window.location.href = "mainscreen.html";
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

function updateIngredientQuantities() {
    const ingredientQuantities = [
        1, // salted butter
        1, // granulated sugar
        1, // light brown sugar
        2, // pure vanilla extract
        2, // large eggs
        3, // all-purpose flour
        1, // baking soda
        0.5, // baking powder
        1, // sea salt
        2, // chocolate chips
    ];

    const ingredients = document.querySelectorAll(".checkbox");
    ingredients.forEach((ingredient, index) => {
        const quantitySpan = ingredient.querySelector("span");
        quantitySpan.innerText = ingredientQuantities[index] * quantity;
    });

    const total = document.getElementById("total");
    total.innerText = 36 * quantity + " Cookies";
}

// Initial call to update ingredient quantities
updateIngredientQuantities();
