// ================================
// MOBILE MENU
// ================================

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");

}


// ================================
// CLOSE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! 🌿 Your message has been received by Branch & Brew Café."
    );

    contactForm.reset();

});


// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", function () {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 20px rgba(62, 43, 32, 0.18)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(62, 43, 32, 0.12)";

    }

});