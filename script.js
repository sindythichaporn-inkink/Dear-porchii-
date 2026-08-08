document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       GLITTER
    ===================================== */

    const glitterContainer =
        document.querySelector(".glitter-container");


    if (glitterContainer) {

        for (let i = 0; i < 35; i++) {

            const glitter =
                document.createElement("span");

            glitter.className = "glitter";

            glitter.style.left =
                Math.random() * 100 + "%";

            glitter.style.setProperty(
                "--drift",
                (Math.random() * 100 - 50) + "px"
            );

            glitter.style.animationDuration =
                (6 + Math.random() * 8) + "s, " +
                (1.2 + Math.random() * 2) + "s";

            glitter.style.animationDelay =
                (-Math.random() * 10) + "s";

            glitterContainer.appendChild(glitter);

        }

    }



    /* =====================================
       INDEX TYPING
    ===================================== */

    const typing =
        document.getElementById("typingText");


    if (typing) {

        const text =
            "สวัสดี ! เธอคงเป็น..";

        let index = 0;

        typing.textContent = "";


        function typeWriter() {

            if (index < text.length) {

                typing.textContent +=
                    text.charAt(index);

                index++;

                setTimeout(
                    typeWriter,
                    90
                );

            }

        }


        setTimeout(
            typeWriter,
            500
        );

    }



    /* =====================================
       OPEN MENU
    ===================================== */

    const openStory =
        document.getElementById("openStory");


    const welcome =
        document.getElementById("welcome");

    const bookMenu =
        document.getElementById("bookMenu");


    if (
        openStory &&
        welcome &&
        bookMenu
    ) {

        setTimeout(() => {

            openStory.classList.add("show");

        }, 2300);


        openStory.addEventListener(
            "click",
            () => {

                openStory.style.transform =
                    "scale(.92)";

                welcome.classList.add("hide");


                setTimeout(() => {

                    welcome.style.display =
                        "none";

                    bookMenu.style.display =
                        "flex";


                    requestAnimationFrame(() => {

                        bookMenu.classList.add(
                            "show"
                        );

                    });

                }, 750);

            }
        );

    }



    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (revealElements.length) {

        const observer =
            new IntersectionObserver(
                (entries) => {

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
                    threshold: .12
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }



    /* =====================================
       100 REASONS
    ===================================== */

    const reasonsGrid =
        document.getElementById("reasonsGrid");


    if (reasonsGrid) {

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


        reasons.forEach(
            (reason, index) => {

                const card =
                    document.createElement("article");

                card.className =
                    "reason-card reveal";


                const number =
                    document.createElement("div");

                number.className =
                    "reason-number";

                number.textContent =
                    String(index + 1)
                        .padStart(2, "0");


                const text =
                    document.createElement("div");

                text.className =
                    "reason-text";

                text.textContent =
                    reason;


                card.appendChild(number);

                card.appendChild(text);

                reasonsGrid.appendChild(card);

            }
        );


        const reasonCards =
            reasonsGrid.querySelectorAll(
                ".reason-card"
            );


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
                    threshold: .08
                }
            );


        reasonCards.forEach(card => {

            reasonObserver.observe(card);

        });

    }



    /* =====================================
       IMAGE FALLBACK
    ===================================== */

    document
        .querySelectorAll("img")
        .forEach(img => {

            img.addEventListener(
                "error",
                () => {

                    img.style.opacity = "0";

                }
            );

        });

});
