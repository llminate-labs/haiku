const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.',
  'Ocean\'s gentle roar,<br>waves caress the sandy shore,<br>peaceful heart restored.',
  'Mountains standing tall,<br>clouds caress their snowy peaks,<br>silent giants watch.',
  'Autumn leaves drift by,<br>crimson, gold, a fiery dance,<br>cool breeze whispers tales.'
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
    updateHaikuImage();
  }, 500);
}

function updateBackground() {
  const themeMap = { 0: 'spring', 1: 'winter', 2: 'morning', 3: 'ocean', 4: 'mountain', 5: 'autumn' };
  const currentTheme = themeMap[currentIndex];
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function updateHaikuImage() {
  const imageMap = {
    0: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-ap0YwPT7XJJhih1oMT6Q92jA.png?st=2024-07-11T06%3A32%3A03Z&se=2024-07-11T08%3A32%3A03Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-10T22%3A32%3A14Z&ske=2024-07-11T22%3A32%3A14Z&sks=b&skv=2023-11-03&sig=a6J%2BvVmyJHnhw9zJt%2BsXshfjmb83VsYvjaHCrMX3TGQ%3D',
    1: 'https://example.com/winter.jpg',
    2: 'https://example.com/morning.jpg',
    3: 'https://example.com/ocean.jpg',
    4: 'https://example.com/mountain.jpg',
    5: 'https://example.com/autumn.jpg'
  };
  const currentImage = imageMap[currentIndex];
  document.getElementById('haikuImage').src = currentImage;
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