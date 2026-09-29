const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
}

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (nav) {
            nav.classList.remove("open");
        }
    });
});


const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        formMessage.textContent =
            "Thank you" +
            (name ? " " + name : "") +
            "! Your message has been received.";

        contactForm.reset();

    });

}


const testimonials = document.querySelectorAll(".testimonial");
const previousButton = document.getElementById("prevTestimonial");
const nextButton = document.getElementById("nextTestimonial");

let testimonialIndex = 0;

function showTestimonial(index) {

    testimonials.forEach(function (testimonial) {
        testimonial.classList.remove("active");
    });

    testimonials[index].classList.add("active");
}

if (previousButton && testimonials.length) {

    previousButton.addEventListener("click", function () {

        testimonialIndex--;

        if (testimonialIndex < 0) {
            testimonialIndex = testimonials.length - 1;
        }

        showTestimonial(testimonialIndex);

    });

}

if (nextButton && testimonials.length) {

    nextButton.addEventListener("click", function () {

        testimonialIndex++;

        if (testimonialIndex >= testimonials.length) {
            testimonialIndex = 0;
        }

        showTestimonial(testimonialIndex);

    });

}


const footerLinks = document.querySelectorAll(".footer a");

footerLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


const socialLinks = document.querySelectorAll(".social-links a");

socialLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href = link.getAttribute("href");

        if (!href || href === "#") {
            event.preventDefault();
        }

    });

});


const animatedElements = document.querySelectorAll(
    ".service-item, .team-card, .tech-card, .global-cards article, .client-logo"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

animatedElements.forEach(function (element) {
    observer.observe(element);
});


const backToTop = document.querySelector(".footer-bottom a");

if (backToTop) {

    backToTop.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}