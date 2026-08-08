/* =====================================================
   ✦ DEAR PORCH — MAIN SCRIPT
   ✦ เอฟเฟกต์พิมพ์ข้อความ + หน้าเว็บ + ปีก + transition
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ PAGE FADE IN
    ====================================================== */
    document.body.classList.add("page-ready");
    /* =====================================================
       ✦ TYPEWRITER EFFECT
       ใช้กับข้อความที่ใส่ data-typewriter
    ====================================================== */
    const typewriterElements =
        document.querySelectorAll("[data-typewriter]");
    typewriterElements.forEach((element) => {
        const text = element.textContent.trim();
        element.textContent = "";
        element.classList.add("typing");
        let index = 0;
        const speed =
            Number(element.dataset.speed) || 45;
        function typeNext() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeNext, speed);
            } else {
                element.classList.remove("typing");
            }
        }
        setTimeout(typeNext, 500);
    });
    /* =====================================================
       ✦ SCROLL REVEAL
    ====================================================== */
    const revealElements =
        document.querySelectorAll(
            ".home-show-on-scroll, .memory-photo, .reason-card"
        );
    if ("IntersectionObserver" in window) {
        const observer =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(
                                "home-show"
                            );
                            observer.unobserve(
                                entry.target
                            );
                        }
                    });
                },
                {
                    threshold: 0.12
                }
            );
        revealElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("home-show");
        });
    }
    /* =====================================================
       ✦ PAGE TRANSITION
    ====================================================== */
    document.addEventListener(
        "click",
        (event) => {
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
                href.startsWith("tel:")
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
        }
    );
    /* =====================================================
       ✦ IMAGE FALLBACK
       ถ้ารูปหาไม่เจอ จะไม่ทำให้ layout พัง
    ====================================================== */
    document
        .querySelectorAll("img")
        .forEach((image) => {
            image.addEventListener(
                "error",
                () => {
                    image.classList.add(
                        "image-error"
                    );
                }
            );
        });
    /* =====================================================
       ✦ HEART CLICK EFFECT
    ====================================================== */
    document.addEventListener(
        "click",
        (event) => {
            const heart =
                event.target.closest(
                    ".home-heart, .heart-button"
                );
            if (!heart) {
                return;
            }
            createFloatingHeart(
                event.clientX,
                event.clientY
            );
        }
    );
    /* =====================================================
       ✦ FLOATING HEART
    ====================================================== */
    function createFloatingHeart(x, y) {
        const heart =
            document.createElement("span");
        heart.className =
            "click-heart";
        heart.textContent =
            "♡";
        heart.style.left =
            `${x}px`;
        heart.style.top =
            `${y}px`;
        document.body.appendChild(
            heart
        );
        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
    /* =====================================================
       ✦ GALLERY LIGHTBOX
       กดรูปแล้วขยาย
    ====================================================== */
    const galleryImages =
        document.querySelectorAll(
            ".memory-image img, .gallery img"
        );
    galleryImages.forEach((image) => {
        image.addEventListener(
            "click",
            () => {
                openLightbox(
                    image.src,
                    image.alt
                );
            }
        );
        image.style.cursor =
            "zoom-in";
    });
    function openLightbox(src, alt) {
        const old =
            document.querySelector(
                ".memory-lightbox"
            );
        if (old) {
            old.remove();
        }
        const lightbox =
            document.createElement("div");
        lightbox.className =
            "memory-lightbox";
        lightbox.innerHTML = `
            <button
                class="lightbox-close"
                aria-label="ปิด">
                ×
            </button>
            <img
                src="${src}"
                alt="${alt || "memory"}">
        `;
        document.body.appendChild(
            lightbox
        );
        requestAnimationFrame(() => {
            lightbox.classList.add(
                "lightbox-show"
            );
        });
        lightbox.addEventListener(
            "click",
            (event) => {
                if (
                    event.target === lightbox ||
                    event.target.classList.contains(
                        "lightbox-close"
                    )
                ) {
                    lightbox.classList.remove(
                        "lightbox-show"
                    );
                    setTimeout(() => {
                        lightbox.remove();
                    }, 300);
                }
            }
        );
    }
    /* =====================================================
       ✦ ESC ปิดรูป
    ====================================================== */
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Escape") {
                return;
            }
            const lightbox =
                document.querySelector(
                    ".memory-lightbox"
                );
            if (lightbox) {
                lightbox.classList.remove(
                    "lightbox-show"
                );
                setTimeout(() => {
                    lightbox.remove();
                }, 300);
            }
        }
    );
    /* =====================================================
       ✦ ป้องกันรูปลากออกจากหน้า
    ====================================================== */
    document
        .querySelectorAll("img")
        .forEach((image) => {
            image.addEventListener(
                "dragstart",
                (event) => {
                    event.preventDefault();
                }
            );
        });
});
