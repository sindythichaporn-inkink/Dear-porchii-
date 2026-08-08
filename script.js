/* =========================================================
   ✦ DEAR PORCH — MAIN SCRIPT
========================================================= */
/* =========================================================
   ✦ PAGE LOAD
========================================================= */
document.addEventListener(
    "DOMContentLoaded",
    () => {
        /* -------------------------------------------------
           ✦ FADE IN
        ------------------------------------------------- */
        document.body.style.opacity = "0";
        requestAnimationFrame(() => {
            document.body.style.transition =
                "opacity 0.8s ease";
            document.body.style.opacity =
                "1";
        });
        /* -------------------------------------------------
           ✦ TYPEWRITER
        ------------------------------------------------- */
        const lines =
            document.querySelectorAll(
                ".typewriter-line"
            );
        let lineIndex = 0;
        /*
         * ความเร็วในการพิมพ์แต่ละตัว
         */
        const typingSpeed = 55;
        /*
         * เวลาพักก่อนเริ่มประโยคถัดไป
         */
        const lineDelay = 450;
        /*
         * เวลาก่อนเริ่มพิมพ์
         */
        const startDelay = 1000;
        function typeLine() {
            /*
             * ถ้าพิมพ์ครบทุกประโยคแล้ว
             */
            if (
                lineIndex >=
                lines.length
            ) {
                showOpenButton();
                return;
            }
            const currentLine =
                lines[lineIndex];
            const text =
                currentLine.dataset.text || "";
            /*
             * ล้างข้อความก่อนเริ่ม
             */
            currentLine.textContent = "";
            /*
             * ทำให้บรรทัดนี้มองเห็น
             */
            currentLine.classList.add(
                "typing"
            );
            let characterIndex = 0;
            function typeCharacter() {
                /*
                 * ถ้ายังพิมพ์ไม่ครบ
                 */
                if (
                    characterIndex <
                    text.length
                ) {
                    currentLine.textContent +=
                        text.charAt(
                            characterIndex
                        );
                    characterIndex++;
                    setTimeout(
                        typeCharacter,
                        typingSpeed
                    );
                    return;
                }
                /*
                 * พิมพ์ประโยคนี้เสร็จแล้ว
                 */
                currentLine.classList.remove(
                    "typing"
                );
                lineIndex++;
                setTimeout(
                    typeLine,
                    lineDelay
                );
            }
            typeCharacter();
        }
        /* -------------------------------------------------
           ✦ OPEN BOOK BUTTON
        ------------------------------------------------- */
        function showOpenButton() {
            const button =
                document.getElementById(
                    "openBook"
                );
            if (!button) {
                return;
            }
            setTimeout(
                () => {
                    button.classList.add(
                        "show-button"
                    );
                },
                300
            );
        }
        /* -------------------------------------------------
           ✦ START TYPEWRITER
        ------------------------------------------------- */
        setTimeout(
            typeLine,
            startDelay
        );
        /* =================================================
           ✦ PAGE TRANSITION
        ================================================== */
        document.addEventListener(
            "click",
            (event) => {
                const link =
                    event.target.closest("a");
                /*
                 * ไม่ใช่ลิงก์
                 */
                if (!link) {
                    return;
                }
                const href =
                    link.getAttribute(
                        "href"
                    );
                /*
                 * ไม่เปลี่ยนหน้าในกรณีเหล่านี้
                 */
                if (
                    !href ||
                    href.startsWith("#") ||
                    href.startsWith("http") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("tel:")
                ) {
                    return;
                }
                /*
                 * ป้องกันการเปลี่ยนหน้าทันที
                 */
                event.preventDefault();
                /*
                 * Fade out
                 */
                document.body.classList.add(
                    "page-leaving"
                );
                /*
                 * เปลี่ยนหน้าเมื่อ animation จบ
                 */
                setTimeout(
                    () => {
                        window.location.href =
                            href;
                    },
                    450
                );
            }
        );
    }
);
