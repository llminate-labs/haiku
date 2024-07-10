const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.'
];

let currentIndex = 0;
let autoRotate = true;
let haikuInterval;

function updateHaiku() {
  document.getElementById('haiku').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('haiku').innerHTML = haikus[currentIndex];
    document.getElementById('haiku').style.opacity = 1;
  }, 500);
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

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    incrementHaikuIndex();
  }
  if (event.key === 'ArrowLeft') {
    decrementHaikuIndex();
  }
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
  if (!xDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let xDiff = xDown - xUp;

  if (xDiff > 0) {
    incrementHaikuIndex();
  } else {
    decrementHaikuIndex();
  }
  xDown = null;
}

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