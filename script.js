document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ MESSAGES
       ข้อความจะพิมพ์ทีละบรรทัด
       และจะไม่ถูกลบหลังพิมพ์เสร็จ
    ====================================================== */
    const messages = [
        "สวัสดี 𐔌՞ ܸ.ˬ.ܸ՞𐦯",
        "เธอคงเป็น… พอร์ช !?!",
        "ใช่ไหม… ^_____^",
        "งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ . .՞𐦯",
        "รู้ไหม…",
        "แฟนของเธอตั้งใจทำเว็บไซต์นี้เพื่อเธอมาก ๆ เลยนะ ૮₍ ˃ ⤙ ˂ ₎ა",
        "ทุกภาพ ทุกความทรงจำ และทุกข้อความในนี้ ล้วนเป็นสิ่งที่อิ๊งค์ตั้งใจเก็บเอาไว้ เพื่อให้เธอได้กลับมายิ้มกับมันอีกครั้ง ‹𝟹",
        "ขอบคุณที่เข้ามาในชีวิตของอิ๊งค์นะ ૮₍ ˶ᵔ ᕽ ᵔ˶ ₎ა",
        "พร้อมแล้ว… ไปเปิดสมุดความทรงจำของเรากัน ໒꒰՞ ܸ. .ܸ՞꒱ა"
    ];
    const typingLines =
        document.querySelectorAll(
            ".typing-line"
        );
    const openButton =
        document.getElementById(
            "indexOpen"
        );
    let currentLine = 0;
    /* =====================================================
       ✦ HIDE BUTTON
    ====================================================== */
    if (openButton) {
        openButton.style.opacity = "0";
        openButton.style.pointerEvents =
            "none";
    }
    /* =====================================================
       ✦ TYPE ONE LINE
    ====================================================== */
    function typeLine() {
        /* -----------------------------------------------
           ทุกข้อความพิมพ์ครบแล้ว
        ------------------------------------------------ */
        if (
            currentLine >=
            messages.length
        ) {
            showOpenButton();
            return;
        }
        const element =
            typingLines[currentLine];
        const text =
            messages[currentLine];
        let characterIndex = 0;
        /*
         * สำคัญ:
         * เริ่มจากข้อความว่าง
         * แต่ไม่เคยลบข้อความของบรรทัดก่อนหน้า
         */
        element.textContent = "";
        element.classList.add(
            "typing-active"
        );
        function typeCharacter() {
            if (
                characterIndex <
                text.length
            ) {
                element.textContent +=
                    text.charAt(
                        characterIndex
                    );
                characterIndex++;
                setTimeout(
                    typeCharacter,
                    45
                );
            } else {
                /*
                 * ลบบอกว่า "กำลังพิมพ์"
                 * แต่ข้อความยังคงอยู่
                 */
                element.classList.remove(
                    "typing-active"
                );
                currentLine++;
                /*
                 * รอเล็กน้อย
                 * แล้วค่อยพิมพ์บรรทัดถัดไป
                 */
                setTimeout(
                    typeLine,
                    500
                );
            }
        }
        typeCharacter();
    }
    /* =====================================================
       ✦ SHOW OPEN BUTTON
    ====================================================== */
    function showOpenButton() {
        if (!openButton) {
            return;
        }
        openButton.style.pointerEvents =
            "auto";
        openButton.style.animation =
            "indexButtonAppear 1s ease forwards";
    }
    /* =====================================================
       ✦ START TYPING
    ====================================================== */
    setTimeout(
        typeLine,
        1000
    );
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
                href.startsWith("mailto:")
            ) {
                return;
            }
            /*
             * ป้องกันการเปลี่ยนหน้าทันที
             */
            event.preventDefault();
            document.body.classList.add(
                "page-leaving"
            );
            setTimeout(
                () => {
                    window.location.href =
                        href;
                },
                500
            );
        }
    );
});
