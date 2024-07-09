const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.'
];

document.getElementById('newHaikuBtn').addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * haikus.length);
  document.getElementById('haiku').innerHTML = haikus[randomIndex];
});
