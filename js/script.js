

// =====================================
// TimeTrail Journeys Website
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully");

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your message has been submitted.");

        });

    }

    const buttons = document.querySelectorAll(
        ".package-btn, .reserve-btn, .cta-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            alert(
                "Thank you for your interest! More features coming soon."
            );

        });

    });

});