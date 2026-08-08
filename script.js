// ========================================
// DEAR PORCHII — SCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MUSIC
    // ========================================

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    let musicPlaying = false;

    if (music && musicButton) {

        musicButton.addEventListener("click", () => {

            if (!musicPlaying) {

                music.play()
                    .then(() => {

                        musicPlaying = true;

                        musicButton.innerHTML =
                            "♫ &nbsp; Our song is playing ♡";

                    })
                    .catch(() => {

                        musicButton.innerHTML =
                            "♫ &nbsp; ใส่เพลงใน music/song.mp3 ก่อนนะ";

                    });

            } else {

                music.pause();

                musicPlaying = false;

                musicButton.innerHTML =
                    "♫ &nbsp; Play our song";

            }

        });

    }


    // ========================================
    // TYPING EFFECT
    // ========================================

    const typingText = document.querySelector(".typing");

    if (typingText) {

        const text =
            typingText.dataset.text ||
            "ยินดีต้อนรับเข้าสู่สมุดความทรงจำของอิ๊งค์กับพอร์ช ♡";

        typingText.innerHTML = "";

        const textElement = document.createElement("span");
        const cursor = document.createElement("span");

        cursor.className = "cursor";

        typingText.appendChild(textElement);
        typingText.appendChild(cursor);

        let index = 0;

        function typeText() {

            if (index < text.length) {

                textElement.textContent += text.charAt(index);

                index++;

                setTimeout(typeText, 75);

            }

        }

        setTimeout(typeText, 700);

    }


    // ========================================
    // OPEN BUTTON
    // ========================================

    const enterButton = document.getElementById("enterButton");

    if (enterButton) {

        enterButton.addEventListener("click", () => {

            const menu = document.getElementById("menu");

            if (menu) {

                menu.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // ========================================
    // FLOATING MENU
    // ========================================

    const floatingMenu =
        document.getElementById("floatingMenu");

    if (floatingMenu) {

        floatingMenu.addEventListener("click", () => {

            const menu = document.getElementById("menu");

            if (menu) {

                menu.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // ========================================
    // REVEAL EFFECT
    // ========================================

    const revealElements = document.querySelectorAll(
        ".reveal, .story-card, .timeline-item, .family-card, .about-card, .reason, .photo-frame, .love-message"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // ========================================
    // GLITTER
    // ========================================

    function createGlitter() {

        const glitter = document.createElement("span");

        glitter.className = "glitter";

        glitter.style.left =
            Math.random() * 100 + "vw";

        glitter.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        glitter.style.animationDelay =
            Math.random() * 5 + "s";

        const size =
            3 + Math.random() * 6;

        glitter.style.width = size + "px";
        glitter.style.height = size + "px";

        document.body.appendChild(glitter);

        setTimeout(() => {

            glitter.remove();

        }, 15000);

    }


    // สร้าง glitter ต่อเนื่อง
    setInterval(createGlitter, 350);


    // ========================================
    // CLICK SPARKLE
    // ========================================

    document.addEventListener("click", event => {

        for (let i = 0; i < 8; i++) {

            const sparkle =
                document.createElement("span");

            sparkle.className = "floating-heart";

            sparkle.textContent =
                ["✦", "✧", "♡", "⋆"][Math.floor(Math.random() * 4)];

            sparkle.style.left =
                event.clientX + "px";

            sparkle.style.top =
                event.clientY + "px";

            sparkle.style.setProperty(
                "--x",
                (Math.random() * 100 - 50) + "px"
            );

            document.body.appendChild(sparkle);

            setTimeout(() => {

                sparkle.remove();

            }, 1400);

        }

    });


    // ========================================
    // IMAGE FALLBACK
    // ========================================

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            img.classList.add("image-missing");

        });

    });


    // ========================================
    // BUTTON PRESS EFFECT
    // ========================================

    document.querySelectorAll(
        "button, .memory-btn, .next-btn"
    ).forEach(button => {

        button.addEventListener("click", () => {

            button.animate(
                [
                    {
                        transform: "scale(1)"
                    },
                    {
                        transform: "scale(0.92)"
                    },
                    {
                        transform: "scale(1.03)"
                    },
                    {
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 350,
                    easing: "ease-out"
                }
            );

        });

    });


    // ========================================
    // LINK EFFECT
    // ========================================

    document.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            link.style.transform = "scale(0.96)";

            setTimeout(() => {

                link.style.transform = "";

            }, 180);

        });

    });

});
