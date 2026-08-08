document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DEAR PORCH — MAIN JAVASCRIPT
       ===================================================== */

    "use strict";


    /* =====================================================
       01 — PAGE LOAD
       ===================================================== */

    document.body.classList.add("page-ready");


    /* =====================================================
       02 — GLITTER / SPARKLES
       ===================================================== */

    const glitterContainer =
        document.querySelector(".glitter-container");

    if (glitterContainer) {

        const glitterSymbols = [
            "✦",
            "✧",
            "⋆",
            "˚",
            "♡",
            "✿",
            "𐙚"
        ];

        for (let i = 0; i < 35; i++) {

            const glitter =
                document.createElement("span");

            glitter.className = "glitter";

            glitter.textContent =
                glitterSymbols[
                    Math.floor(
                        Math.random() *
                        glitterSymbols.length
                    )
                ];

            glitter.style.left =
                Math.random() * 100 + "%";

            glitter.style.top =
                Math.random() * 100 + "%";

            glitter.style.setProperty(
                "--drift",
                (Math.random() * 100 - 50) + "px"
            );

            glitter.style.animationDuration =
                (6 + Math.random() * 8) + "s";

            glitter.style.animationDelay =
                (-Math.random() * 10) + "s";

            glitterContainer.appendChild(
                glitter
            );
        }
    }


    /* =====================================================
       03 — HOME TYPING
       ===================================================== */

    const typingText =
        document.getElementById("typingText");

    const typingLine =
        document.getElementById("typingLine");


    /*
       หน้าแรกจะพิมพ์ทีละประโยค
       เพื่อไม่ให้ข้อความหายหรือหยุดกลางคัน
    */

    const welcomeLines = [
        "สวัสดี 𐔌՞ ܸ.ˬ.ܸ՞𐦯",
        "เธอคงเป็น…",
        "พอร์ช!?!",
        "ใช่ไหม… ^_____^",
        "งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ ܸ. .ܸ՞𐦯"
    ];


    async function typeText(
        element,
        text,
        speed = 65
    ) {

        if (!element) return;

        element.textContent = "";

        for (
            let i = 0;
            i < text.length;
            i++
        ) {

            element.textContent +=
                text.charAt(i);

            await new Promise(
                resolve =>
                    setTimeout(
                        resolve,
                        speed
                    )
            );
        }
    }


    async function playWelcomeTyping() {

        if (!typingText) return;

        typingText.textContent = "";

        for (
            let i = 0;
            i < welcomeLines.length;
            i++
        ) {

            await typeText(
                typingText,
                welcomeLines[i],
                i === 0 ? 55 : 75
            );

            await new Promise(
                resolve =>
                    setTimeout(
                        resolve,
                        500
                    )
            );
        }

        if (typingLine) {

            typingLine.classList.add(
                "typing-finished"
            );
        }

        const startButton =
            document.getElementById(
                "openStory"
            );

        if (startButton) {

            setTimeout(() => {

                startButton.classList.add(
                    "show-button"
                );

            }, 300);
        }
    }


    if (typingText) {

        setTimeout(() => {

            playWelcomeTyping();

        }, 500);
    }


    /* =====================================================
       04 — WELCOME → MENU
       ===================================================== */

    const openStory =
        document.getElementById(
            "openStory"
        );

    const welcome =
        document.getElementById(
            "welcome"
        );

    const bookMenu =
        document.getElementById(
            "bookMenu"
        );


    if (
        openStory &&
        welcome &&
        bookMenu
    ) {

        openStory.addEventListener(
            "click",
            () => {

                if (
                    openStory.dataset.opening ===
                    "true"
                ) {
                    return;
                }

                openStory.dataset.opening =
                    "true";


                openStory.classList.add(
                    "clicked"
                );


                welcome.classList.add(
                    "hide"
                );


                setTimeout(() => {

                    welcome.style.display =
                        "none";

                    bookMenu.style.display =
                        "flex";


                    requestAnimationFrame(
                        () => {

                            bookMenu.classList.add(
                                "show"
                            );

                        }
                    );

                    openStory.dataset.opening =
                        "false";

                }, 650);
            }
        );
    }


    /* =====================================================
       05 — MENU → PAGE
       ===================================================== */

    const menuLinks =
        document.querySelectorAll(
            "[data-page]"
        );


    menuLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    link.getAttribute(
                        "data-page"
                    );

                if (!target) return;

                /*
                   ถ้าเป็นลิงก์จริง เช่น
                   timeline.html
                   letter.html
                   reasons.html

                   ให้ fade ก่อนเปลี่ยนหน้า
                */

                if (
                    target.endsWith(".html")
                ) {

                    event.preventDefault();

                    document.body.classList.add(
                        "page-leaving"
                    );

                    setTimeout(() => {

                        window.location.href =
                            target;

                    }, 450);
                }
            }
        );
    });


    /* =====================================================
       06 — NORMAL LINKS
       ===================================================== */

    document
        .querySelectorAll(
            "a[href]"
        )
        .forEach(link => {

            const href =
                link.getAttribute(
                    "href"
                );

            if (
                !href ||
                href === "#" ||
                href.startsWith(
                    "javascript:"
                ) ||
                href.startsWith(
                    "mailto:"
                ) ||
                href.startsWith(
                    "tel:"
                ) ||
                href.startsWith(
                    "http"
                )
            ) {
                return;
            }


            link.addEventListener(
                "click",
                event => {

                    /*
                       ไม่ทำงานซ้ำกับ data-page
                    */

                    if (
                        link.hasAttribute(
                            "data-page"
                        )
                    ) {
                        return;
                    }


                    /*
                       ไม่ fade ถ้าเปิด
                       anchor ในหน้าเดียวกัน
                    */

                    if (
                        href.startsWith("#")
                    ) {
                        return;
                    }


                    event.preventDefault();

                    document.body.classList.add(
                        "page-leaving"
                    );


                    setTimeout(() => {

                        window.location.href =
                            href;

                    }, 450);
                }
            );
        });


    /* =====================================================
       07 — BACK TO MENU
       ===================================================== */

    const backButtons =
        document.querySelectorAll(
            ".back-to-menu, .home-back, [data-back-menu]"
        );


    backButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                /*
                   สำคัญมาก

                   กลับไป menu.html
                   ไม่ใช่ index.html
                */

                document.body.classList.add(
                    "page-leaving"
                );


                setTimeout(() => {

                    window.location.href =
                        "menu.html";

                }, 450);
            }
        );
    });


    /* =====================================================
       08 — BROWSER BACK
       ===================================================== */

    /*
       ถ้าผู้ใช้กดปุ่ม Back ของมือถือ
       เราไม่บังคับวนกลับ index
    */

    window.addEventListener(
        "pageshow",
        event => {

            if (event.persisted) {

                document.body.classList.remove(
                    "page-leaving"
                );

                document.body.style.opacity =
                    "1";
            }
        }
    );


    /* =====================================================
       09 — SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .fade-up, .fade-in, .slide-left, .slide-right"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                entry.target.classList.add(
                                    "home-show"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );

                },
                {
                    threshold: 0.10,
                    rootMargin:
                        "0px 0px -30px 0px"
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );
            }
        );
    }


    /* =====================================================
       10 — STAGGER ANIMATION
       ===================================================== */

    const staggerGroups =
        document.querySelectorAll(
            ".reasons-list, .book-menu, .family-grid, .memory-grid, .person-grid, .gallery-grid"
        );


    staggerGroups.forEach(
        group => {

            const children =
                group.children;


            Array.from(children)
                .forEach(
                    (child, index) => {

                        child.style.setProperty(
                            "--delay",
                            `${index * 70}ms`
                        );
                    }
                );
        }
    );


    /* =====================================================
       11 — 100 REASONS
       ===================================================== */

    const reasonsGrid =
        document.getElementById(
            "reasonsGrid"
        );


    const reasons = [

        "พอร์ชทำให้เค้ายิ้มง่ายขึ้น",

        "พอร์ชชอบบอกรักเค้าทุกคืน",

        "พอร์ชถือกระเป๋าให้ตลอด",

        "พอร์ชสุภาพมาก",

        "พอร์ชตั้งใจเรียน",

        "พอร์ชเป็นห่วงเค้าเสมอ",

        "พอร์ชชอบง้อเค้า",

        "พอร์ชทำให้พ่อแม่เค้าชอบ",

        "พอร์ชทำให้ชีวิตเค้ามีสีสัน",

        "พอร์ชดูมีอนาคตมากกก",


        "พ่อแม่พอร์ชปฏิบัติกับเค้าดีมาก",

        "อยู่กับพอร์ชแล้วสบายใจมาก ๆ",

        "เป็นที่พึ่งให้ตลอด",

        "มีเวลาให้",

        "คอยตามใจตลอด",

        "คอยรับฟังปัญหาของเค้า",

        "คอยดูแล",

        "คอยชม",

        "ไม่กดใจผู้หญิง ไม่รี ไม่ฟอล",

        "ไม่มีความลับกับเค้า",


        "ไม่กินเหล้า ไม่สูบบุหรี่",

        "ไม่ติดเพื่อน",

        "ไม่เที่ยวกลางคืน",

        "คอยชมตลอด",

        "คอยลูบหัวตลอดด",

        "ทำให้รู้สึกปลอดภัยตอนอยู่กับเธอ",

        "คอยรายงานตลอดว่าไปไหนทำอะไร",

        "ไม่ให้ไปไหนไม่ให้ทำอะไรก็ไม่ทำ",

        "แคร์ความรู้สึกเค้า",

        "คอยทำอะไรเพื่อเค้า",


        "ปรับในเรื่องที่เค้าไม่โอเค",

        "หล่อมากก",

        "ทำตัวน่ารักกับเค้า",

        "น่ารักกับเค้าแค่คนเดียว",

        "ดูแลตัวเอง",

        "ติดเค้ามากกก ติดแฟน",

        "ไปไหนก็ไปด้วยกันตลอดด เค้าอยู่ไหนก็จะมาหา",

        "พอร์ชไม่ปล่อยให้เค้าต้องเผชิญอะไรคนเดียว",

        "ไม่เฟรนด์ลี่กับคนอื่น",

        "ทำให้เค้ารู้สึกไว้ใจ",


        "คอยแกะกุ้งให้เค้า",

        "คอยย่างหมูให้เค้า",

        "เก็บดอกไม้มาง้อเค้า",

        "คอยพาไปกินของอร่อย",

        "พาไปซื้อนมกล้วย",

        "พูดจาน่ารัก",

        "อินกับสิ่งที่เค้าอินเหมือนกัน",

        "ชอบอะไรคล้าย ๆ กัน",

        "ชัดเจนกับเค้า",

        "ให้เกียรติเค้า",


        "คอยเล่านิทานก่อนนอนกล่อมนอนตลอด",

        "ไม่เคยขัดตอนที่บอกให้เล่านิทานหรือกล่อมนอน",

        "ถึงจะง่วงเธอก็ไม่เคยบ่นเลย แถมกล่อมเหมือนเดิม",

        "เธอไม่หงุดหงิด ใจเย็นมากก",

        "ใส่ใจเค้า",

        "คอยเอาใจเค้า ถึงเค้าจะเอาแต่ใจ",

        "เธอเรียนรู้สิ่งใหม่ ๆ เสมอ",

        "เธอดูมีเป้าหมายในชีวิต",

        "เธอดูเก่งมากกกในหลาย ๆ เรื่อง",

        "เป็นคนที่พูดแล้วทำ",


        "ทำให้เค้ามองเห็นอนาคตร่วมกัน",

        "มีไลฟ์สไตล์คล้ายกัน",

        "ภาษารักก็คล้าย ๆ กัน",

        "เธอปรับตัวให้เข้ากับเค้า",

        "เธอทำให้เค้ารู้สึกมั่นใจมากตอนอยู่กับเธอ",

        "เธอทำให้รู้สึกอุ่นใจ",

        "เป็นกำลังใจในการใช้ชีวิตของเค้า",

        "เป็นเป้าหมายในชีวิตของเค้า",

        "ทำให้ชีวิต ม.ปลาย ของเค้ามีความหมาย",

        "คอยสร้างความทรงจำดี ๆ ด้วยกัน",


        "มีเป้าหมายเดียวกัน",

        "เป็นคนทัศนคติดีมาก ๆ",

        "มีความเป็นผู้ใหญ่มาก ๆ",

        "ดูเป็นสุภาพบุรุษ",

        "เล่นเกมเป็นเพื่อนเค้าได้",

        "คอยแสดงด้านหึงหวงเค้าออกมา",

        "ทำให้เค้าไม่ต้องกังวลว่าเธอจะไม่รักเค้ามั้ย",

        "คอยอยู่กับเค้าในวันที่เค้าไม่ได้น่ารัก",

        "พยายามเข้าใจเค้า",

        "พยายามรักษาความสัมพันธ์",


        "อวดเค้าก็ค่อนข้างเก่ง",

        "ตอนที่เค้ากำลังเก็บตัง เธอก็ใช้ตังตัวเองมาเลี้ยงเค้า เพราะเธอไม่อยากให้เค้าลำบาก",

        "เธอคอยพูดกับเค้าอย่างมีเหตุผลเสมอ ถึงแม้จะมีเถียงบ้าง แต่สุดท้ายเธอก็ยอมเค้าตลอด",

        "เธอรู้จักทำงานแบ่งเบาภาระคนในครอบครัว",

        "เป็นเด็กดีเชื่อฟังพ่อแม่",

        "เคารพผู้ใหญ่ วางตัวดี มีมารยาท",

        "เธอทำให้เค้ารู้สึกจริง ๆ ว่าเธอรักเค้าจริง ๆ",

        "ทำให้เค้ารู้สึกสบายใจเรื่องผู้หญิง จากคนที่ระแวงมาก ๆ",

        "ให้เค้าเป็นที่ 1 เสมอ",

        "เธอวางแผนอนาคตที่มีเค้าด้วย",


        "เธอคอยซัพพอร์ตเค้าในหลายเรื่อง",

        "เธอเป็นคนที่ทำให้เค้าอยากพยายามเพื่อใครซักคนหนึ่ง",

        "เธอทำให้เค้าได้เจอกับความรักที่ดีจริง ๆ จากคนที่พยายามเหมือน ๆ กัน ถึงแม้จะผิดพลาดไปบ้าง เธอก็ยังพยายามต่อเค้าเรื่อยมา",

        "เธอใจดีมากกับเด็ก หรือว่าสัตว์เล็กสัตว์น้อย",

        "เธอดูเป็นคนอ่อนโยนมาก",

        "ดูเป็นคนอบอุ่นมาก ๆ ทั้งการพูดและการกระทำ",

        "การที่จะทำอะไรซักอย่างหรือพูดอะไรซักอย่างคือเธอคิดมาแล้ว",

        "เธอเป็นคนที่ตลกเฮฮา เป็นรอยยิ้มให้เค้า ทำให้เค้ามีความสุข เป็นพลังบวกให้เค้าเสมอ",

        "เธอทำทุกอย่างเพื่อที่จะให้ความสัมพันธ์เราดีขึ้น ต่อให้จะเป็นช่วงขาลง เธอก็ยังคุยกับเค้าเพื่อที่จะได้เข้าใจกัน ทำให้ความสัมพันธ์ดีขึ้น",

        "ความพยายามทุกอย่างในชีวิตของเธอ มันทำให้เค้ารู้สึกว่าเธอพึ่งพาได้ ทุกอย่างที่เธอทำ ไม่ว่าจะเป็นการแสดงความรัก พยายามทำทุกอย่างให้เค้า ถึงแม้จะไม่เก่งแต่ก็พยายามทำให้เค้ารู้สึกรักเธอมาก ๆ"

    ];


    if (reasonsGrid) {

        /*
           ป้องกันเหตุการณ์สร้างซ้ำ
           เวลาโหลด script มากกว่า 1 ครั้ง
        */

        if (
            reasonsGrid.children.length === 0
        ) {

            reasons.forEach(
                (reason, index) => {

                    const card =
                        document.createElement(
                            "article"
                        );

                    card.className =
                        "reason-card reveal";


                    const number =
                        document.createElement(
                            "div"
                        );

                    number.className =
                        "reason-number";

                    number.textContent =
                        String(index + 1)
                            .padStart(2, "0");


                    const text =
                        document.createElement(
                            "div"
                        );

                    text.className =
                        "reason-text";

                    text.textContent =
                        reason;


                    card.appendChild(
                        number
                    );

                    card.appendChild(
                        text
                    );

                    reasonsGrid.appendChild(
                        card
                    );
                }
            );
        }


        /*
           Observe cards หลังจากสร้างเสร็จ
        */

        const reasonCards =
            reasonsGrid.querySelectorAll(
                ".reason-card"
            );


        if (
            "IntersectionObserver" in window
        ) {

            const reasonObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "visible"
                                    );

                                    reasonObserver.unobserve(
                                        entry.target
                                    );
                                }
                            }
                        );

                    },
                    {
                        threshold: 0.08
                    }
                );


            reasonCards.forEach(
                card => {

                    reasonObserver.observe(
                        card
                    );
                }
            );
        }
    }


    /* =====================================================
       12 — IMAGE FALLBACK
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

                    img.setAttribute(
                        "alt",
                        "ไม่สามารถโหลดรูปภาพได้"
                    );
                }
            );
        });


    /* =====================================================
       13 — IMAGE LAZY LOAD
       ===================================================== */

    document
        .querySelectorAll(
            "img:not([loading])"
        )
        .forEach(img => {

            img.setAttribute(
                "loading",
                "lazy"
            );
        });


    /* =====================================================
       14 — GALLERY LIGHTBOX
       ===================================================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-grid img, .memory-photo img"
        );


    if (galleryImages.length) {

        galleryImages.forEach(
            image => {

                image.style.cursor =
                    "zoom-in";


                image.addEventListener(
                    "click",
                    () => {

                        const overlay =
                            document.createElement(
                                "div"
                            );

                        overlay.className =
                            "image-lightbox";


                        const bigImage =
                            document.createElement(
                                "img"
                            );

                        bigImage.src =
                            image.src;

                        bigImage.alt =
                            image.alt || "";


                        overlay.appendChild(
                            bigImage
                        );

                        document.body.appendChild(
                            overlay
                        );


                        requestAnimationFrame(
                            () => {

                                overlay.classList.add(
                                    "show"
                                );
                            }
                        );


                        overlay.addEventListener(
                            "click",
                            () => {

                                overlay.classList.remove(
                                    "show"
                                );


                                setTimeout(
                                    () => {

                                        overlay.remove();

                                    },
                                    300
                                );
                            }
                        );
                    }
                );
            }
        );
    }


    /* =====================================================
       15 — ESC CLOSE LIGHTBOX
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                const lightbox =
                    document.querySelector(
                        ".image-lightbox"
                    );


                if (lightbox) {

                    lightbox.classList.remove(
                        "show"
                    );


                    setTimeout(
                        () => {

                            lightbox.remove();

                        },
                        300
                    );
                }
            }
        }
    );


    /* =====================================================
       16 — CURRENT PAGE
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    document
        .querySelectorAll(
            "[data-page]"
        )
        .forEach(link => {

            const target =
                link.getAttribute(
                    "data-page"
                );


            if (
                target === currentPage
            ) {

                link.classList.add(
                    "current"
                );
            }
        });


    /* =====================================================
       17 — PREVENT DOUBLE CLICK
       ===================================================== */

    document
        .querySelectorAll(
            "a[data-page]"
        )
        .forEach(link => {

            link.addEventListener(
                "dblclick",
                event => {

                    event.preventDefault();
                }
            );
        });


    /* =====================================================
       18 — TOUCH FEEDBACK
       ===================================================== */

    document
        .querySelectorAll(
            "button, .menu-item, .start-button, .home-back"
        )
        .forEach(button => {

            button.addEventListener(
                "touchstart",
                () => {

                    button.classList.add(
                        "touching"
                    );
                },
                {
                    passive: true
                }
            );


            button.addEventListener(
                "touchend",
                () => {

                    setTimeout(
                        () => {

                            button.classList.remove(
                                "touching"
                            );

                        },
                        150
                    );
                },
                {
                    passive: true
                }
            );
        });


    /* =====================================================
       19 — AUTO REVEAL EXISTING ELEMENTS
       ===================================================== */

    const immediateReveal =
        document.querySelectorAll(
            ".home-header, .home-message, .our-dream, .letter-paper, .final-letter, .final-ending"
        );


    immediateReveal.forEach(
        element => {

            setTimeout(
                () => {

                    element.classList.add(
                        "home-show"
                    );

                },
                150
            );
        }
    );


    /* =====================================================
       20 — PAGE FADE IN
       ===================================================== */

    requestAnimationFrame(
        () => {

            document.body.classList.add(
                "page-loaded"
            );
        }
    );


    /* =====================================================
       21 — MOBILE VIEWPORT FIX
       ===================================================== */

    function updateViewportHeight() {

        document.documentElement
            .style
            .setProperty(
                "--vh",
                `${window.innerHeight * 0.01}px`
            );
    }


    updateViewportHeight();


    window.addEventListener(
        "resize",
        updateViewportHeight
    );


    /* =====================================================
       22 — HEART CLICK EFFECT
       ===================================================== */

    document.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    ".heart-click"
                );


            if (!target) return;


            const heart =
                document.createElement(
                    "span"
                );


            heart.className =
                "click-heart";


            heart.textContent =
                "♡";


            heart.style.left =
                event.clientX + "px";

            heart.style.top =
                event.clientY + "px";


            document.body.appendChild(
                heart
            );


            setTimeout(
                () => {

                    heart.remove();

                },
                900
            );
        }
    );


    /* =====================================================
       23 — SMOOTH ANCHOR
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link
                            .getAttribute(
                                "href"
                            )
                            .substring(1);


                    const target =
                        document.getElementById(
                            id
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            );
        });


    /* =====================================================
       24 — CONSOLE
       ===================================================== */

    console.log(
        "%c♡ DEAR PORCH ♡",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "เว็บไซต์ความทรงจำของอิ๊งค์และพอร์ชกำลังทำงาน ♡"
    );

});
