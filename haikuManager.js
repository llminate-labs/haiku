const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.',
  'Ocean\'s gentle roar,<br>waves caress the sandy shore,<br>peaceful heart restored.',
  'Mountains standing tall,<br>clouds caress their snowy peaks,<br>silent giants watch.',
  'Autumn leaves drift by,<br>crimson, gold, a fiery dance,<br>cool breeze whispers tales.'
];

const haikuImages = [
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-tr0334ROrP8yT8fz4rzMOLdf.png',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-wbWiDDAmtPHrjE9PE91McIcq.png',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-2YQoNOQ1YWcbd3wspwkqtTaV.png',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-1XvjVmRBo1fnzOY57TeJ2req.png',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-Va5bO3dJpKs766YV5ouNcfZP.png',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-ynocbjl9DsNHupcQnz2nNHMe.png'
];

let currentIndex = 0;
let autoRotate = true;
let haikuInterval;

function updateHaiku() {
  document.getElementById('haiku').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('haiku').innerHTML = haikus[currentIndex].replace(/'/g, "'");
    document.getElementById('haiku').style.backgroundImage = `url(${haikuImages[currentIndex]})`;
    document.getElementById('haiku').style.opacity = 1;
    updateBackground();
  }, 500);
}

function updateBackground() {
  const themeMap = { 0: 'spring', 1: 'winter', 2: 'morning', 3: 'ocean', 4: 'mountain', 5: 'autumn' };
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