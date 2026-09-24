document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // MOBILE MENU
    // ================================

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileMenu.classList.toggle("open");


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

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    // ================================
    // ENQUIRY ELEMENTS
    // ================================

    const enquiryForm =
        document.getElementById("enquiryForm");


    const projectType =
        document.getElementById("projectType");


    const otherServiceContainer =
        document.getElementById(
            "otherServiceContainer"
        );


    const serviceCards =
        document.querySelectorAll(
            ".service-selection-card"
        );


    const selectedServiceContainer =
        document.getElementById(
            "selectedServiceContainer"
        );


    const selectedService =
        document.getElementById(
            "selectedService"
        );


    const customServiceButton =
        document.getElementById(
            "customServiceButton"
        );


    const customServiceContainer =
        document.getElementById(
            "customServiceContainer"
        );


    const otherService =
        document.getElementById(
            "otherService"
        );


    const thankYouMessage =
        document.getElementById(
            "thankYouMessage"
        );


    const countdown =
        document.getElementById(
            "countdown"
        );


    const formStatus =
        document.getElementById(
            "formStatus"
        );



    // ================================
    // SELECTED OTHER SERVICE
    // ================================

    let selectedOtherService = "";



    // ================================
    // SERVICE TYPE
    // ================================

    if (
        projectType &&
        otherServiceContainer
    ) {

        projectType.addEventListener(
            "change",
            () => {

                const isOther =
                    projectType.value === "Other";


                if (isOther) {

                    otherServiceContainer
                        .classList
                        .remove("hidden");

                } else {

                    otherServiceContainer
                        .classList
                        .add("hidden");


                    selectedOtherService = "";


                    // Remove selected card

                    serviceCards.forEach(
                        (card) => {

                            card.classList.remove(
                                "selected"
                            );

                        }
                    );


                    // Hide selected service

                    if (
                        selectedServiceContainer
                    ) {

                        selectedServiceContainer
                            .classList
                            .add("hidden");

                    }


                    // Hide custom input

                    if (
                        customServiceContainer
                    ) {

                        customServiceContainer
                            .classList
                            .add("hidden");

                    }


                    // Clear custom input

                    if (otherService) {

                        otherService.value = "";

                        otherService.required =
                            false;

                    }

                }

            }
        );

    }



    // ================================
    // SERVICE CARD SELECTION
    // ================================

    serviceCards.forEach(
        (card) => {

            card.addEventListener(
                "click",
                () => {

                    // Remove previous selection

                    serviceCards.forEach(
                        (item) => {

                            item.classList.remove(
                                "selected"
                            );

                        }
                    );


                    // Select clicked card

                    card.classList.add(
                        "selected"
                    );


                    selectedOtherService =
                        card.dataset.service;


                    // Show selected service

                    if (
                        selectedService
                    ) {

                        selectedService.textContent =
                            selectedOtherService;

                    }


                    if (
                        selectedServiceContainer
                    ) {

                        selectedServiceContainer
                            .classList
                            .remove("hidden");

                    }


                    // Hide custom input

                    if (
                        customServiceContainer
                    ) {

                        customServiceContainer
                            .classList
                            .add("hidden");

                    }


                    if (otherService) {

                        otherService.value = "";

                        otherService.required =
                            false;

                    }

                }
            );

        }
    );



    // ================================
    // CUSTOM SERVICE
    // ================================

    if (customServiceButton) {

        customServiceButton.addEventListener(
            "click",
            () => {

                // Remove card selection

                serviceCards.forEach(
                    (card) => {

                        card.classList.remove(
                            "selected"
                        );

                    }
                );


                selectedOtherService = "";


                // Hide selected service

                if (
                    selectedServiceContainer
                ) {

                    selectedServiceContainer
                        .classList
                        .add("hidden");

                }


                // Show custom input

                if (
                    customServiceContainer
                ) {

                    customServiceContainer
                        .classList
                        .remove("hidden");

                }


                // Make input required

                if (otherService) {

                    otherService.required =
                        true;

                    otherService.focus();

                }

            }
        );

    }



    // ================================
    // SEND ENQUIRY TO WHATSAPP
    // ================================

    if (enquiryForm) {

        enquiryForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                // ============================
                // GET FORM VALUES
                // ============================

                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById("phone")
                        .value
                        .trim();


                const location =
                    document
                        .getElementById("location")
                        .value
                        .trim();


                const description =
                    document
                        .getElementById("description")
                        .value
                        .trim();



                // ============================
                // DETERMINE SERVICE
                // ============================

                let service =
                    projectType
                        ? projectType.value
                        : "";


                if (
                    service === "Other"
                ) {

                    if (
                        selectedOtherService
                    ) {

                        service =
                            selectedOtherService;

                    } else if (
                        otherService
                    ) {

                        service =
                            otherService.value
                                .trim();

                    }

                }



                // ============================
                // VALIDATION
                // ============================

                if (
                    !name ||
                    !phone ||
                    !service ||
                    !location ||
                    !description
                ) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Please complete all required fields.";

                    }

                    return;

                }



                // ============================
                // WHATSAPP MESSAGE
                // ============================

                const message =
`Hello God's Time Elite Aluminium Works,

I would like to request your services.

Name: ${name}
Phone: ${phone}

Service Needed: ${service}

Building Location:
${location}

Additional Details:
${description}`;



                // ============================
                // WHATSAPP NUMBER
                // ============================

                const whatsappNumber =
                    "2348030575897";


                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



                // ============================
                // OPEN WHATSAPP
                // ============================

                if (formStatus) {

                    formStatus.textContent =
                        "Opening WhatsApp...";

                }


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );



                // ============================
                // HIDE FORM
                // ============================

                enquiryForm.style.display =
                    "none";



                // ============================
                // SHOW THANK YOU
                // ============================

                if (thankYouMessage) {

                    thankYouMessage
                        .classList
                        .add("show");

                }



                // ============================
                // COUNTDOWN
                // ============================

                let seconds = 4;


                if (countdown) {

                    countdown.textContent =
                        seconds;

                }


                const timer =
                    setInterval(
                        () => {

                            seconds--;


                            if (countdown) {

                                countdown.textContent =
                                    seconds;

                            }


                            if (
                                seconds <= 0
                            ) {

                                clearInterval(
                                    timer
                                );


                                window.location.href =
                                    "index.html";

                            }

                        },
                        1000
                    );

            }
        );

    }

});