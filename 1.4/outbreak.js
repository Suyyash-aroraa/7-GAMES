function Game(){
    var blockWidth = 100
    var blockHeight = 20

    var score = 0
    const scoreScreen = document.getElementById('score')
    scoreScreen.textContent = score
    class Block{
        constructor(xAxis, yAxis){
            this.bottomLeft = [xAxis, yAxis]
            this.bottomRight = [xAxis + blockWidth, yAxis]
            this.topLeft = [xAxis, yAxis + blockHeight]
            this.topRight = [xAxis + blockWidth , yAxis + blockHeight]

        }
    }

    const blocks = []
    var ballDiameter = 20

    var timerId

    var screen700 = window.matchMedia("(max-width: 700px)")
    var screen500 = window.matchMedia("(max-width: 500px)")

    if(screen500.matches){
        for (let j = 270; j>150; j -=30){
            for (let i = 10; i<300; i+=60){
                blocks.push(new Block(i, j))
                var userStart = [130,20]
                var ballStart = [150,40]
                blockWidth = 50
                var gameWidth = 300
            }
        }
        

    }
    else if (screen700.matches){
        for (let j = 270; j>150; j -=30){
            for (let i = 10; i<360; i+=75){
                blocks.push(new Block(i, j))
                var userStart = [170,20]
                var ballStart = [200,40]
                blockWidth = 65
                var gameWidth = 400
            }
        }
        
    }

    else{
        for (let j = 270; j>150; j -=30){
            for (let i = 10; i<500; i+=110){
                blocks.push(new Block(i, j))
                var userStart = [230,20]
                var ballStart = [270,40]
                var gameWidth = 560

            }

        }

    }
    var gameHeight = 300
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
                if (currentPosition[0] !== gameWidth - blockWidth){
                    currentPosition[0] += 10
                    user.style.left = currentPosition[0] + 'px'
                }
                break;
            case 'a':
                if (currentPosition[0] !== 0){
                    currentPosition[0] -= 10
                    user.style.left = currentPosition[0] + 'px'
                }
                break;
            case 'd':
                if (currentPosition[0] !== gameWidth - blockWidth){
                    currentPosition[0] += 10
                    user.style.left = currentPosition[0] + 'px'
                }
                break;
        }
    }
    document.querySelector('.left').addEventListener('click', function(){
        if (currentPosition[0] !== 0){
            currentPosition[0] -= 10
            user.style.left = currentPosition[0] + 'px'
        }
    })
    document.querySelector('.right').addEventListener('click', function(){
        if (currentPosition[0] !== gameWidth - blockWidth){
            currentPosition[0] += 10
            user.style.left = currentPosition[0] + 'px'
        }   
    })
    document.addEventListener('keydown', moveUser)

    function drawBall(){
        ball.style.left = ballCurrent[0] + 'px'
        ball.style.bottom =ballCurrent[1] + 'px'
    }
    const ball = document.createElement('div')
    ball.classList.add('ball')
    drawBall()
    document.querySelector('.game').appendChild(ball)

    var xDirection = 2
    var yDirection = 2
    function moveBall(){
        ballCurrent[0]+= xDirection
        ballCurrent[1]+= yDirection
        drawBall()
        checkCollision()
    }

    timerId = setInterval(moveBall, 30)
    function changeDirection(a){
        if (a === 'x'){
            xDirection *= -1
        }
        if (a === 'y'){
            yDirection *= -1
        }
       

    }
    let gameElement = document.querySelector('.game')
    function checkCollisionUser(){
        if (ballCurrent[0]> currentPosition[0] && ballCurrent[0] < currentPosition[0] + blockWidth && ballCurrent[1] > currentPosition[1] && ballCurrent[1] < currentPosition[1] + blockHeight){
            changeDirection('y')
        }
    }
    setInterval(checkCollisionUser, 60)
    function checkCollision(){
        //blocks

        for (let i = 0; i< blocks.length; i++){
            if(
                ballCurrent[0] > blocks[i].bottomLeft[0] && ballCurrent[0]< blocks[i].bottomRight[0] && ballCurrent[1]  < blocks[i].topRight[1] && (ballCurrent[1]+ ballDiameter) > blocks[i].bottomLeft[1]
            ){
                var blockArray = document.querySelectorAll('.block')
                blockArray[i].remove()
                changeDirection('y')
                blocks.splice(i,1)
                score+= 10
                scoreScreen.innerHTML = score
            }
        }
        
        

        //walls
        if (ballCurrent[0]>= gameWidth - ballDiameter){
            changeDirection('x')
        }
        else if (ballCurrent[1]>= gameHeight - ballDiameter){
            changeDirection('y')
        }
        else if(ballCurrent[0] <= 0){
            changeDirection('x')
        }
        else if(ballCurrent[1] <= 0){
            clearInterval(timerId)
            document.removeEventListener('keydown', moveUser)
            document.querySelector('.left').removeEventListener('click', function(){
                if (currentPosition[0] !== 0){
                    currentPosition[0] -= 13
                    user.style.left = currentPosition[0] + 'px'
                }
            })
            document.querySelector('.right').removeEventListener('click', function(){
                if (currentPosition[0] !== gameWidth){
                    currentPosition[0] += 13
                    user.style.left = currentPosition[0] + 'px'
                }
            })
            for(let i = 0; i<blocks.length; i++){
                let blockElement = document.querySelector('.block')

                gameElement.removeChild(blockElement)

            }
            gameElement.removeChild(document.querySelector('.ball'))
            gameElement.removeChild(document.querySelector('.user'))
            let restartButton =document.createElement('button')
            restartButton.innerText = 'RESTART'
            restartButton.setAttribute('class' , 'restart')
            gameElement.appendChild(restartButton)
            score = 0
            scoreScreen.textContent = score
            document.querySelector('.restart').addEventListener( 'click', function(){
                
                document.querySelector('.restart').remove()
                Game()
                
            })
        }
        else if(score === 200){
            clearInterval(timerId)
            document.removeEventListener('keydown', moveUser)
            document.querySelector('.left').removeEventListener('click', function(){
                if (currentPosition[0] !== 0){
                    currentPosition[0] -= 13
                    user.style.left = currentPosition[0] + 'px'
                }
            })
            document.querySelector('.right').removeEventListener('click', function(){
                if (currentPosition[0] !== gameWidth){
                    currentPosition[0] += 13
                    user.style.left = currentPosition[0] + 'px'
                }
            })
            for(let i = 0; i<blocks.length; i++){
                let blockElement = document.querySelector('.block')

                gameElement.removeChild(blockElement)

            }
            gameElement.removeChild(document.querySelector('.ball'))
            gameElement.removeChild(document.querySelector('.user'))
            let restartButton =document.createElement('button')
            restartButton.innerText = 'RESTART'
            restartButton.setAttribute('class' , 'restart')
            gameElement.appendChild(restartButton)
            score = 0
            scoreScreen.textContent = score
            document.querySelector('.restart').addEventListener( 'click', function(){
                
                document.querySelector('.restart').remove()
                Game()
                
            })
        }
    }

}
Game()