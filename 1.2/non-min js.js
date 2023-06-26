var score = 0
function Game(){
    const cardArray = [
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: "fish",
            img: "img/fish.png"
        },
        {
            name: "pizza",
            img: "img/pizza.png"
        },
        {
            name: "corn",
            img: "img/corn.png"
        },
        {
            name: "burger",
            img: "img/burger.png"
        },
        {
            name: "cabbage",
            img: "img/cabbage.png"
        },
        {
            name: "cupcake",
            img: "img/cupcake.png"
        },
        {
            name: "broccoli",
            img: "img/broccoli.png"
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: "fish",
            img: "img/fish.png"
        },
        {
            name: "pizza",
            img: "img/pizza.png"
        },
        {
            name: "corn",
            img: "img/corn.png"
        },
        {
            name: "burger",
            img: "img/burger.png"
        },
        {
            name: "cabbage",
            img: "img/cabbage.png"
        },
        {
            name: "cupcake",
            img: "img/cupcake.png"
        },
        {
            name: "broccoli",
            img: "img/broccoli.png"
        }
    ];
    const scoreid = document.getElementById('score');
    var userSelected = [];

    for (var i = cardArray.length - 1; i>0; i--){
        let j = Math.floor(Math.random() * i);
        let k = cardArray[i];
        cardArray[i] = cardArray[j];
        cardArray[j] = k;
    }
    scoreid.innerHTML = '' + score;
    const gameGrid = document.querySelector('.game');

    function createBoard(){
        for (let i = 0; i<cardArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'img/blank.png');
            card.setAttribute('data-id', i);
            card.setAttribute('id', 'img-board');
            card.addEventListener("click", flipCard);
            gameGrid.appendChild(card);
        }
    }
    createBoard();

    const imgBoardList = document.querySelectorAll('#img-board');
    var userSelectedId = [];
    const blankSrc = 'img/blank.png';
    function flipCard() {
        var dataId = $(this).attr('data-id');
        this.setAttribute('src', cardArray[dataId]['img']);
        userSelected.push(cardArray[dataId].name);
        userSelectedId.push(dataId);
        console.log('id : ' + userSelectedId + 'LIST' + userSelected);
        if (userSelected.length === 2){
            setTimeout(()=> {
                checkAnswer()
            }, '500');
        }
    }
    function checkAnswer(){
        if (userSelected[0]===userSelected[1]){
            imgBoardList[userSelectedId[0]].setAttribute('src', cardArray[userSelectedId[0]].img);
            imgBoardList[userSelectedId[1]].setAttribute('src', cardArray[userSelectedId[1]].img);
            imgBoardList[userSelectedId[0]].removeEventListener('click', flipCard);
            imgBoardList[userSelectedId[1]].removeEventListener('click', flipCard);
            userSelected = [];
            userSelectedId = [];
            score += 10;
            scoreid.innerHTML = '' + score;

            if (score % 80 === 0  && score !== 0){
                alert('GOOD JOB');
            
            };

        }
        else{
            imgBoardList[userSelectedId[0]].setAttribute('src', blankSrc );
            imgBoardList[userSelectedId[1]].setAttribute('src', blankSrc );
            userSelected = [];
            userSelectedId = [];
        };
    };

};

Game()
document.querySelector("#restart").addEventListener('click', function(){
    var imgElements = document.querySelectorAll('.game>img');
    for (let i = 0; i<imgElements.length;i++){
        imgElements[i].remove();
    }
    Game();
})