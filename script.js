/* =========================================================
   ✦ TYPING EFFECT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const lines =
        document.querySelectorAll(".typing-line");

    const messages = [

        "สวัสดี 𐔌՞ ܸ.ˬ.ܸ՞𐦯",

        "เธอคงเป็น… พอร์ช !?!",

        "ใช่ไหม… ^_____^",

        "งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ . .՞𐦯",

        "รู้ไหม…",

        "แฟนของเธอตั้งใจทำเว็บไซต์นี้เพื่อเธอมาก ๆ เลยนะ ૮₍ ˃ ⤙ ˂ ₎ა",

        "ทุกภาพ ทุกความทรงจำ และทุกข้อความในนี้",

        "ล้วนเป็นสิ่งที่อิ๊งค์ตั้งใจเก็บเอาไว้",

        "เพื่อให้เธอได้กลับมายิ้มกับมันอีกครั้ง ‹𝟹"

    ];


    let lineIndex = 0;


    function typeLine() {

        if (lineIndex >= messages.length) {

            const button =
                document.querySelector(".index-open");

            if (button) {

                button.style.pointerEvents =
                    "auto";

                button.style.animation =
                    "indexButtonAppear 1s ease forwards";
            }

            return;
        }


        const line =
            lines[lineIndex];

        if (!line) return;


        const text =
            messages[lineIndex];


        let charIndex = 0;


        line.classList.add(
            "typing-active"
        );


        const typing =
            setInterval(() => {

                line.textContent =
                    text.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                if (
                    charIndex >=
                    text.length
                ) {

                    clearInterval(
                        typing
                    );

                    line.classList.remove(
                        "typing-active"
                    );

                    lineIndex++;


                    setTimeout(
                        typeLine,
                        250
                    );
                }

            }, 45);

    }


    typeLine();

});


/* =========================================================
   ✦ PAGE TRANSITION
========================================================= */

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
         * ไม่แตะลิงก์ภายนอก
         */

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            href.startsWith("javascript:")
        ) {
            return;
        }


        /*
         * ป้องกันการกดซ้ำ
         */

        event.preventDefault();


        /*
         * เริ่มเอฟเฟกต์จางออก
         */

        document.body.classList.add(
            "page-leaving"
        );


        /*
         * รอให้ animation จบ
         * แล้วค่อยเปลี่ยนหน้า
         */

        setTimeout(
            () => {

                window.location.href =
                    href;

            },
            700
        );

    }
);
