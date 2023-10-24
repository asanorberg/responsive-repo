const hamburgerLink = document.querySelector(".hamburgerLink");
const mobileNav = document.querySelector(".mobileNav");

hamburgerLink.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});
