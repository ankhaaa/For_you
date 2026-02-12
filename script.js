const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");

let size = 20;

// No button escape
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300;
    const y = Math.random() * 150;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    size += 5;
    yesBtn.style.fontSize = size + "px";
});

// Yes click
yesBtn.addEventListener("click", () => {
    confetti({
        particleCount:300,
        spread:120,
        origin:{y:0.6}
    });

    setTimeout(()=>{
        document.body.innerHTML = `
        <h1 style="margin-top:200px;font-size:3.5rem;">
        Forever Starts Now 💖
        </h1>`;
    },1000);
});


// 🌸 Sakura Animation
const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

for(let i=0;i<40;i++){
    petals.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*5+2,
        speed:Math.random()*2+1
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    petals.forEach(p=>{
        ctx.beginPath();
        ctx.fillStyle="pink";
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();

        p.y+=p.speed;
        if(p.y>canvas.height){
            p.y=0;
            p.x=Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(draw);
}

draw();


// ✨ Cursor Trail
document.addEventListener("mousemove",(e)=>{
    const heart=document.createElement("div");
    heart.innerHTML="💖";
    heart.style.position="fixed";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    heart.style.pointerEvents="none";
    heart.style.animation="fade 1s forwards";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),1000);
});

const style=document.createElement("style");
style.innerHTML=`
@keyframes fade{
    0%{opacity:1;transform:scale(1);}
    100%{opacity:0;transform:translateY(-20px) scale(0.5);}
}`;
document.head.appendChild(style);
