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
            "ขอบคุณที่เข้ามาในชีวิตของอิ๊งค์นะ ૮₍ ˶ᵔ ᵕ ᔭ ˶₎ა",
            "ตั้งแต่วันที่เราได้รู้จักกัน",
            "เรื่องราวเล็ก ๆ ของเราก็ค่อย ๆ กลายเป็น",
            "ความทรงจำที่อิ๊งค์อยากเก็บเอาไว้มากที่สุด",
            "และวันนี้…",
            "ถ้าเธอพร้อมแล้ว",
            "ไปเปิดสมุดความทรงจำของเรากันนะ ໒꒰՞ ܸ. .ܸ՞꒱ა"
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
