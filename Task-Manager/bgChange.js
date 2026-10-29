function bttnDisplay(){
    stopMatrix();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.body.classList.remove("matrix", "halloween");
    
    let play = document.querySelector(".play");
    let pause = document.querySelector(".pause");
    if ( document.body.className == "" ){
         play.style.display = "none";
        pause.style.display = "none";
        saveTheme = "";
    }
}

function changeRed(){
    bttnDisplay();
    let x = document.body;
    x.style.background = "linear-gradient(to bottom right, red, deepskyblue, black)";
    x.style.backgroundAttachment = "fixed";
}

function changeSky(){
    bttnDisplay();
    let x = document.body;
    x.style.background = "linear-gradient(to bottom, rgba(255,149,0,1) , rgba(0, 85, 255,1)";
    x.style.backgroundAttachment = "fixed";
}

function changeBlue(){
    bttnDisplay();
    let x = document.body;
    x.style.background = "linear-gradient(to bottom right, deepskyblue, lightgreen)";
    x.style.backgroundAttachment = "fixed";
}

function changeBlueYellow(){
    bttnDisplay();
    let x = document.body;
    x.style.background = "linear-gradient(to bottom right, blue, yellow)";
    x.style.backgroundAttachment = "fixed";
}

function custom(){
    bttnDisplay();
    let x = document.getElementById("favcolor1").value;
    let y = document.getElementById("favcolor2").value;
    let b = document.body;
    b.style.background = `linear-gradient(to bottom right, ${x}, ${y})`;
    b.style.backgroundAttachment = "fixed";
}

function changeRedWhiteBlue(){
    bttnDisplay();
    let x = document.body;
    x.style.background = "linear-gradient(to bottom right, red, white, blue)";
    x.style.backgroundAttachment = "fixed";
}