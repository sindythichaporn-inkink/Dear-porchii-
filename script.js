<script>
document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ✦ TYPING MESSAGE
    ====================================================== */
    const messages = [
        "สวัสดี 𐔌՞ ܸ.ˬ.ܸ՞𐦯",
        "เธอคงเป็น… พอร์ช !?!",
        "ใช่ไหม… ^_____^",
        "งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ . .՞𐦯",
        "รู้ไหม…",
        "แฟนของเธอตั้งใจทำเว็บไซต์นี้เพื่อเธอมาก ๆ เลยนะ ૮₍ ˃ ⤙ ˂ ₎ა",
        "ทุกภาพ ทุกความทรงจำ และทุกข้อความในนี้ ล้วนเป็นสิ่งที่อิ๊งค์ตั้งใจเก็บเอาไว้ เพื่อให้เธอได้กลับมายิ้มกับมันอีกครั้ง ‹𝟹",
        "ขอบคุณที่เข้ามาในชีวิตของอิ๊งค์นะ ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა",
        "พร้อมแล้ว… ไปเปิดสมุดความทรงจำของเรากัน ໒꒰՞ ܸ. .ܸ՞꒱ა"
    ];
    const typingLines =
        document.querySelectorAll(".typing-line");
    let currentLine = 0;
    /* =====================================================
       ✦ TYPE EACH LINE
       พิมพ์เสร็จแล้วข้อความจะไม่หาย
    ====================================================== */
    function typeLine() {
        if (currentLine >= messages.length) {
            return;
        }
        const element =
            typingLines[currentLine];
        const text =
            messages[currentLine];
        let characterIndex = 0;
        element.classList.add(
            "typing-active"
        );
        function typeCharacter() {
            if (characterIndex < text.length) {
                element.textContent +=
                    text.charAt(characterIndex);
                characterIndex++;
                setTimeout(
                    typeCharacter,
                    45
                );
            } else {
                /*
                 * สำคัญ:
                 * ไม่ลบข้อความหลังพิมพ์เสร็จ
                 */
                element.classList.remove(
                    "typing-active"
                );
                currentLine++;
                setTimeout(
                    typeLine,
                    450
                );
            }
        }
        typeCharacter();
    }
    /* =====================================================
       ✦ START
    ====================================================== */
    setTimeout(
        typeLine,
        900
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
            /*
             * ไม่ทำ transition กับ
             * ลิงก์ภายนอก / anchor / email
             */
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
                450
            );
        }
    );
});
</script>
