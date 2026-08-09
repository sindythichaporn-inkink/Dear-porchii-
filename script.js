/* =========================================================
   ✦ GLOBAL PAGE TRANSITION
========================================================= */

document.addEventListener("click", (event) => {

    const link = event.target.closest("a");

    if (!link) {
        return;
    }

    const href = link.getAttribute("href");

    if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("javascript:")
    ) {
        return;
    }

    event.preventDefault();

    document.body.classList.add("page-leaving");

    setTimeout(() => {

        window.location.href = href;

    }, 450);

});



/* =========================================================
   ✦ INDEX PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const indexPage =
        document.querySelector(".index-page");

    if (!indexPage) {
        return;
    }


    /* =====================================================
       ✦ WELCOME MESSAGE
    ====================================================== */

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


    const lines =
        document.querySelectorAll(
            ".typing-line"
        );


    const openButton =
        document.getElementById(
            "indexOpen"
        );


    let currentLine = 0;


    /* =====================================================
       ✦ TYPE ONE LINE
    ====================================================== */

    function typeLine() {

        if (currentLine >= messages.length) {

            showOpenButton();

            return;
        }


        const line =
            lines[currentLine];

        if (!line) {
            return;
        }


        const text =
            messages[currentLine];


        line.textContent = "";

        line.classList.add(
            "typing-active"
        );


        let character = 0;


        const typing =
            setInterval(() => {

                line.textContent +=
                    text[character];

                character++;


                if (
                    character >=
                    text.length
                ) {

                    clearInterval(
                        typing
                    );

                    line.classList.remove(
                        "typing-active"
                    );


                    currentLine++;


                    setTimeout(
                        typeLine,
                        450
                    );

                }

            }, 55);

    }


    /* =====================================================
       ✦ SHOW BUTTON
    ====================================================== */

    function showOpenButton() {

        if (!openButton) {
            return;
        }


        openButton.style.pointerEvents =
            "auto";

        openButton.style.animation =
            "indexFadeUp 0.9s ease forwards";


        openButton.style.animationDelay =
            "0.2s";

    }


    /* =====================================================
       ✦ START
    ====================================================== */

    setTimeout(() => {

        typeLine();

    }, 900);

});
