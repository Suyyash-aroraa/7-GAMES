const btnList = document.querySelectorAll('button');

const userChoice = document.querySelector('.userChoice')
const computerChoice = document.querySelector('.computerChoice')
const resultDisplay = document.querySelector('.result')

var computerChosen

var userChosen

const choices = ['rock', 'paper', 'scissor']

btnList.forEach(btn => btn.addEventListener('click', function(e){
    userChosen = e.target.id;
    let pic = "url('img/" + userChosen + ".png')";

    userChoice.style.backgroundImage = pic;

    generateComputer()
    resultChecker()
}))

function generateComputer(){
    var randomNumber = Math.floor(Math.random() * 3);
    computerChosen = choices[randomNumber];
    console.log(computerChosen)
    let picCompu = "url('img/" + computerChosen + ".png')";
    computerChoice.style.backgroundImage = picCompu;

}

function resultChecker(){
    if (userChosen === computerChosen){
        resultDisplay.innerHTML = "DRAW"
    }
    else if(userChosen === 'rock'){
        if (computerChosen === 'paper'){
            resultDisplay.innerHTML = "LOST"
        }
        else{
            resultDisplay.innerHTML = "WON"
        }
    }
    else if (userChosen === 'paper'){
        if (computerChosen === 'rock'){
            resultDisplay.innerHTML = "WON"
        }
        else{
            resultDisplay.innerHTML = "LOST"
        }
    }
    else{
        if (computerChosen === 'rock'){
            resultDisplay.innerHTML = "LOST"
        }
        else{
            resultDisplay.innerHTML = 'WON'
        }
    }
}

