// Get Pages
const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

let current = 0;

// Open Gift
function startStory() {
    document.getElementById("giftScreen").style.display = "none";
    document.getElementById("story").style.display = "block";

    if (music) {
        music.play().catch(() => {});
    }
}

// Next Page
function nextPage() {

    pages[current].classList.remove("active");

    current++;

    if (current < pages.length) {
        pages[current].classList.add("active");
    } else {
        // Stay on the last page
        current = pages.length - 1;
        pages[current].classList.add("active");
    }
}

// =====================
// Floating Hearts
// =====================

let heartCount = 0;

setInterval(() => {

    if (heartCount >= 2) return;

    heartCount++;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 90 + "vw";
    heart.style.fontSize = (22 + Math.random() * 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
        heartCount--;
    }, 5000);

}, 2500);