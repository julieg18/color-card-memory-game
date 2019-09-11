const cards = document.querySelectorAll('.card-item');
const exampleColor = 'green';

function flipCard(event) {
  // we need to remove the card-item-flipped later...
  event.target.classList.add('card-item-flipped');
  event.target.style.backgroundColor = exampleColor;
}

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});
