// Mobile Navbar Toggle
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// Light/Dark Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// If user visited before, apply saved mode
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
