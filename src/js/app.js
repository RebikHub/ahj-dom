console.log('app started');

const gameField = document.getElementById('game');

for (let i = 1; i < 17; i += 1) {
  const cell = document.createElement('div');
  cell.classList.add('game-cell');
  gameField.appendChild(cell);
}

const completeField = Array.from(document.querySelectorAll('.game-cell'));

function getRandomPicture(field) {
  field.forEach((elem) => {
    if (elem.classList.contains('picture')) {
      elem.classList.remove('picture');
    }
  });
  const random = field[Math.floor(Math.random() * field.length)];
  return random.classList.add('picture');
}

getRandomPicture(completeField);

setInterval(() => {
  getRandomPicture(completeField);
}, 2000);
