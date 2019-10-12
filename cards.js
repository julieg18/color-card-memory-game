const cards = document.querySelectorAll('.scene');
const renderCardsButton = document.querySelector('.render-cards-btn');
const exampleColor = 'green';
const FLIPPED_CSS_CLASS = 'is-flipped';
const MAXIMUM_FLIPPED_CARDS = 2;

// you can create object to set the colors to upcoming elements

let cardArray = [{
    front_color: 'orange',
    back_color: 'green',
    id: 1
  },
  {
    front_color: 'yellow',
    back_color: 'red',
    id: 2
  },
  {
    front_color: 'orange',
    back_color: 'pink',
    id: 3
  }
];



function flipCard(event) {
  // TODO - Check other flipped cards when selecting for the 3rd card to flip
  const element = event.target;
  const isFlipped = element.classList.contains(FLIPPED_CSS_CLASS);
  const flippedCounts = getFlippedCards();

  if (flippedCounts === MAXIMUM_FLIPPED_CARDS) {
    unflipAllCards();
  }

  if (isFlipped) {
    event.target.classList.remove(FLIPPED_CSS_CLASS);
  } else {
    event.target.classList.add(FLIPPED_CSS_CLASS);
  }
}

function getFlippedCards() {
  return Array.from(cards).filter(card => {
    console.log('card.classList', card.classList);
    card.classList.contains(FLIPPED_CSS_CLASS);
  });
}

function unflipAllCards() {
  Array.from(cards).forEach(card => {
    card.classList.remove(FLIPPED_CSS_CLASS);
  });
}

function createCard() {
  const scene = document.createElement('div');
  const card = document.createElement('div');
  const frontCard = document.createElement('div');
  const backCard = document.createElement('div');

  scene.classList.add('scene');
  card.classList.add('card');
  frontCard.classList.add('card__face', 'card__face--front');
  backCard.classList.add('card__face', 'card__face--back');
  card.onclick = flipCard;

  card.appendChild(frontCard);
  card.appendChild(backCard);

  scene.appendChild(card);

  document.querySelector('.cards-container').appendChild(scene);
}

function renderCards(event) {
  createCard();
  var cardElem = document.getElementsByClassName('scene');

  cardArray.forEach((card, index) => {
    if (cardElem && cardElem.length !== 0 && cardElem[index]) {
      cardElem[index].firstChild.firstChild.style.background = card.front_color;
      cardElem[index].firstChild.lastChild.style.background = card.back_color;
    }
  })

}

renderCardsButton.addEventListener('click', renderCards);