// // Script for navigation bar

const bar = document.getElementById("bar");

const navlist = document.getElementById("list");

bar.addEventListener("click", () => {
  navlist.classList.toggle("active");
  bar.classList.toggle("fa-xmark");
});


// Header Sticky

let header = document.querySelector("header");
header.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 200);
});
