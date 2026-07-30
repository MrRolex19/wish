// Get Pages
const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

let current = 0;

// ======================
// Open Gift
// ======================

function startStory() {

    document.getElementById("giftScreen").style.display = "none";
    document.getElementById("story").style.display = "block";

    // Start first page from top
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    if (music) {
        music.play().catch(() => {});
    }
}

// ======================
// Next Page
// ======================

function nextPage() {

    // Hide current page
    pages[current].classList.remove("active");

    // Next page
    current++;

    // Don't go beyond last page
    if (current >= pages.length) {
        current = pages.length - 1;
    }

    // Show next page
    pages[current].classList.add("active");

    // Always scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

}

// ======================
// Floating Hearts
// ======================

let heartCount = 0;

setInterval(() => {

    if (heartCount >= 2) return;

    heartCount++;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 90 + "vw";
    heart.style.fontSize = (22 + Math.random() * 8) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
        heartCount--;
    }, 5000);

}, 2500);