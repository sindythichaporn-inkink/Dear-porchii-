document.addEventListener(“DOMContentLoaded”, () => {

/* =====================================================
   PAGE LOAD FADE
===================================================== */
document.body.classList.remove("page-leaving");
/* =====================================================
   PAGE TRANSITION
   กดลิงก์ → จางออก → เปลี่ยนหน้า
===================================================== */
const pageLinks = document.querySelectorAll(
    'a[href$=".html"]'
);
pageLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");
        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            this.target === "_blank"
        ) {
            return;
        }
        event.preventDefault();
        document.body.classList.add(
            "page-leaving"
        );
        setTimeout(() => {
            window.location.href = href;
        }, 450);
    });
});
/* =====================================================
   FULL TYPING MESSAGE — INDEX
===================================================== */
const typing =
    document.getElementById("typingText");
if (typing) {
    const messages = [
        "สวัสดี 𐔌՞ ܸ.ˬ.ܸ՞𐦯",
        "พอร์ช!?!",
        "ใช่ไหม… ^_____^",
        "งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ ܸ. .ܸ՞𐦯",
        "รู้ไหม…",
        "แฟนของเธอตั้งใจทำเว็บไซต์นี้",
        "เพื่อเธอมาก ๆ เลยนะ ૮₍ ˃ ⤙ ˂ ₎ა",
        "ทุกภาพ ทุกความทรงจำ",
        "และทุกข้อความในนี้",
        "ล้วนเป็นสิ่งที่อิ๊งค์ตั้งใจเก็บเอาไว้",
        "เพื่อให้เธอได้กลับมายิ้มกับมันอีกครั้ง ‹𝟹"
    ];
    typing.innerHTML = "";
    let messageIndex = 0;
    let characterIndex = 0;
    function createLine() {
        const line =
            document.createElement("div");
        line.className =
            "typing-line";
        typing.appendChild(line);
        return line;
    }
    let currentLine =
        createLine();
    function typeWriter() {
        if (
            messageIndex >=
            messages.length
        ) {
            showButton();
            return;
        }
        const message =
            messages[messageIndex];
        if (
            characterIndex <
            message.length
        ) {
            currentLine.textContent +=
                message.charAt(
                    characterIndex
                );
            characterIndex++;
            setTimeout(
                typeWriter,
                65
            );
            return;
        }
        messageIndex++;
        characterIndex = 0;
        if (
            messageIndex <
            messages.length
        ) {
            currentLine =
                createLine();
            setTimeout(
                typeWriter,
                250
            );
        } else {
            showButton();
        }
    }
    function showButton() {
        const button =
            document.getElementById(
                "openStory"
            );
        if (!button) {
            return;
        }
        setTimeout(() => {
            button.classList.add(
                "show-button"
            );
        }, 500);
    }
    setTimeout(
        typeWriter,
        700
    );
}
/* =====================================================
   SCROLL REVEAL
===================================================== */
const revealElements =
    document.querySelectorAll(
        ".reveal"
    );
if (revealElements.length) {
    const observer =
        new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (
                        entry.isIntersecting
                    ) {
                        entry.target.classList.add(
                            "visible"
                        );
                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.12
            }
        );
    revealElements.forEach(element => {
        observer.observe(element);
    });
}
/* =====================================================
   IMAGE FALLBACK
===================================================== */
document
    .querySelectorAll("img")
    .forEach(img => {
        img.addEventListener(
            "error",
            () => {
                img.classList.add(
                    "image-missing"
                );
            }
        );
    });

});
