// Background music
const music = document.getElementById("music");

// Pages
const pages = document.querySelectorAll(".page");

let currentPage = 0;

// Open Gift
function startStory(){

document.getElementById("giftScreen").style.display="none";

document.getElementById("story").style.display="flex";

pages[0].classList.add("active");

music.play().catch(()=>{});

}

// Next Button
function nextPage(){

pages[currentPage].classList.remove("active");

currentPage++;

if(currentPage < pages.length){

pages[currentPage].classList.add("active");

}else{

currentPage=pages.length-1;

}

}

// Floating Hearts
function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);