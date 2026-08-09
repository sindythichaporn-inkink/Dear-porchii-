document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ INDEX TYPING MESSAGE
    ====================================================== */
    const typingLines =
        document.querySelectorAll(".typing-line");
    const openButton =
        document.getElementById("indexOpen");
    const messages = [
        "สวัสดี  𐔌՞ ܸ.ˬ.ܸ՞𐦯",
        "เธอคงเป็น… พอร์ช !?!",
        "ใช่ไหม… ^_____^",
        "งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ . .՞𐦯",
        "รู้ไหม…",
        "แฟนของเธอตั้งใจทำเว็บไซต์นี้เพื่อเธอมาก ๆ เลยนะ ૮₍ ˃ ⤙ ˂ ₎ა",
        "ทุกภาพ ทุกความทรงจำ และทุกข้อความในนี้",
        "ล้วนเป็นสิ่งที่อิ๊งค์ตั้งใจเก็บเอาไว้",
        "เพื่อให้เธอได้กลับมายิ้มกับมันอีกครั้ง ♡"
    ];
    let lineIndex = 0;
    let charIndex = 0;
    function typeNextCharacter() {
        if (lineIndex >= messages.length) {
            if (openButton) {
                setTimeout(() => {
                    openButton.classList.add("show");
                }, 500);
            }
            return;
        }
        const currentLine =
            typingLines[lineIndex];
        const currentText =
            messages[lineIndex];
        currentLine.classList.add(
            "typing-active"
        );
        if (charIndex < currentText.length) {
            currentLine.textContent +=
                currentText.charAt(charIndex);
            charIndex++;
            setTimeout(
                typeNextCharacter,
                45
            );
        } else {
            currentLine.classList.remove(
                "typing-active"
            );
            lineIndex++;
            charIndex = 0;
            setTimeout(
                typeNextCharacter,
                300
            );
        }
    }
    /* เริ่มพิมพ์ */
    setTimeout(
        typeNextCharacter,
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
            event.preventDefault();
            document.body.classList.add(
                "page-leaving"
            );
            setTimeout(
                () => {
                    window.location.href =
                        href;
                },
                800
            );
        }
    );
});
