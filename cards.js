const cards = document.querySelectorAll('.scene');
const exampleColor = 'green';
const FLIPPED_CSS_CLASS = 'is-flipped';
const MAXIMUM_FLIPPED_CARDS = 2;

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
  return Array.from(cards)
    .filter(card => {
      console.log('card.classList', card.classList);
      card.classList.contains(FLIPPED_CSS_CLASS);
    });
}

function unflipAllCards() {
  Array.from(cards).forEach(card => {
    card.classList.remove(FLIPPED_CSS_CLASS);
  })
}

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});
