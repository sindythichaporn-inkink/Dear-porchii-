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
   ✦ DEAR PORCH — SHARED SCRIPT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ PAGE FADE IN
    ====================================================== */
    document.body.style.opacity = "0";
    requestAnimationFrame(() => {
        document.body.style.transition =
            "opacity 0.7s ease";
        document.body.style.opacity = "1";
    });
    /* =====================================================
       ✦ HOME — TYPING LOVE MESSAGE
    ====================================================== */
    const messageLines =
        document.querySelectorAll(
            ".typing-message-line"
        );
    if (messageLines.length > 0) {
        let currentLine = 0;
        function startTyping() {
            if (
                currentLine >=
                messageLines.length
            ) {
                return;
            }
            const line =
                messageLines[currentLine];
            const text =
                line.getAttribute(
                    "data-text"
                ) || "";
            line.textContent = "";
            let charIndex = 0;
            function typeCharacter() {
                if (
                    charIndex <
                    text.length
                ) {
                    line.textContent +=
                        text.charAt(
                            charIndex
                        );
                    charIndex++;
                    setTimeout(
                        typeCharacter,
                        55
                    );
                } else {
                    currentLine++;
                    setTimeout(
                        startTyping,
                        450
                    );
                }
            }
            typeCharacter();
        }
        setTimeout(
            startTyping,
            800
        );
    }
    /* =====================================================
       ✦ HOME — MENU ANIMATION
    ====================================================== */
    const menuCards =
        document.querySelectorAll(
            ".home-menu-card"
        );
    menuCards.forEach(
        (card, index) => {
            card.style.opacity = "0";
            card.style.transform =
                "translateY(25px)";
            setTimeout(
                () => {
                    card.style.transition =
                        "opacity 0.65s ease, transform 0.65s ease";
                    card.style.opacity = "1";
                    card.style.transform =
                        "translateY(0)";
                },
                650 + index * 110
            );
        }
    );
    /* =====================================================
       ✦ HOME — PHOTO STACK
    ====================================================== */
    const stack =
        document.getElementById(
            "photoStack"
        );
    if (stack) {
        const stackPhotos =
            stack.querySelectorAll(
                ".stack-photo"
            );
        /* -----------------------------------------------
           เปิด / คลี่รูป
        ------------------------------------------------ */
        stack.addEventListener(
            "click",
            () => {
                stack.classList.toggle(
                    "opened"
                );
            }
        );
        /* =================================================
           ✦ PHOTO VIEWER
        ================================================= */
        const photos = [
            "images/home/photo1.jpg",
            "images/home/photo2.jpg",
            "images/home/photo3.jpg",
            "images/home/photo4.jpg"
        ];
        let currentPhoto = 0;
        function openPhoto(index) {
            currentPhoto =
                index;
            const viewer =
                document.createElement(
                    "div"
                );
            viewer.className =
                "photo-viewer";
            viewer.innerHTML = `
                <button
                    class="photo-viewer-close"
                    type="button"
                    aria-label="ปิด"
                >
                    ×
                </button>
                <button
                    class="photo-viewer-prev"
                    type="button"
                    aria-label="รูปก่อนหน้า"
                >
                    ‹
                </button>
                <div class="photo-viewer-content">
                    <img
                        class="photo-viewer-image"
                        src="${photos[currentPhoto]}"
                        alt="Our memory"
                    >
                    <p class="photo-viewer-count">
                        ${currentPhoto + 1} / ${photos.length}
                    </p>
                </div>
                <button
                    class="photo-viewer-next"
                    type="button"
                    aria-label="รูปถัดไป"
                >
                    ›
                </button>
            `;
            document.body.appendChild(
                viewer
            );
            requestAnimationFrame(
                () => {
                    viewer.classList.add(
                        "show"
                    );
                }
            );
            /* ---------------------------------------------
               ปิด
            ---------------------------------------------- */
            const closeButton =
                viewer.querySelector(
                    ".photo-viewer-close"
                );
            closeButton.addEventListener(
                "click",
                () => {
                    closeViewer(
                        viewer
                    );
                }
            );
            /* ---------------------------------------------
               ก่อนหน้า
            ---------------------------------------------- */
            const prevButton =
                viewer.querySelector(
                    ".photo-viewer-prev"
                );
            prevButton.addEventListener(
                "click",
                (event) => {
                    event.stopPropagation();
                    currentPhoto =
                        (
                            currentPhoto -
                            1 +
                            photos.length
                        ) %
                        photos.length;
                    updatePhoto(
                        viewer
                    );
                }
            );
            /* ---------------------------------------------
               ถัดไป
            ---------------------------------------------- */
            const nextButton =
                viewer.querySelector(
                    ".photo-viewer-next"
                );
            nextButton.addEventListener(
                "click",
                (event) => {
                    event.stopPropagation();
                    currentPhoto =
                        (
                            currentPhoto +
                            1
                        ) %
                        photos.length;
                    updatePhoto(
                        viewer
                    );
                }
            );
            /* ---------------------------------------------
               คลิกพื้นหลังเพื่อปิด
            ---------------------------------------------- */
            viewer.addEventListener(
                "click",
                (event) => {
                    if (
                        event.target ===
                        viewer
                    ) {
                        closeViewer(
                            viewer
                        );
                    }
                }
            );
        }
        /* =================================================
           ✦ UPDATE PHOTO
        ================================================== */
        function updatePhoto(
            viewer
        ) {
            const image =
                viewer.querySelector(
                    ".photo-viewer-image"
                );
            const count =
                viewer.querySelector(
                    ".photo-viewer-count"
                );
            image.classList.remove(
                "photo-changing"
            );
            void image.offsetWidth;
            image.src =
                photos[currentPhoto];
            count.textContent =
                `${currentPhoto + 1} / ${photos.length}`;
            image.classList.add(
                "photo-changing"
            );
        }
        /* =================================================
           ✦ CLOSE VIEWER
        ================================================== */
        function closeViewer(
            viewer
        ) {
            viewer.classList.remove(
                "show"
            );
            setTimeout(
                () => {
                    viewer.remove();
                },
                350
            );
        }
        /* =================================================
           ✦ CLICK EACH PHOTO
        ================================================== */
        stackPhotos.forEach(
            (photo, index) => {
                photo.addEventListener(
                    "click",
                    (event) => {
                        event.stopPropagation();
                        openPhoto(
                            index
                        );
                    }
                );
            }
        );
        /* =================================================
           ✦ KEYBOARD
        ================================================= */
        document.addEventListener(
            "keydown",
            (event) => {
                const viewer =
                    document.querySelector(
                        ".photo-viewer"
                    );
                if (!viewer) {
                    return;
                }
                if (
                    event.key ===
                    "Escape"
                ) {
                    closeViewer(
                        viewer
                    );
                }
                if (
                    event.key ===
                    "ArrowLeft"
                ) {
                    currentPhoto =
                        (
                            currentPhoto -
                            1 +
                            photos.length
                        ) %
                        photos.length;
                    updatePhoto(
                        viewer
                    );
                }
                if (
                    event.key ===
                    "ArrowRight"
                ) {
                    currentPhoto =
                        (
                            currentPhoto +
                            1
                        ) %
                        photos.length;
                    updatePhoto(
                        viewer
                    );
                }
            }
        );
    }
    /* =====================================================
       ✦ PAGE TRANSITION
    ====================================================== */
    let leaving = false;
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
            setTimeout(
                () => {
                    window.location.href =
                        href;
                },
                700
            );
        }
    );
    /* =====================================================
       ✦ IMAGE FALLBACK
    ====================================================== */
    const images =
        document.querySelectorAll(
            "img"
        );
    images.forEach(
        (image) => {
            image.addEventListener(
                "error",
                () => {
                    image.classList.add(
                        "image-error"
                    );
                }
            );
        }
    );
    /* =====================================================
       ✦ MENU TOUCH EFFECT
    ====================================================== */
    const touchCards =
        document.querySelectorAll(
            ".home-menu-card"
        );
    touchCards.forEach(
        (card) => {
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
                    setTimeout(
                        () => {
                            card.classList.remove(
                                "touch-glow"
                            );
                        },
                        180
                    );
                },
                {
                    passive: true
                }
            );
        }
    );
});
/* =========================================================
   ✦ EXTRA TOUCH STYLE
========================================================= */
const touchStyle =
    document.createElement(
        "style"
    );
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
