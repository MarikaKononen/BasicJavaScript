let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let resetButton = document.querySelector("#reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        console.log(p1Score);
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        console.log(p2Score);
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});