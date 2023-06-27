var blockWidth = 100
var blockHeight = 20



class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth , yAxis + blockHeight]

    }
}

const blocks = []




var screen700 = window.matchMedia("(max-width: 700px)")
var screen500 = window.matchMedia("(max-width: 500px)")

if(screen500.matches){
    for (let j = 270; j>150; j -=30){
        for (let i = 10; i<300; i+=60){
            blocks.push(new Block(i, j))
            var userStart = [130,20]
            var ballStart = [150,40]
        }
    }
    

}
else if (screen700.matches){
    for (let j = 270; j>150; j -=30){
        for (let i = 10; i<360; i+=75){
            blocks.push(new Block(i, j))
            var userStart = [170,20]
            var ballStart = [200,40]
        }
    }
    
}

else{
    for (let j = 270; j>150; j -=30){
        for (let i = 10; i<500; i+=110){
            blocks.push(new Block(i, j))
            var userStart = [230,20]
            var ballStart = [270,40]
        }

    }

}
var ballCurrent = ballStart
var currentPosition = userStart
function createBlocks(){
        for (let i = 0; i<20; i++){
            const blockElement = document.createElement('div');
            blockElement.classList.add('block');
            document.querySelector('.game').appendChild(blockElement)
            blockElement.style.left = blocks[i].bottomLeft[0] + 'px'
            blockElement.style.bottom = blocks[i].bottomLeft[1] + 'px'
        }
}
createBlocks()
const user = document.createElement('div')
user.classList.add('user')
user.style.left = currentPosition[0] + 'px'
user.style.bottom = currentPosition[1] + 'px'
document.querySelector('.game').appendChild(user)

// Move user

function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if (currentPosition[0] !== 0){
                currentPosition[0] -= 10
                user.style.left = currentPosition[0] + 'px'
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] !== 460){
                currentPosition[0] += 10
                user.style.left = currentPosition[0] + 'px'
            }
            break;
    }
}

document.addEventListener('keydown', moveUser)

function drawBall(){
    ball.style.left = ballCurrent[0] + 'px'
    ball.style.bottom =ballCurrent[1] + 'px'
}
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
document.querySelector('.game').appendChild(ball)


function moveBall(){
    ballCurrent[0]+= 2
    ballCurrent[1]+= 2
    drawBall()
}

setInterval(moveBall, 30)