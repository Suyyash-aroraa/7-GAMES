function editSquare(squareEdit){
    squareEdit.removeAttribute('class')
    squareEdit.setAttribute('class' , 'square')
}
for (let i = 0; i<25;i++){
    var gameSquare = document.createElement('div');
    gameSquare.setAttribute('id', i+1);
    gameSquare.setAttribute('class', 'square');
    document.querySelector('.game').appendChild(gameSquare);
}

var squareElement = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('.time');
const score = document.querySelector('.score');
var result = 0;
var hitPostition
function randomSquares(){
    let randomValue = Math.floor(Math.random() * 25);
    squareElement.forEach(
        function(square){
            editSquare(square)
        }
    );

    let randomPosition = squareElement[randomValue]
    randomPosition.classList.add('mole')
    
    hitPostition = randomPosition.id
}

squareElement.forEach(function(square){
    square.addEventListener('mousedown', function(){
        if (square.id == hitPostition){
            result++;
            score.textContent = result;
            hitPostition = null
        };
    })
})

randomSquares()
function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquares, 500)
}
moveMole()

let currentTime = 60
timeLeft.textContent = currentTime
let countDownClass = setInterval(countDown, 1000)
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime===0){
        countDownClass = null
        currentTime = 0
        alert("GAME OVER, refresh to restart")
        for (let i = 0; i<25;i++){
            let d = document.querySelector('.game')
            let d_nest = document.querySelector('.square')
            d.remove(d_nest)
        }
    }
}

