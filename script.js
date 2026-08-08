<script>
document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ HEADER
    ====================================================== */
    const header =
        document.getElementById("homeHeader");
    if (header) {
        setTimeout(() => {
            header.classList.add("home-show");
        }, 150);
    }
    /* =====================================================
       ✦ COUPLE
    ====================================================== */
    const couple =
        document.getElementById("homeCouple");
    if (couple) {
        setTimeout(() => {
            couple.classList.add("home-show");
        }, 400);
    }
    /* =====================================================
       ✦ MESSAGE
    ====================================================== */
    const message =
        document.getElementById("homeMessage");
    if (message) {
        setTimeout(() => {
            message.classList.add("home-show");
        }, 650);
    }
    /* =====================================================
       ✦ MENU
    ====================================================== */
    const links =
        document.querySelectorAll(".home-link");
    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add("home-show");
        }, 850 + index * 120);
    });
    /* =====================================================
       ✦ ENDING
    ====================================================== */
    const ending =
        document.getElementById("homeEnding");
    if (ending) {
        setTimeout(() => {
            ending.classList.add("home-show");
        }, 1900);
    }
    /* =====================================================
       ✦ PAGE TRANSITION
    ====================================================== */
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
            href.startsWith("mailto:")
        ) {
            return;
        }
        event.preventDefault();
        document.body.classList.add(
            "page-leaving"
        );
        setTimeout(() => {
            window.location.href =
                href;
        }, 450);
    });
});
</script>
