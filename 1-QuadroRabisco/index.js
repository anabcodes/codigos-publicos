const quadro = document.querySelector("canvas");
const ctx = quadro.getContext("2d");

quadro.width = window.innerWidth;
quadro.height = window.innerHeight;

let desenhando = false;
let ultimoX = 0;
let ultimoY = 0;

quadro.addEventListener("mousedown", (e) => {
    desenhando = true;
    ultimoX = e.clientX;
    ultimoY = e.clientY;
    console.log("cursor pressionou")
});

window.addEventListener("mouseup", () => {
    desenhando = false;
    console.log("cursor parou de pressionar")
});

quadro.addEventListener("mousemove", (e) => {
    if (!desenhando) return;
    console.log("cursor ta se movendo")

    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(ultimoX, ultimoY);
    ctx.lineTo(e.clientX, e.clientY); 
    ctx.stroke();             

    ultimoX = e.clientX;
    ultimoY = e.clientY;
});