const cards = document.querySelectorAll('.scene');
const renderCardsButton = document.querySelector('.render-cards-btn');
const exampleColor = 'green';
const FLIPPED_CSS_CLASS = 'is-flipped';
const MAXIMUM_FLIPPED_CARDS = 2;
let cardArray = [
  {
    backColor: 'green',
    id: 1
  },
  {
    backColor: 'orange',
    id: 2
  },
  {
    backColor: 'red',
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

  card.appendChild(frontCard);
  card.appendChild(backCard);

  scene.appendChild(card);

  document.querySelector('.cards-container').appendChild(scene);
}

function renderCards(event) {
  createCard();
}

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});

renderCardsButton.addEventListener('click', renderCards);
