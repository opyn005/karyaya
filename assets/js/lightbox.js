/* LIGHTBOX */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


// ScrollReveal Options
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // ScrollReveal Library Initialization
  ScrollReveal().reveal(".section-head h1", {
    ...scrollRevealOption,
    origin: "top",
    delay: 200,
  });
  
  ScrollReveal().reveal("#viewAllButtonTop", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
  });
  
  ScrollReveal().reveal(".button-group .button", {
    ...scrollRevealOption,
    interval: 200,
    origin: "bottom",
    delay: 300,
  });
  
  ScrollReveal().reveal(".gallery .item", {
    ...scrollRevealOption,
    interval: 200,
    delay: 400,
  });
  
  ScrollReveal().reveal("#viewAllButtonBottom", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 600,
  });