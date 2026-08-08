/* =========================================================
   ✦ DEAR PORCH — FINAL MASTER SCRIPT
   ✦ ใช้ร่วมกันทุกหน้า
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ✦ PAGE LOADED
    ===================================================== */

    document.body.classList.add("page-loaded");


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

            element.classList.add(
                "home-show"
            );

        }, 150 + index * 180);

    });


    /* =====================================================
       ✦ HOME MENU ANIMATION
    ===================================================== */

    const homeLinks =
        document.querySelectorAll(
            ".home-link"
        );

    homeLinks.forEach((link, index) => {

        setTimeout(() => {

            link.classList.add(
                "home-show"
            );

        }, 650 + index * 110);

    });


    /* =====================================================
       ✦ SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-card, " +
            ".story-section, " +
            ".timeline-item, " +
            ".memory-photo, " +
            ".memories-note, " +
            ".letter-paper, " +
            ".letter-sign, " +
            ".letter-signature, " +
            ".reason-card, " +
            ".reason-item, " +
            ".corky-card, " +
            ".family-member, " +
            ".final-message, " +
            ".final-back, " +
            ".final-dream"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

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
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            observer.observe(
                element
            );

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

    }


    /* =====================================================
       ✦ STAGGER
    ===================================================== */

    const staggerGroups = [

        [".memory-photo", 90],

        [".reason-card", 70],

        [".reason-item", 70],

        [".timeline-item", 120],

        [".story-section", 140],

        [".corky-card", 120],

        [".family-member", 120],

        [".about-card", 140],

        [".letter-paper", 160]

    ];


    staggerGroups.forEach(
        ([selector, delay]) => {

            document
                .querySelectorAll(selector)
                .forEach(
                    (element, index) => {

                        element.style.transitionDelay =
                            `${index * delay}ms`;

                    }
                );

        }
    );


    /* =====================================================
       ✦ MEMORY ROTATION
    ===================================================== */

    const rotations = [
        "-1.2deg",
        "1deg",
        "-0.6deg",
        "1.4deg",
        "-1deg"
    ];


    document
        .querySelectorAll(
            ".memory-photo"
        )
        .forEach(
            (photo, index) => {

                photo.style.setProperty(
                    "--rotation",
                    rotations[
                        index %
                        rotations.length
                    ]
                );

            }
        );


    /* =====================================================
       ✦ CORKY MOVEMENT
    ===================================================== */

    document
        .querySelectorAll(
            ".corky-card img, .family-member img"
        )
        .forEach(
            (image, index) => {

                image.style.animationDelay =
                    `${index * .45}s`;

            }
        );


    /* =====================================================
       ✦ IMAGE FALLBACK
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
       ✦ CURRENT PAGE
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() ||
        "index.html";


    document
        .querySelectorAll(
            ".shared-menu a, .home-link"
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
       ✦ GALLERY LIGHTBOX
    ===================================================== */

    const memoryImages =
        document.querySelectorAll(
            ".memory-image img"
        );


    memoryImages.forEach(image => {

        image.style.cursor =
            "zoom-in";


        image.addEventListener(
            "click",
            () => {

                if (
                    image.classList.contains(
                        "image-error"
                    )
                ) {
                    return;
                }


                const overlay =
                    document.createElement(
                        "div"
                    );


                overlay.className =
                    "image-lightbox";


                const largeImage =
                    document.createElement(
                        "img"
                    );


                largeImage.src =
                    image.src;


                largeImage.alt =
                    image.alt ||
                    "Our Memory";


                overlay.appendChild(
                    largeImage
                );


                document.body.appendChild(
                    overlay
                );


                requestAnimationFrame(
                    () => {

                        overlay.classList.add(
                            "show"
                        );

                    }
                );


                document.body.style.overflow =
                    "hidden";


                overlay.addEventListener(
                    "click",
                    () => {

                        overlay.classList.remove(
                            "show"
                        );


                        document.body.style.overflow =
                            "";


                        setTimeout(
                            () => {

                                overlay.remove();

                            },
                            300
                        );

                    }
                );

            }
        );

    });


    /* =====================================================
       ✦ ESC CLOSE LIGHTBOX
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }


            const lightbox =
                document.querySelector(
                    ".image-lightbox.show"
                );


            if (!lightbox) {
                return;
            }


            lightbox.classList.remove(
                "show"
            );


            document.body.style.overflow =
                "";


            setTimeout(
                () => {

                    lightbox.remove();

                },
                300
            );

        }
    );


    /* =====================================================
       ✦ BACK TO TOP
    ===================================================== */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
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


    /* =====================================================
       ✦ MOUSE PARALLAX
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
                    0.5;


                const y =
                    event.clientY /
                    window.innerHeight -
                    0.5;


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
       ✦ REDUCE MOTION
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


/* =========================================================
   ✦ COVER PAGE
   ✦ พิมพ์ข้อความทีละบรรทัด
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

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

            if (
                current <
                lines.length
            ) {

                lines[current]
                    .classList.add(
                        "show-line"
                    );


                current++;


                setTimeout(
                    showNext,
                    900
                );

            } else if (
                button
            ) {

                button.disabled =
                    false;


                button.classList.add(
                    "button-ready"
                );

            }

        }


        setTimeout(
            showNext,
            700
        );


        if (button) {

            button.addEventListener(
                "click",
                () => {

                    if (
                        button.disabled
                    ) {
                        return;
                    }


                    document.body.classList.add(
                        "cover-leaving"
                    );


                    setTimeout(
                        () => {

                            window.location.href =
                                "home.html";

                        },
                        700
                    );

                }
            );

        }

    }
);


/* =========================================================
   ✦ PAGE TRANSITION
========================================================= */

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


        setTimeout(
            () => {

                window.location.href =
                    href;

            },
            450
        );

    }
);


/* =========================================================
   ✦ SMOOTH ANCHOR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        const selector =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !selector ||
                            selector === "#"
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                selector
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

    }
);
