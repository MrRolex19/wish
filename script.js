const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

let current = 0;

function startStory(){

document.getElementById("giftScreen").style.display="none";

document.getElementById("story").style.display="block";

music.play();

}

function nextPage(){

pages[current].classList.remove("active");

current++;

if(current<pages.length){

pages[current].classList.add("active");

}

}

// Floating Hearts

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.opacity="0.8";

heart.style.pointerEvents="none";

heart.style.animation="floatHeart 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},3000);