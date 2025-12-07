// script.js

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Highlight active section in navbar while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});

// Hero button scroll effect
document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

// Simple animation on skills (hover effect)
document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.style.transform = "scale(1.1)";
        skill.style.transition = "transform 0.3s ease";
    });
    skill.addEventListener("mouseout", () => {
        skill.style.transform = "scale(1)";
    });
});

// Contact section alert (optional fun interaction)
document.querySelector("#contact").addEventListener("click", () => {
    alert("Thanks for visiting Anand's portfolio! 🚀");
});
