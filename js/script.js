const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
});


const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
    });
});


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you. Your message is ready to be connected to the backend.";

    contactForm.reset();
});


const year = document.getElementById("year");
year.textContent = new Date().getFullYear();


const previousButton = document.getElementById("prevTestimonial");
const nextButton = document.getElementById("nextTestimonial");

previousButton.addEventListener("click", function () {
    console.log("Previous testimonial");
});

nextButton.addEventListener("click", function () {
    console.log("Next testimonial");
});