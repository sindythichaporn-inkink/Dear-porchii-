/* =========================================================
   ✦ DEAR PORCH — MAIN SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ✦ PAGE FADE IN
    ===================================================== */

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "1";

    });


    /* =====================================================
       ✦ HEADER
    ===================================================== */

    const header =
        document.querySelector(".home-header");

    if (header) {

        setTimeout(() => {

            header.classList.add("home-show");

        }, 150);

    }


    /* =====================================================
       ✦ HOME COUPLE
    ===================================================== */

    const couple =
        document.querySelector(".home-couple");

    if (couple) {

        setTimeout(() => {

            couple.classList.add("home-show");

        }, 400);

    }


    /* =====================================================
       ✦ HOME MESSAGE
    ===================================================== */

    const message =
        document.querySelector(".home-message");

    if (message) {

        setTimeout(() => {

            message.classList.add("home-show");

        }, 650);

    }


    /* =====================================================
       ✦ HOME MENU
    ===================================================== */

    const homeLinks =
        document.querySelectorAll(".home-link");

    homeLinks.forEach((link, index) => {

        setTimeout(() => {

            link.classList.add("home-show");

        }, 850 + index * 100);

    });


    /* =====================================================
       ✦ REASON CARDS
    ===================================================== */

    const reasonCards =
        document.querySelectorAll(".reason-card");

    reasonCards.forEach((card, index) => {

        /*
         * เว้นระยะไม่ให้ทุกใบเด้งพร้อมกัน
         */

        setTimeout(() => {

            card.classList.add("home-show");

        }, 350 + index * 55);

    });


    /* =====================================================
       ✦ REASONS ENDING
    ===================================================== */

    const reasonsEnding =
        document.querySelector(".reasons-ending");

    if (reasonsEnding) {

        const delay =
            350 + reasonCards.length * 55 + 500;

        setTimeout(() => {

            reasonsEnding.classList.add("home-show");

        }, delay);

    }


    /* =====================================================
       ✦ HOME ENDING
    ===================================================== */

    const homeEnding =
        document.querySelector(".home-ending");

    if (homeEnding) {

        setTimeout(() => {

            homeEnding.classList.add("home-show");

        }, 1800);

    }


    /* =====================================================
       ✦ PAGE TRANSITION
    ===================================================== */

    document.addEventListener("click", (event) => {

        const link =
            event.target.closest("a");

        if (!link) {
            return;
        }


        const href =
            link.getAttribute("href");


        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            link.target === "_blank"
        ) {
            return;
        }


        event.preventDefault();


        document.body.classList.add(
            "page-leaving"
        );


        setTimeout(() => {

            window.location.href = href;

        }, 500);

    });

});
