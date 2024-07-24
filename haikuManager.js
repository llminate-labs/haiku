const haikus = [
  { text: 'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.', image: '/images/haiku1.png' },
  { text: 'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.', image: '/images/haiku2.png' },
  { text: 'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.', image: '/images/haiku3.png' },
  { text: 'Ocean\'s gentle roar,<br>waves caress the sandy shore,<br>peaceful heart restored.', image: '/images/haiku4.png' },
  { text: 'Mountains standing tall,<br>clouds caress their snowy peaks,<br>silent giants watch.', image: '/images/haiku5.png' },
  { text: 'Autumn leaves drift by,<br>crimson, gold, a fiery dance,<br>cool breeze whispers tales.', image: '/images/haiku6.png' }
];
let currentIndex = 0;

function updateHaiku() {
  document.getElementById('slideshow').innerHTML = `<img src=${haikus[currentIndex].image} alt='Haiku Image'><div>${haikus[currentIndex].text}</div>`;
}

function incrementHaikuIndex() {
  if (currentIndex < haikus.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateHaiku();
}

function decrementHaikuIndex() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = haikus.length - 1;
  }
  updateHaiku();
}
