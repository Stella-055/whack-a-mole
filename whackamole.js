let mole=document.querySelectorAll(".mole");
let start=document.querySelector("#startbutton");
let result=document.getElementById("score");
let randomhole;
let score;
let timeUp = false;
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

 function peep (){
     randomhole=Math.floor(Math.random()*mole.length);
     mole[randomhole].style.display='flex';
     const time = randomTime(200, 1000);
     setTimeout(() => {
        mole[randomhole].style.display='none';
    if (!timeUp){peep()}
    }, time);
    
 }
 function startGame() {
   
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000); // Game lasts for 10 seconds
}
function bonk(e) {
    if (!e.isTrusted) {
    score++;
    result.textContent= score;
    this.style.display="none";}
   
}

mole.forEach(hole => hole.addEventListener('click', bonk));
start.addEventListener('click', startGame);