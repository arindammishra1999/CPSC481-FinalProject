const checkboxes = document.querySelectorAll('.steps input[type="checkbox"]');
const previousButton = document.getElementById("prev-btn");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", strikeThrough);
});

function strikeThrough() {
    const label = this.nextElementSibling;
    if (this.checked) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}

previousButton.addEventListener("click", () => {
    window.location.href = "scrambledeggs.html";
});