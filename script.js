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


    const openButton =
        document.querySelector(".index-open");


    let currentLine = 0;



    /* =====================================================
       ✦ HIDE OPEN BUTTON
       ปุ่มจะยังไม่สามารถกดได้
    ====================================================== */

    if (openButton) {

        openButton.style.opacity = "0";

        openButton.style.pointerEvents =
            "none";

    }



    /* =====================================================
       ✦ TYPE MESSAGE
       พิมพ์ทีละบรรทัดและข้อความจะไม่หาย
    ====================================================== */

    function typeLine() {

        if (
            currentLine >=
            messages.length
        ) {

            showOpenButton();

            return;

        }


        const element =
            typingLines[currentLine];


        if (!element) {

            currentLine++;

            typeLine();

            return;

        }


        const text =
            messages[currentLine];


        let characterIndex = 0;


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
                    text.charAt(characterIndex);


                characterIndex++;


                setTimeout(
                    typeCharacter,
                    45
                );

            }

            else {

                /*
                 * ข้อความที่พิมพ์เสร็จแล้ว
                 * จะค้างอยู่บนหน้าเว็บ
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
       ✦ SHOW OPEN BUTTON
       แสดงปุ่มเมื่อพิมพ์ครบทุกข้อความ
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
             * ไม่ทำกับลิงก์พิเศษ
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
