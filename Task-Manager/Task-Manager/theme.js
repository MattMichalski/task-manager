const canvas = document.getElementById("wallpaper");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function resizingS(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const binary = "01";
const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789";
const halloweenGlyphs = ["🎃", "👻", "🦇", "🕷️", "🕸️", "🍬", "🌙", "💀"];
let glyphs;
let rainColor;
let fadeColor;
let chars = latin;
let fontSize = 16;
const columns = canvas.width/fontSize;
const drops = [];
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
isMoving = true;
for (let i = 0; i < columns; i++){
    drops[i] = 1;
    }

let animationId;
let saveTheme = "";



function applyHalloween(){
    stopMatrix();
    play.style.display = "none";
    pause.style.display = "block";
    fontSize = 20;
    chars = halloweenGlyphs;
    rainColor = "#FF7518";
    fadeColor = "rgba(13, 0, 26, 0.05)";
    document.body.classList.remove("matrix", "halloween");
    document.body.classList.add("halloween");
    saveTheme = "applyHalloween";
    theme();
}

function theme(){
   animationId = requestAnimationFrame(draw);
   isMoving = true;
}

function startMatrix(){
    stopMatrix();
    play.style.display = "none";
    pause.style.display = "block";
    chars = latin;
    fontSize = 16;
    rainColor = "#00FF41";
    fadeColor = "rgba(0, 0, 0, 0.05)";
    id = document.getElementById("themes");
    document.body.classList.remove("halloween", "matrix");
    document.body.classList.add("matrix");
    saveTheme = "startMatrix";
    
    theme();
}

function startOriginalMatrix(){
    stopMatrix();
    play.style.display = "none";
    pause.style.display = "block";
    chars = katakana;
    fontSize = 16;
    rainColor = "#00FF41";
    fadeColor = "rgba(0, 0, 0, 0.05)";
    document.body.classList.remove("halloween", "matrix");
    document.body.classList.add("matrix");
    saveTheme = "startOriginalMatrix";
    theme();
   
}

function startBiMatrix(){
    stopMatrix();
    play.style.display = "none";
    pause.style.display = "block";
    chars = binary;
    fontSize = 16;
    rainColor = "#00FF41";
    fadeColor = "rgba(0, 0, 0, 0.05)";
    document.body.classList.remove("halloween", "matrix");
    document.body.classList.add("matrix");
    saveTheme = "startBiMatrix";
    
    theme();
}

function stop(){
    if( isMoving == false ){
        return
    }
    stopMatrix();
    pause.style.display = "none";
    play.style.display = "block";
    
}

function resume(){
   if( isMoving == true){
        return
   }
    theme();
    play.style.display = "none";
    pause.style.display = "block";
}

function stopMatrix(){
    isMoving = false;
    cancelAnimationFrame(animationId);

}

function draw(){
    ctx.fillStyle = fadeColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = rainColor;
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
        }
    }
    animationId = requestAnimationFrame(draw);
}