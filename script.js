const navLinks = document.querySelectorAll("header li");

navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => {
		document.querySelector("li.active").classList.remove("active");
		navLink.classList.add("active");
	});
});
