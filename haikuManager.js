const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.'
];

let currentIndex = 0;

function updateHaiku(){
  document.getElementById('haiku').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('haiku').innerHTML = haikus[currentIndex];
    document.getElementById('haiku').style.opacity = 1;
  }, 500);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    incrementHaikuIndex();
  }
  if (event.key === 'ArrowLeft') {
    decrementHaikuIndex();
  }
});

function incrementHaikuIndex() {
  if (currentIndex < haikus.length - 1) { currentIndex++; }
  else { currentIndex = 0; }
  updateHaiku();
}

function decrementHaikuIndex() {
  if (currentIndex > 0) { currentIndex--; }
  else { currentIndex = haikus.length - 1; }
  updateHaiku();
}

document.getElementById('newHaikuBtn').addEventListener('click', incrementHaikuIndex);

document.getElementById('prevHaikuBtn').addEventListener('click', decrementHaikuSize);

setInterval(function() {
  incrementHaikuIndex();
}, 10000);
