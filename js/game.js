const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
'CAT',
//'CHICK', 
 'COW',
'DOG', 
 'ELEPHANT',
//  'FERRET',
//'FOX',
 //'FROG',
 'GIRAFFE',
'HIPPO',
'LION',
 'MONKEY',
 //'MOOSE',
//  'OWL',
 'PENGUIN',
 'PIG', 
 //'RABBIT',
//  'RAT',
//'TIGER',
//'ZEBRA',

 

]



const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


let firstCard ='';
let secondCard ='';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`Congratulations ${spanPlayer.innerHTML}!}`)
    }
}

const checkCards =() =>{
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter){

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
    
    firstCard = '';
    secondCard = '';

    checkEndGame();

    }else {
    setTimeout(() => {

        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

    firstCard = '';
    secondCard = '';

    }, 500);
}
}

// const revealCard = ({ target }) => {

//     if(target.parentNode.className.includes('reveal-card')){
//     }
  
//     if(firstCard === ''){
// target.parentNode.classList.add('reveal-card');
// firstCard = target.parentNode;
//   } else if (secondCard === ''){
//     target.parentNode.classList.add('reveal-card');
// secondCard = target.parentNode;


// checkCards();
//   }
// }
const revealCard = ({ target }) => {

    if(target.parentNode.className.includes('reveal-card')){
    return;
    }
    
    const card = target.parentNode;
    const character = card.getAttribute('data-character');
    if (character === 'PIG') {
        const sound = new Audio('big_pig_snort.mp3');
        sound.currentTime = 0;
        sound.play();
        setTimeout(() => {
        sound.pause();
        }, 400);
        }
    // if (character === 'PIG') {
    // const sound = new Audio('big_pig_snort.mp3');
    // sound.play();
    // }
    if (character === 'DOG') {
    const sound = new Audio('barks.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 400);
    }
    if (character === 'CAT') {
    const sound = new Audio('Cat2.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 400);
    }
    if (character === 'ELEPHANT') {
    const sound = new Audio('elephant4.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 400);
    }
    if (character === 'COW') {
    const sound = new Audio('mixkit-cow-moo-1744.wav');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 2000);
    }
    if (character === 'HIPPO') {
    const sound = new Audio('hippo2.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 800);
    }
    if (character === 'LION') {
    const sound = new Audio('lion.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 800);
    }
    if (character === 'TIGER') {
    const sound = new Audio('tiger6.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 400);
    }
    if (character === 'MONKEY') {
    const sound = new Audio('baboon2.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 400);
    }
    if (character === 'GIRAFFE') {
    const sound = new Audio('Camel.mp3');
    sound.play();
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
    sound.pause();
    }, 400);
    }


    if(firstCard === ''){
    card.classList.add('reveal-card');
    firstCard = card;
    } else if (secondCard === ''){
    card.classList.add('reveal-card');
    secondCard = card;
    checkCards();
    }
};

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

front.style.backgroundImage = `url('/${character}.jpg')`
card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', revealCard)
card.setAttribute('data-character', character)

return card;
}

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters];
  
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
  
    shuffledArray.forEach((character) => {
      const card = createCard(character);
      grid.appendChild(card);
    })

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', function() {
  // Remove all cards from the grid
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  // Reset first and second card variables
  firstCard = '';
  secondCard = '';
  // Reload the game with a new shuffle of cards
  loadGame();
});

  }

const startTimer = () => {
    this.loop = setInterval(()=>{
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);
}



window.onload =() => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
loadGame();
}
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let timeDisplay = document.getElementById("time");
let highScoresTable = document.getElementById("highScores");

let playerName;
let startTime;
let intervalId;

startBtn.addEventListener("click", function() {
  playerName = prompt("Enter your name: ");
  startTime = Date.now();
  startBtn.disabled = true;
  resetBtn.disabled = false;
  intervalId = setInterval(updateTime, 10);
});

resetBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  resetBtn.disabled = true;
  timeDisplay.innerHTML = "0";

  let currentTime = parseFloat(timeDisplay.innerHTML);
  let newRow = highScoresTable.insertRow(-1);
  let nameCell = newRow.insertCell(0);
  let timeCell = newRow.insertCell(1);
  nameCell.innerHTML = playerName;
  timeCell.innerHTML = currentTime + " seconds";
});

function updateTime() {
  let currentTime = (Date.now() - startTime) / 1000;
  timeDisplay.innerHTML = currentTime.toFixed(1);
}

let stopBtn = document.createElement("button");
stopBtn.innerHTML = "Stop";
document.body.appendChild(stopBtn);

stopBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  resetBtn.disabled = true;

  let currentTime = parseFloat(timeDisplay.innerHTML);
  let newRow = highScoresTable.insertRow(-1);
  let nameCell = newRow.insertCell(0);
  let timeCell = newRow.insertCell(1);
  nameCell.innerHTML = playerName;
  timeCell.innerHTML = currentTime + " seconds";
});

// Create an audio element
var audio = new Audio("fun-comedy-126302 (2).mp3");

// Play the audio when the game starts
audio.play();

// Function to stop the audio when the game is beaten
function stopAudio() {
  audio.pause();
}
