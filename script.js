/* =========================================================
   DEAR PORCH ♡
   COMPLETE SCRIPT
   ========================================================= */
document.addEventListener(
    "DOMContentLoaded",
    () => {
        /* =================================================
           01 — PAGE READY
        ================================================= */
        document.body.classList.add("page-ready");
        /* =================================================
           02 — FADE / SCROLL REVEAL
        ================================================= */
        const revealElements =
            document.querySelectorAll(
                ".fade-up, .fade-in, .slide-left, .slide-right, .memory-photo"
            );
        if (revealElements.length > 0) {
            const observer =
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
                                    observer.unobserve(
                                        entry.target
                                    );
                                }
                            }
                        );
                    },
                    {
                        threshold: 0.12
                    }
                );
            revealElements.forEach(
                element => {
                    observer.observe(
                        element
                    );
                }
            );
        }
        /* =================================================
           03 — MEMORY GALLERY
           รองรับรูปจำนวนมาก เช่น 30 รูป
        ================================================= */
        const memoryPhotos =
            document.querySelectorAll(
                ".memory-photo"
            );
        if (memoryPhotos.length > 0) {
            memoryPhotos.forEach(
                (photo, index) => {
                    photo.style.transitionDelay =
                        `${index * 0.04}s`;
                }
            );
        }
        /* =================================================
           04 — IMAGE FALLBACK
        ================================================= */
        document
            .querySelectorAll("img")
            .forEach(
                img => {
                    img.addEventListener(
                        "error",
                        () => {
                            img.classList.add(
                                "image-missing"
                            );
                        }
                    );
                }
            );
        /* =================================================
           05 — PAGE TRANSITION
        ================================================= */
        document
            .querySelectorAll("a")
            .forEach(
                link => {
                    link.addEventListener(
                        "click",
                        event => {
                            const href =
                                link.getAttribute(
                                    "href"
                                );
                            /*
                             * ไม่ทำ transition
                             * ถ้าไม่มี href
                             * เป็น #anchor
                             * หรือเป็น external link
                             */
                            if (
                                !href ||
                                href.startsWith("#") ||
                                href.startsWith("http") ||
                                href.startsWith("mailto:") ||
                                href.startsWith("tel:")
                            ) {
                                return;
                            }
                            /*
                             * ป้องกัน
                             * browser เปลี่ยนหน้าทันที
                             */
                            event.preventDefault();
                            /*
                             * Fade หน้าออก
                             */
                            document.body.classList.add(
                                "page-leaving"
                            );
                            /*
                             * เปลี่ยนหน้า
                             * หลัง animation
                             */
                            setTimeout(
                                () => {
                                    window.location.href =
                                        href;
                                },
                                350
                            );
                        }
                    );
                }
            );
        /* =================================================
           06 — BACK BUTTON / INTERNAL LINKS
           ป้องกันการกดซ้ำระหว่างกำลังเปลี่ยนหน้า
        ================================================= */
        let isLeaving =
            false;
        document
            .querySelectorAll(
                'a[href$=".html"]'
            )
            .forEach(
                link => {
                    link.addEventListener(
                        "click",
                        event => {
                            if (
                                isLeaving
                            ) {
                                event.preventDefault();
                                return;
                            }
                            const href =
                                link.getAttribute(
                                    "href"
                                );
                            if (
                                !href ||
                                href.startsWith("http")
                            ) {
                                return;
                            }
                            event.preventDefault();
                            isLeaving = true;
                            document.body.classList.add(
                                "page-leaving"
                            );
                            setTimeout(
                                () => {
                                    window.location.href =
                                        href;
                                },
                                350
                            );
                        }
                    );
                }
            );
        /* =================================================
           07 — MEMORY IMAGE LOADING
           เพิ่ม class หลังรูปโหลดสำเร็จ
        ================================================= */
        document
            .querySelectorAll(
                ".memory-image img"
            )
            .forEach(
                image => {
                    if (
                        image.complete &&
                        image.naturalWidth > 0
                    ) {
                        image.classList.add(
                            "image-loaded"
                        );
                    }
                    image.addEventListener(
                        "load",
                        () => {
                            image.classList.add(
                                "image-loaded"
                            );
                        }
                    );
                }
            );
        /* =================================================
           08 — MEMORY PHOTO CLICK
           แตะรูปแล้วเพิ่มเอฟเฟกต์เล็ก ๆ
        ================================================= */
        document
            .querySelectorAll(
                ".memory-photo"
            )
            .forEach(
                photo => {
                    photo.addEventListener(
                        "click",
                        () => {
                            photo.classList.toggle(
                                "memory-selected"
                            );
                        }
                    );
                }
            );
        /* =================================================
           09 — KEYBOARD ACCESSIBILITY
        ================================================= */
        document
            .querySelectorAll(
                ".memory-photo"
            )
            .forEach(
                photo => {
                    photo.setAttribute(
                        "tabindex",
                        "0"
                    );
                    photo.addEventListener(
                        "keydown",
                        event => {
                            if (
                                event.key ===
                                "Enter"
                            ) {
                                photo.classList.toggle(
                                    "memory-selected"
                                );
                            }
                        }
                    );
                }
            );
        /* =================================================
           10 — PAGE LOADED
        ================================================= */
        window.addEventListener(
            "load",
            () => {
                document.body.classList.add(
                    "page-loaded"
                );
            }
        );
    }
);
