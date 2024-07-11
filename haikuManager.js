const haikus = [
  {
    text: 'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-mVxBAo9q4fan5FDKqmUmsyEn.png'
  },
  {
    text: 'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-aUnBGsdAd4vnA5BgFM3J9WqA.png'
  },
  {
    text: 'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-OkTu7c5W5kaVKQTpubm7c3XP.png'
  },
  {
    text: 'Ocean\'s gentle roar,<br>waves caress the sandy shore,<br>peaceful heart restored.',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-v3tuux2b2NrvJGKEfodj93Vl.png'
  },
  {
    text: 'Mountains standing tall,<br>clouds caress their snowy peaks,<br>silent giants watch.',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-oCDPbi0PCAg27BJhJSht2pVZ.png'
  },
  {
    text: 'Autumn leaves drift by,<br>crimson, gold, a fiery dance,<br>cool breeze whispers tales.',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-wz7vpoOSEhHSWbcBP0ZPn8cp.png'
  }
];

let currentIndex = 0;
let autoRotate = true;
let haikuInterval;

function updateHaiku() {
  document.getElementById('haiku').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('haiku').innerHTML = haikus[currentIndex].text.replace(/'/g, "'");
    document.getElementById('haikuImage').src = haikus[currentIndex].image;
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