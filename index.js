document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // MOBILE MENU
    // ================================

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = mobileMenu.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });


        const mobileLinks =
            document.querySelectorAll(".mobile-link");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            });

        });

    }


    // ================================
    // AUTOMATIC FOOTER YEAR
    // ================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ================================
    // PROJECT ENQUIRY
    // ================================

    const enquiryForm =
        document.getElementById("enquiryForm");

    const projectType =
        document.getElementById("projectType");

    const otherServiceContainer =
        document.getElementById("otherServiceContainer");

    const otherService =
        document.getElementById("otherService");


    // Show "Other service" input
    // when Other is selected

    if (
        projectType &&
        otherServiceContainer &&
        otherService
    ) {

        projectType.addEventListener("change", () => {

            if (projectType.value === "Other") {

                otherServiceContainer.classList.remove("hidden");

                otherService.required = true;

                otherService.focus();

            } else {

                otherServiceContainer.classList.add("hidden");

                otherService.required = false;

                otherService.value = "";

            }

        });

    }


    // ================================
    // SEND ENQUIRY TO WHATSAPP
    // ================================

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const location =
                document.getElementById("location").value.trim();

            const description =
                document.getElementById("description").value.trim();


            let service =
                projectType ? projectType.value : "";


            if (
                service === "Other" &&
                otherService
            ) {
                service = otherService.value.trim();
            }


            // Make sure all required information
            // has been provided

            if (
                !name ||
                !phone ||
                !service ||
                !location ||
                !description
            ) {
                return;
            }


            // WhatsApp message

            const message =
`Hello God's Time Elite Aluminium Works,

I would like to request your services.

Name: ${name}
Phone: ${phone}
Service Needed: ${service}
Location: ${location}

Description:
${description}`;


            // Dad's WhatsApp number

            const whatsappNumber =
                "2348030575897";


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            const formStatus =
                document.getElementById("formStatus");


            if (formStatus) {

                formStatus.textContent =
                    "Opening WhatsApp...";

            }


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }

});

const enquiryForm = document.getElementById("enquiryForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const countdown = document.getElementById("countdown");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const location = document.getElementById("location").value.trim();
        const description = document.getElementById("description").value.trim();

        let service = projectType ? projectType.value : "";

        if (service === "Other" && otherService) {
            service = otherService.value.trim();
        }

        if (!name || !phone || !service || !location || !description) {
            return;
        }

        const message =
`Hello God's Time Elite Aluminium Works,

I would like to request your services.

Name: ${name}
Phone: ${phone}
Service Needed: ${service}
Location: ${location}

Service Details:
${description}`;

        const whatsappNumber = "2348030575897";

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        /*
         * Open WhatsApp with the service request
         */
        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );


        /*
         * Hide form and show thank-you message
         */
        enquiryForm.style.display = "none";

        if (thankYouMessage) {
            thankYouMessage.classList.add("show");
        }


        /*
         * 4-second countdown
         */
        let seconds = 4;

        if (countdown) {
            countdown.textContent = seconds;
        }

        const timer = setInterval(() => {

            seconds--;

            if (countdown) {
                countdown.textContent = seconds;
            }

            if (seconds <= 0) {

                clearInterval(timer);

                window.location.href = "index.html";

            }

        }, 1000);

    });

}