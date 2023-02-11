// First Button
const button = document.querySelector(".first-button");

button.addEventListener("click", (e) => {
    e.preventDefault;
    button.classList.add("first-button_animate");
    setTimeout(() => {
        button.classList.remove("first-button_animate");
    }, 600);
});