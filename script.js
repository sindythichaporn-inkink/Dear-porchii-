/* =========================================================
   ✦ DEAR PORCH — SHARED SCRIPT
   ใช้ร่วมกันทุกหน้า
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ PAGE FADE IN
    ===================================================== */
    document.body.classList.add("page-loaded");
    /* =====================================================
       ✦ SCROLL REVEAL
       ทำให้การ์ด / รูป / timeline ค่อย ๆ ปรากฏ
    ===================================================== */
    const revealElements = document.querySelectorAll(
        ".story-section, " +
        ".timeline-item, " +
        ".memory-photo, " +
        ".reason-card, " +
        ".about-card, " +
        ".corky-card, " +
        ".final-dream"
    );
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );
        revealElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }
    /* =====================================================
       ✦ HOME ANIMATION
    ===================================================== */
    const homeElements = document.querySelectorAll(
        ".home-header, " +
        ".home-couple, " +
        ".home-message, " +
        ".home-ending"
    );
    homeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("home-show");
        }, 150 + index * 180);
    });
    /* =====================================================
       ✦ HOME MENU ANIMATION
    ===================================================== */
    const homeLinks =
        document.querySelectorAll(".home-link");
    homeLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add("home-show");
        }, 650 + index * 110);
    });
    /* =====================================================
       ✦ MEMORY PHOTO ROTATION
       ให้รูปแต่ละใบเอียงนิด ๆ แบบสมุดความทรงจำ
    ===================================================== */
    const memoryPhotos =
        document.querySelectorAll(".memory-photo");
    memoryPhotos.forEach((photo, index) => {
        const rotations = [
            "-1.2deg",
            "1deg",
            "-0.6deg",
            "1.4deg",
            "-1deg"
        ];
        photo.style.setProperty(
            "--rotation",
            rotations[index % rotations.length]
        );
    });
    /* =====================================================
       ✦ MEMORY IMAGE FALLBACK
       ถ้ารูปยังไม่มี จะไม่ทำให้หน้าเว็บพัง
    ===================================================== */
    const images =
        document.querySelectorAll("img");
    images.forEach(image => {
        image.addEventListener("error", () => {
            image.classList.add("image-error");
        });
    });
    /* =====================================================
       ✦ PAGE TRANSITION
       เปลี่ยนหน้าแบบค่อย ๆ fade
    ===================================================== */
    document.addEventListener("click", event => {
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
            href.startsWith("https") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
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
        }, 450);
    });
    /* =====================================================
       ✦ SMOOTH ANCHOR SCROLL
    ===================================================== */
    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {
        link.addEventListener(
            "click",
            event => {
                const targetId =
                    link.getAttribute("href");
                const target =
                    document.querySelector(targetId);
                if (!target) {
                    return;
                }
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });
    /* =====================================================
       ✦ CORKY GENTLE MOVEMENT
       ขยับเล็ก ๆ แบบนุ่ม ๆ
    ===================================================== */
    const corkies =
        document.querySelectorAll(
            ".corky-card img"
        );
    corkies.forEach((corky, index) => {
        corky.style.animationDelay =
            `${index * 0.45}s`;
    });
    /* =====================================================
       ✦ CURRENT PAGE
       ไฮไลต์เมนูหน้าที่กำลังเปิดอยู่
    ===================================================== */
    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";
    document.querySelectorAll(
        ".home-link"
    ).forEach(link => {
        const href =
            link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add(
                "current-page"
            );
        }
    });
    /* =====================================================
       ✦ BACK TO TOP
       ถ้ามีปุ่ม .back-to-top
    ===================================================== */
    const backToTop =
        document.querySelector(
            ".back-to-top"
        );
    if (backToTop) {
        window.addEventListener(
            "scroll",
            () => {
                if (window.scrollY > 500) {
                    backToTop.classList.add(
                        "show"
                    );
                } else {
                    backToTop.classList.remove(
                        "show"
                    );
                }
            }
        );
        backToTop.addEventListener(
            "click",
            () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }
});
/* =========================================================
   ✦ COVER PAGE
   พิมพ์ข้อความทีละประโยค
========================================================= */
function startCoverText() {
    const lines =
        document.querySelectorAll(
            ".welcome-line"
        );
    const button =
        document.getElementById(
            "openBook"
        );
    if (!lines.length) {
        return;
    }
    let current = 0;
    function showNext() {
        if (current < lines.length) {
            lines[current]
                .classList
                .add("show-line");
            current++;
            setTimeout(
                showNext,
                900
            );
        } else if (button) {
            button.disabled = false;
            button.classList.add(
                "button-ready"
            );
        }
    }
    setTimeout(
        showNext,
        700
    );
}
/* =========================================================
   ✦ COVER BUTTON
========================================================= */
document.addEventListener(
    "DOMContentLoaded",
    () => {
        const button =
            document.getElementById(
                "openBook"
            );
        if (!button) {
            return;
        }
        startCoverText();
        button.addEventListener(
            "click",
            () => {
                if (button.disabled) {
                    return;
                }
                document.body.classList.add(
                    "cover-leaving"
                );
                setTimeout(() => {
                    window.location.href =
                        "home.html";
                }, 700);
            }
        );
    }
);
