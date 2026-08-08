/* =====================================
   INDEX TYPING
===================================== */

const typing = document.getElementById("typingText");

if (typing) {

    const text = `สวัสดี
𐔌՞ ܸ.ˬ.ܸ՞𐦯

พอร์ช!?!

ใช่ไหม… ^_____^

งั้นก็คงเป็นแฟนของอิ๊งค์สินะ 𐔌՞ ܸ. .ܸ՞𐦯

รู้ไหม…

แฟนของเธอตั้งใจทำเว็บไซต์นี้
เพื่อเธอมาก ๆ เลยนะ ૮₍ ˃ ⤙ ˂ ₎ა

ทุกภาพ ทุกความทรงจำ
และทุกข้อความในนี้
ล้วนเป็นสิ่งที่อิ๊งค์ตั้งใจเก็บเอาไว้

เพื่อให้เธอได้กลับมายิ้มกับมันอีกครั้ง ‹𝟹`;

    let index = 0;

    typing.textContent = "";

    function typeWriter() {

        if (index < text.length) {

            typing.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 55);

        }

    }

    setTimeout(typeWriter, 500);
}
