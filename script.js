const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => {
		document.querySelector(".navLink.active").classList.remove("active");
		navLink.classList.add("active");
	});
});

const dropdownTrigger = document.getElementById("dropdownTrigger");
dropdownTrigger.addEventListener("click", () => {
	dropdownTrigger.classList.toggle("active");
});
