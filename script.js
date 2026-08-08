const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const enterButton = document.getElementById("enterButton");
const floatingMenu = document.getElementById("floatingMenu");


// =========================
// MUSIC
// =========================

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;
                musicButton.innerHTML = "♫ &nbsp; Our song is playing ♡";

            })
            .catch(() => {

                musicButton.innerHTML = "♫ &nbsp; ใส่เพลงใน music/song.mp3 ก่อนนะ";

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "♫ &nbsp; Play our song";

    }

});


// =========================
// OPEN BOOK
// =========================

enterButton.addEventListener("click", () => {

    document.getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// =========================
// FLOATING MENU
// =========================

floatingMenu.addEventListener("click", () => {

    document.getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll(".book-menu a").forEach(link => {

    link.addEventListener("click", () => {

        window.scrollBy({
            top: 1,
            behavior: "smooth"
        });

    });

});


// =========================
// IMAGE FALLBACK
// =========================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.classList.add("image-missing");

    });

});


// =========================
// FADE IN
// =========================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.08
    }

);

document.querySelectorAll(
    ".story-card, .timeline-item, .family-member, .person-card, .our-dream, .gallery-grid figure"
).forEach(element => {

    observer.observe(element);

});
