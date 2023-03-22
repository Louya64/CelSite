const dropdownTrigger = document.getElementById("dropdownTrigger");
dropdownTrigger.addEventListener("click", () => {
	dropdownTrigger.classList.toggle("active");
});

const iconBurger = document.getElementById("iconBurger");
const nav = document.getElementById("nav");
iconBurger.addEventListener("click", () => {
	nav.classList.toggle("active");
	iconBurger.classList.toggle("active");
});
