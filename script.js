/* =========================================================
   ✦ INDEX PAGE SCRIPT
========================================================= */
document.addEventListener(
    "DOMContentLoaded",
    () => {
        /* =================================================
           ✦ TYPING MESSAGE
        ================================================== */
        const typingLines =
            document.querySelectorAll(
                ".typing-line"
            );
        const openButton =
            document.getElementById(
                "indexOpen"
            );
        const messages = [
    "สวัสดี  𐔌՞ ܸ.ˬ.ܸ՞𐦯",
    "เธอคงเป็น… พอร์ช !?!",
    "ใช่ไหม… ^_____^",
    "งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ . .՞𐦯",
    "รู้ไหม…",
    "แฟนของเธอตั้งใจทำเว็บไซต์นี้เพื่อเธอมาก ๆ เลยนะ ૮₍ ˃ ⤙ ˂ ₎ა",
    "ทุกภาพ ทุกความทรงจำ และทุกข้อความในนี้",
    "ล้วนเป็นสิ่งที่อิ๊งค์ตั้งใจเก็บเอาไว้",
    "เพื่อให้เธอได้กลับมายิ้มกับมันอีกครั้ง ♡",
    "ขอบคุณที่เข้ามาในชีวิตของอิ๊งค์นะ ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა",
    "ตั้งแต่วันที่เราได้รู้จักกัน",
    "เรื่องราวเล็ก ๆ ของเราก็ค่อย ๆ กลายเป็น",
    "ความทรงจำที่อิ๊งค์อยากเก็บเอาไว้มากที่สุด",
    "และวันนี้…",
    "ถ้าเธอพร้อมแล้ว…",
    "ไปเปิดสมุดความทรงจำของเรากัน ໒꒰՞ ܸ. .ܸ՞꒱ა"
];
        let lineIndex =
            0;
        let charIndex =
            0;
        /* =================================================
           ✦ TYPE CHARACTER
        ================================================== */
        function typeCharacter() {
            /* ถ้าพิมพ์ครบทุกบรรทัด */
            if (
                lineIndex >=
                messages.length
            ) {
                /* เอา cursor ออกจากบรรทัดสุดท้าย */
                if (
                    typingLines.length
                ) {
                    typingLines[
                        typingLines.length - 1
                    ].classList.remove(
                        "typing-active"
                    );
                }
                /* แสดงปุ่ม */
                if (openButton) {
                    setTimeout(
                        () => {
                            openButton.classList.add(
                                "show"
                            );
                        },
                        500
                    );
                }
                return;
            }
            /* บรรทัดปัจจุบัน */
            const currentLine =
                typingLines[
                    lineIndex
                ];
            const currentText =
                messages[
                    lineIndex
                ];
            /* เปิด cursor */
            currentLine.classList.add(
                "typing-active"
            );
            /* =================================================
               ✦ พิมพ์ทีละตัว
            ================================================== */
            if (
                charIndex <
                currentText.length
            ) {
                currentLine.textContent +=
                    currentText.charAt(
                        charIndex
                    );
                charIndex++;
                setTimeout(
                    typeCharacter,
                    45
                );
            } else {
                /* จบบรรทัด */
                currentLine.classList.remove(
                    "typing-active"
                );
                lineIndex++;
                charIndex =
                    0;
                /* เว้นช่วงก่อนบรรทัดถัดไป */
                setTimeout(
                    typeCharacter,
                    300
                );
            }
        }
        /* =================================================
           ✦ START TYPING
        ================================================== */
        setTimeout(
            typeCharacter,
            1000
        );
        /* =================================================
           ✦ PAGE TRANSITION
        ================================================== */
        document.addEventListener(
            "click",
            (event) => {
                /* หาลิงก์ที่ถูกกด */
                const link =
                    event.target.closest(
                        "a"
                    );
                if (!link) {
                    return;
                }
                /* URL */
                const href =
                    link.getAttribute(
                        "href"
                    );
                /* ถ้าไม่มี URL */
                if (!href) {
                    return;
                }
                /* ลิงก์ที่ไม่ใช่หน้าในเว็บ */
                if (
                    href.startsWith("#") ||
                    href.startsWith("http") ||
                    href.startsWith("https") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("tel:")
                ) {
                    return;
                }
                /* หยุดการเปลี่ยนหน้าทันที */
                event.preventDefault();
                /* เพิ่ม class fade */
                document.body.classList.add(
                    "page-leaving"
                );
                /* เปลี่ยนหน้าหลัง fade */
                setTimeout(
                    () => {
                        window.location.href =
                            href;
                    },
                    800
                );
            }
        );
        /* =================================================
           ✦ PREVENT DOUBLE CLICK
        ================================================== */
        let leaving =
            false;
        document.addEventListener(
            "click",
            (event) => {
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
                    href.startsWith("tel:")
                ) {
                    return;
                }
                if (leaving) {
                    event.preventDefault();
                    return;
                }
                leaving =
                    true;
            }
        );
    }
);
/* =========================================================
   ✦ HOME PHOTO STACK
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const stack =
            document.getElementById(
                "photoStack"
            );

        if (!stack) return;

        stack.addEventListener(
            "click",
            () => {

                stack.classList.toggle(
                    "open"
                );

            }
        );

    }
);
/* =========================================================
   ✦ HOME PAGE
========================================================= */
document.addEventListener(
    "DOMContentLoaded",
    () => {
        /* ============================================
           PHOTO STACK
        ============================================ */
        const stack =
            document.querySelector(
                ".photo-stack"
            );
        if (stack) {
            stack.addEventListener(
                "click",
                () => {
                    stack.classList.toggle(
                        "opened"
                    );
                }
            );
        }
        /* ============================================
           MENU ANIMATION
        ============================================ */
        const links =
            document.querySelectorAll(
                ".home-link"
            );
        links.forEach(
            (
                link,
                index
            ) => {
                setTimeout(
                    () => {
                        link.classList.add(
                            "show"
                        );
                    },
                    250 +
                    (index * 120)
                );
            }
        );
        /* ============================================
           PAGE FADE IN
        ============================================ */
        document.body.style.opacity =
            "0";
        requestAnimationFrame(
            () => {
                document.body.style.opacity =
                    "1";
            }
        );
    }
);
/* =========================================================
   ✦ PAGE TRANSITION
========================================================= */
document.addEventListener(
    "click",
    (event) => {
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
            href.startsWith("mailto:")
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
            700
        );
    }
);
/* =========================================================
   ✦ DEAR PORCH — SHARED SCRIPT
   ใช้ร่วมกันทุกหน้า
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ PAGE FADE IN
    ===================================================== */
    document.body.style.opacity = "0";
    requestAnimationFrame(() => {
        document.body.style.transition =
            "opacity 0.7s ease";
        document.body.style.opacity = "1";
    });
    /* =====================================================
       ✦ HOME PAGE — PHOTO ANIMATION
    ===================================================== */
    const photoCards =
        document.querySelectorAll(
            ".home-photo-card"
        );
    photoCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform =
            `translateY(25px) rotate(${getPhotoRotation(card)})`;
        setTimeout(() => {
            card.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";
            card.style.opacity = "1";
            card.style.transform =
                `translateY(0) rotate(${getPhotoRotation(card)})`;
        }, 250 + index * 120);
    });
    /* =====================================================
       ✦ HOME PAGE — MENU ANIMATION
    ===================================================== */
    const menuCards =
        document.querySelectorAll(
            ".home-menu-card"
        );
    menuCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform =
            "translateY(25px)";
        setTimeout(() => {
            card.style.transition =
                "opacity 0.65s ease, transform 0.65s ease";
            card.style.opacity = "1";
            card.style.transform =
                "translateY(0)";
        }, 650 + index * 110);
    });
    /* =====================================================
       ✦ PAGE TRANSITION
    ===================================================== */
    let leaving = false;
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
                href.startsWith("http://") ||
                href.startsWith("https://") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:")
            ) {
                return;
            }
            if (leaving) {
                event.preventDefault();
                return;
            }
            leaving = true;
            event.preventDefault();
            document.body.classList.add(
                "page-leaving"
            );
            setTimeout(() => {
                window.location.href =
                    href;
            }, 700);
        }
    );
    /* =====================================================
       ✦ IMAGE FALLBACK
       ถ้ารูปยังไม่มี จะไม่ทำให้หน้าเว็บพัง
    ===================================================== */
    const images =
        document.querySelectorAll(
            "img"
        );
    images.forEach((image) => {
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
       ✦ MENU TOUCH EFFECT
       สำหรับมือถือ
    ===================================================== */
    const touchCards =
        document.querySelectorAll(
            ".home-menu-card"
        );
    touchCards.forEach((card) => {
        card.addEventListener(
            "touchstart",
            () => {
                card.classList.add(
                    "touch-glow"
                );
            },
            {
                passive: true
            }
        );
        card.addEventListener(
            "touchend",
            () => {
                setTimeout(() => {
                    card.classList.remove(
                        "touch-glow"
                    );
                }, 180);
            },
            {
                passive: true
            }
        );
    });
});
/* =========================================================
   ✦ PHOTO ROTATION
========================================================= */
function getPhotoRotation(card) {
    if (
        card.classList.contains(
            "photo-card-1"
        )
    ) {
        return "-2deg";
    }
    if (
        card.classList.contains(
            "photo-card-2"
        )
    ) {
        return "1.5deg";
    }
    if (
        card.classList.contains(
            "photo-card-3"
        )
    ) {
        return "-1deg";
    }
    if (
        card.classList.contains(
            "photo-card-4"
        )
    ) {
        return "2deg";
    }
    return "0deg";
}
/* =========================================================
   ✦ EXTRA TOUCH GLOW
========================================================= */
const touchStyle =
    document.createElement("style");
touchStyle.textContent = `
    .home-menu-card.touch-glow {
        transform:
            translateY(-5px)
            scale(1.02);
        box-shadow:
            0 0 22px
            rgba(193, 155, 255, 0.6),
            0 0 38px
            rgba(255, 174, 218, 0.5),
            0 0 55px
            rgba(255, 228, 128, 0.35);
    }
    .image-error {
        opacity: 0.25;
    }
`;
document.head.appendChild(
    touchStyle
);
