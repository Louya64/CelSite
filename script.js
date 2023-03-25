const dropdownTrigger = document.getElementById("dropdownTrigger");
const openDropdown = () => {
	dropdownTrigger.classList.add("active");
	dropdownTrigger.removeEventListener("click", openDropdown);
	setTimeout(() => {
		document.addEventListener("click", closeDropdown, { once: true });
	}, 200);
};
const closeDropdown = () => {
	dropdownTrigger.classList.remove("active");
	document.removeEventListener("click", closeDropdown);
	setTimeout(() => {
		dropdownTrigger.addEventListener("click", openDropdown);
	}, 200);
};

dropdownTrigger.addEventListener("click", openDropdown);

const iconBurger = document.getElementById("iconBurger");
const nav = document.getElementById("nav");
iconBurger.addEventListener("click", () => {
	nav.classList.toggle("active");
	iconBurger.classList.toggle("active");
});
