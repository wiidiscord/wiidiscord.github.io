// const 


const ding = new Audio("../sounds/ding.mp3");
const select = new Audio("../sounds/Select.mp3");

document.addEventListener('DOMContentLoaded', function() {

// Fake cursor
if(!document.body.classList.contains("mobile")){
  const fakeCursor = document.getElementById('fakeCursor');
  let lastX=0;
  document.addEventListener('mousemove', e=>{
    fakeCursor.style.left = e.clientX + 'px';
    fakeCursor.style.top = e.clientY + 'px';
    const dx = e.clientX - lastX;
    fakeCursor.style.transform = `translate(-50%,-50%) rotate(${dx>0?15:dx<0?-15:0}deg)`;
    lastX = e.clientX;
  });
}

});


function playDing(){ ding.currentTime = 0; ding.play().catch(()=>{}); }
function playSelect(){ select.currentTime = 0; select.play().catch(()=>{}); }

if(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) document.body.classList.add("mobile");


// Clock
setInterval(updateClock,1000);
updateClock();

function updateClock(){
  const now = new Date();
  document.getElementById('time').textContent = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
  document.getElementById('date').textContent = now.toLocaleDateString();
}

function playDing(){ ding.currentTime = 0; ding.play().catch(()=>{}); }
function playSelect(){ select.currentTime = 0; select.play().catch(()=>{}); }




// Overlay logic for buttons
document.addEventListener('DOMContentLoaded', function() {
const blackOverlay = document.getElementById('blackOverlay');
});
function handleButtonClick(){
  playDing();
  blackOverlay.style.opacity='1';
  blackOverlay.style.pointerEvents='all';
  setTimeout(()=>{
    blackOverlay.style.opacity='0';
    setTimeout(()=>{ blackOverlay.style.pointerEvents='none'; },500);
  },500);
}

// Button hover: play Select.mp3
document.querySelectorAll(".buttonlink").forEach(link => {
   link.addEventListener("click", handleButtonClick);
});
