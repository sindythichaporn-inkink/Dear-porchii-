/* =========================================================
   ✦ DEAR PORCH — MASTER SCRIPT
   ✦ ใช้ร่วมกันทุกหน้า
   ✦ Reveal / Cover / Menu / Lightbox / Transition
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ 01 — PAGE FADE IN
    ===================================================== */
    document.body.classList.add("page-loaded");
    /* =====================================================
       ✦ 02 — GENERAL REVEAL
       ทุกหน้าจะค่อย ๆ ปรากฏ
    ===================================================== */
    const revealSelectors = [
        ".page-header",
        ".about-card",
        ".story-section",
        ".timeline-item",
        ".memory-photo",
        ".memories-note",
        ".letter-paper",
        ".letter-signature",
        ".reason-card",
        ".reason-item",
        ".family-member",
        ".corky-card",
        ".final-message",
        ".final-back",
        ".final-dream"
    ];
    const revealElements =
        document.querySelectorAll(
            revealSelectors.join(", ")
        );
    if ("IntersectionObserver" in window) {
        const observer =
            new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (
                            entry.isIntersecting
                        ) {
                            entry.target.classList.add(
                                "visible"
                            );
                            observer.unobserve(
                                entry.target
                            );
                        }
                    });
                },
                {
                    threshold: 0.08,
                    rootMargin:
                        "0px 0px -35px 0px"
                }
            );
        revealElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add(
                "visible"
            );
        });
    }
    /* =====================================================
       ✦ 03 — HOME PAGE ANIMATION
    ===================================================== */
    const homeHeader =
        document.querySelector(
            ".home-header"
        );
    const homeCouple =
        document.querySelector(
            ".home-couple"
        );
    const homeMessage =
        document.querySelector(
            ".home-message"
        );
    const homeLinks =
        document.querySelectorAll(
            ".home-link"
        );
    const homeEnding =
        document.querySelector(
            ".home-ending"
        );
    if (homeHeader) {
        setTimeout(() => {
            homeHeader.classList.add(
                "home-show"
            );
        }, 150);
    }
    if (homeCouple) {
        setTimeout(() => {
            homeCouple.classList.add(
                "home-show"
            );
        }, 400);
    }
    if (homeMessage) {
        setTimeout(() => {
            homeMessage.classList.add(
                "home-show"
            );
        }, 650);
    }
    homeLinks.forEach(
        (link, index) => {
            setTimeout(() => {
                link.classList.add(
                    "home-show"
                );
            }, 850 + index * 100);
        }
    );
    if (homeEnding) {
        setTimeout(() => {
            homeEnding.classList.add(
                "home-show"
            );
        }, 1800);
    }
    /* =====================================================
       ✦ 04 — COVER PAGE
       หน้า "สวัสดี พอร์ช"
    ===================================================== */
    const welcomeLines =
        document.querySelectorAll(
            ".welcome-line"
        );
    const openBook =
        document.getElementById(
            "openBook"
        );
    if (
        welcomeLines.length > 0
    ) {
        let current = 0;
        function showNextLine() {
            if (
                current <
                welcomeLines.length
            ) {
                welcomeLines[current]
                    .classList
                    .add("show-line");
                current++;
                setTimeout(
                    showNextLine,
                    900
                );
            } else if (openBook) {
                openBook.disabled =
                    false;
                openBook.classList.add(
                    "button-ready"
                );
            }
        }
        setTimeout(
            showNextLine,
            700
        );
    }
    /* =====================================================
       ✦ 05 — COVER BUTTON
    ===================================================== */
    if (openBook) {
        openBook.addEventListener(
            "click",
            () => {
                if (
                    openBook.disabled
                ) {
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
    /* =====================================================
       ✦ 06 — MEMORY PHOTO ROTATION
    ===================================================== */
    const memoryPhotos =
        document.querySelectorAll(
            ".memory-photo"
        );
    const rotations = [
        "-1.2deg",
        "1deg",
        "-0.6deg",
        "1.4deg",
        "-1deg",
        "0.7deg"
    ];
    memoryPhotos.forEach(
        (photo, index) => {
            photo.style.setProperty(
                "--rotation",
                rotations[
                    index %
                    rotations.length
                ]
            );
            photo.style.transitionDelay =
                `${index * 90}ms`;
        }
    );
    /* =====================================================
       ✦ 07 — STAGGER EFFECTS
    ===================================================== */
    document
        .querySelectorAll(
            ".story-section"
        )
        .forEach(
            (element, index) => {
                element.style.transitionDelay =
                    `${index * 120}ms`;
            }
        );
    document
        .querySelectorAll(
            ".timeline-item"
        )
        .forEach(
            (element, index) => {
                element.style.transitionDelay =
                    `${index * 110}ms`;
            }
        );
    document
        .querySelectorAll(
            ".reason-card, .reason-item"
        )
        .forEach(
            (element, index) => {
                element.style.transitionDelay =
                    `${Math.min(
                        index * 60,
                        900
                    )}ms`;
            }
        );
    document
        .querySelectorAll(
            ".corky-card, .family-member"
        )
        .forEach(
            (element, index) => {
                element.style.transitionDelay =
                    `${index * 120}ms`;
            }
        );
    /* =====================================================
       ✦ 08 — CORKY FLOAT DELAY
    ===================================================== */
    document
        .querySelectorAll(
            ".corky-card img, .family-member img"
        )
        .forEach(
            (image, index) => {
                image.style.animationDelay =
                    `${index * 0.45}s`;
            }
        );
    /* =====================================================
       ✦ 09 — IMAGE FALLBACK
       ถ้ารูปหาไม่เจอ ไม่ทำเว็บพัง
    ===================================================== */
    document
        .querySelectorAll("img")
        .forEach(image => {
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
       ✦ 10 — GALLERY LIGHTBOX
       กดรูป → รูปใหญ่
    ===================================================== */
    const memoryImages =
        document.querySelectorAll(
            ".memory-image img"
        );
    if (
        memoryImages.length > 0
    ) {
        const lightbox =
            document.createElement(
                "div"
            );
        lightbox.className =
            "image-lightbox";
        const lightboxImage =
            document.createElement(
                "img"
            );
        lightbox.appendChild(
            lightboxImage
        );
        document.body.appendChild(
            lightbox
        );
        memoryImages.forEach(
            image => {
                image.style.cursor =
                    "zoom-in";
                image.addEventListener(
                    "click",
                    event => {
                        event.stopPropagation();
                        if (
                            image.classList.contains(
                                "image-error"
                            )
                        ) {
                            return;
                        }
                        lightboxImage.src =
                            image.src;
                        lightboxImage.alt =
                            image.alt ||
                            "Our Memory";
                        lightbox.classList.add(
                            "show"
                        );
                        document.body.style.overflow =
                            "hidden";
                    }
                );
            }
        );
        lightbox.addEventListener(
            "click",
            event => {
                if (
                    event.target ===
                    lightbox
                ) {
                    lightbox.classList.remove(
                        "show"
                    );
                    document.body.style.overflow =
                        "";
                }
            }
        );
        document.addEventListener(
            "keydown",
            event => {
                if (
                    event.key ===
                    "Escape"
                ) {
                    lightbox.classList.remove(
                        "show"
                    );
                    document.body.style.overflow =
                        "";
                }
            }
        );
    }
    /* =====================================================
       ✦ 11 — CURRENT PAGE
    ===================================================== */
    const currentPage =
        window.location.pathname
            .split("/")
            .pop() ||
        "index.html";
    document
        .querySelectorAll(
            ".shared-menu a"
        )
        .forEach(link => {
            const href =
                link.getAttribute(
                    "href"
                );
            if (
                href ===
                currentPage
            ) {
                link.classList.add(
                    "current"
                );
            }
        });
    /* =====================================================
       ✦ 12 — BACK TO TOP
    ===================================================== */
    const backToTop =
        document.querySelector(
            ".back-to-top"
        );
    if (backToTop) {
        const checkScroll =
            () => {
                if (
                    window.scrollY >
                    500
                ) {
                    backToTop.classList.add(
                        "show"
                    );
                } else {
                    backToTop.classList.remove(
                        "show"
                    );
                }
            };
        window.addEventListener(
            "scroll",
            checkScroll
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
    /* =====================================================
       ✦ 13 — SMOOTH ANCHOR
    ===================================================== */
    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {
            link.addEventListener(
                "click",
                event => {
                    const targetId =
                        link.getAttribute(
                            "href"
                        );
                    const target =
                        document.querySelector(
                            targetId
                        );
                    if (!target) {
                        return;
                    }
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });
                }
            );
        });
    /* =====================================================
       ✦ 14 — PAGE TRANSITION
       สำคัญ: มีเพียงระบบเดียว
    ===================================================== */
    document.addEventListener(
        "click",
        event => {
            const link =
                event.target.closest(
                    "a"
                );
            if (!link) {
                return;
            }
            const href =
                link.getAttribute(
                    "href"
                );
            if (
                !href ||
                href.startsWith("#") ||
                href.startsWith("http") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                link.target === "_blank"
            ) {
                return;
            }
            if (
                event.target.closest(
                    ".image-lightbox"
                )
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
        }
    );
    /* =====================================================
       ✦ 15 — MOUSE PARALLAX
    ===================================================== */
    const page =
        document.querySelector(
            ".home-page, " +
            ".about-page, " +
            ".story-page, " +
            ".timeline-page, " +
            ".memories-page, " +
            ".letter-page, " +
            ".reasons-page, " +
            ".family-page, " +
            ".final-page"
        );
    if (
        page &&
        !window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {
        window.addEventListener(
            "mousemove",
            event => {
                const x =
                    event.clientX /
                    window.innerWidth -
                    .5;
                const y =
                    event.clientY /
                    window.innerHeight -
                    .5;
                page.style.setProperty(
                    "--mouse-x",
                    `${x * 8}px`
                );
                page.style.setProperty(
                    "--mouse-y",
                    `${y * 8}px`
                );
            }
        );
    }
    /* =====================================================
       ✦ 16 — REDUCED MOTION
    ===================================================== */
    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        document.documentElement.classList.add(
            "reduce-motion"
        );
    }
});
