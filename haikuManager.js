const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.'
];

let currentIndex = 0;

document.getElementById('newHaikuBtn').addEventListener('click', function() {
  if (currentIndex < haikus.length - 1) { currentIndex++; }
  else { currentIndex = 0; }
  document.getElementById('haiku').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('haiku').innerHTML = haikus[currentIndex];
    document.getElementById('haiku').style.opacity = 1;
  }, 500);
});

document.getElementById('prevHaikuBtn').addEventListener('click', function() {
  if (currentIndex > 0) { currentIndex--; }
  else { currentIndex = haikus.length - 1; }
  document.getElementById('haiku').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('haiku').innerHTML = haikus[currentIndex];
    document.getElementById('haiku').style.opacity = 1;
  }, 500);
});
