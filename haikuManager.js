const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.',
  'Ocean\'s gentle roar,<br>waves caress the sandy shore,<br>peaceful heart restored.',
  'Mountains standing tall,<br>clouds caress their snowy peaks,<br>silent giants watch.',
  'Autumn leaves drift by,<br>crimson, gold, a fiery dance,<br>cool breeze whispers tales.',
  'Stars twinkle above,<br>night's velvet cloak envelops,<br>dreams weave silently.',
  'River's gentle flow,<br>stones whisper ancient stories,<br>water's timeless song.',
  'Forest's morning mist,<br>green canopy's soft murmur,<br>earth's breath, cool and fresh.',
  'Fields of golden wheat,<br>swaying with the summer breeze,<br>sun-kissed waves of grain.',
  'Moonlight on the lake,<br>quiet ripples kiss the shore,<br>night's serene embrace.'
];

let currentIndex = 0;
let autoRotate = true;
let haikuInterval;

function updateHaiku() {
  document.getElementById('haiku').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('haiku').innerHTML = haikus[currentIndex].replace(/'/g, "'");
    document.getElementById('haiku').style.opacity = 1;
    updateBackground();
  }, 500);
}

function updateBackground() {
  const themeMap = { 0: 'spring', 1: 'winter', 2: 'morning', 3: 'ocean', 4: 'mountain', 5: 'autumn', 6: 'night', 7: 'river', 8: 'forest', 9: 'summer', 10: 'lake' };
  const currentTheme = themeMap[currentIndex];
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function startRotation() {
  haikuInterval = setInterval(function() {
    incrementHaikuIndex();
  }, 5000);
}

function stopRotation() {
  clearInterval(haikuInterval);
}

document.addEventListener('DOMContentLoaded', function() {
  updateHaiku();
  if (autoRotate) startRotation();
});

document.getElementById('newHaikuBtn').addEventListener('click', incrementHaikuIndex);
document.getElementById('prevHaikuBtn').addEventListener('click', decrementHaikuIndex);
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    incrementHaikuIndex();
  }
  if (event.key === 'ArrowLeft') {
    decrementHaikuIndex();
  }
});

function incrementHaikuIndex() {
  stopRotation();
  if (currentIndex < haikus.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateHaiku();
  if (autoRotate) startRotation();
}

function decrementHaikuIndex() {
  stopRotation();
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = haikus.length - 1;
  }
  updateHaiku();
  if (autoRotate) startRotation();
}