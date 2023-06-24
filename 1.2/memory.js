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

for (var i = cardArray.length - 1; i>0; i--){
    let j = Math.floor(Math.random() * i);
    let k = cardArray[i];
    cardArray[i] = cardArray[j];
    cardArray[j] = k;
}

const gameGrid = document.querySelector('.game');

function createBoard(){
    for (let i = 0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        gameGrid.appendChild(card)
    }
}
createBoard()