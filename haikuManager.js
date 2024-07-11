const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.',
  'Ocean\'s gentle roar,<br>waves caress the sandy shore,<br>peaceful heart restored.',
  'Mountains standing tall,<br>clouds caress their snowy peaks,<br>silent giants watch.',
  'Autumn leaves drift by,<br>crimson, gold, a fiery dance,<br>cool breeze whispers tales.'
];

const haikuImages = [
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-ap0YwPT7XJJhih1oMT6Q92jA.png?st=2024-07-11T06%3A32%3A03Z&se=2024-07-11T08%3A32%3A03Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-10T22%3A32%3A14Z&ske=2024-07-11T22%3A32%3A14Z&sks=b&skv=2023-11-03&sig=a6J%2BvVmyJHnhw9zJt%2BsXshfjmb83VsYvjaHCrMX3TGQ%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-3DitS9hoWk2iviLfjauWiUVA.png?st=2024-07-11T06%3A33%3A16Z&se=2024-07-11T08%3A33%3A16Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A23%3A33Z&ske=2024-07-12T02%3A23%3A33Z&sks=b&skv=2023-11-03&sig=FKDt3vpiDd9ZEfVfxDsKB0MIEmYwXgaeN6LP5dlcKOg%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-ZMhNG2WYfFCr72KdLLpdnXjh.png?st=2024-07-11T06%3A33%3A24Z&se=2024-07-11T08%3A33%3A24Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A19%3A47Z&ske=2024-07-12T02%3A19%3A47Z&sks=b&skv=2023-11-03&sig=Hu0uqdy88ATF1zJuaI3hhGtzLkB4TlHPaa8rk5lS1f0%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-OKAMHQqpJ85Oev7h3PAWBEW8.png?st=2024-07-11T06%3A33%3A36Z&se=2024-07-11T08%3A33%3A36Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A31%3A54Z&ske=2024-07-12T02%3A31%3A54Z&sks=b&skv=2023-11-03&sig=br5hjlSdPxz4eHPPtV4%2BBuCfCLjEetzcEjdRRHiIJ8A%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-5PNBrSsQBOf7cvah3q5dGric.png?st=2024-07-11T06%3A33%3A46Z&se=2024-07-11T08%3A33%3A46Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A30%3A02Z&ske=2024-07-12T02%3A30%3A02Z&sks=b&skv=2023-11-03&sig=GY5tJJbL0rUX3jhL0SQqwxJD26pUHGWorm/OEWB4uJs%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-bnjhQaiWpmaJwbxdOKKptVNT.png?st=2024-07-11T06%3A33%3A58Z&se=2024-07-11T08%3A33%3A58Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A42%3A23Z&ske=2024-07-12T02%3A42%3A23Z&sks=b&skv=2023-11-03&sig=37o/1EsbqCirZc2jxtmwToxzrPLrOJjVvM6%2BprTLAHs%3D'
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
  const haikuImage = haikuImages[currentIndex];
  document.body.style.backgroundImage = 'url(' + haikuImage + ')';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.transition = 'background-image 0.5s ease-in-out';
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