const haikus = [
  'Cherry blossoms fade,<br>Silent under moonlit sky,<br>Spring whispers goodbye.',
  'Winter solitude—<br>a single crow flutters down,<br>snow muffles the land.',
  'Morning glory blooms,<br>sunrise peeks through whispering leaves,<br>day awakes anew.',
  'Ocean\'s gentle roar,<br>waves caress the sandy shore,<br>peaceful heart restored.',
  'Mountains standing tall,<br>clouds caress their snowy peaks,<br>silent giants watch.',
  'Autumn leaves drift by,<br>crimson, gold, a fiery dance,<br>cool breeze whispers tales.'
];

const haikuImages = [
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-gcSQxgM5p1Ft2HpvVmWYAfAF.png?st=2024-07-11T16%3A24%3A09Z&se=2024-07-11T18%3A24%3A09Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A32%3A16Z&ske=2024-07-12T02%3A32%3A16Z&sks=b&skv=2023-11-03&sig=zzuvdkSfiOwfswUo2WH5H5F1XjMwul02tPAV/G9tDBE%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-a0iPi5YGxHCMxnT7JIULoYab.png?st=2024-07-11T16%3A26%3A19Z&se=2024-07-11T18%3A26%3A19Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-10T22%3A51%3A35Z&ske=2024-07-11T22%3A51%3A35Z&sks=b&skv=2023-11-03&sig=rcgnRQkKmfbSgS9Kc/uamxEuu318WJzEsOpf1rfogLs%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-EtoXhJ1iXME1mQqc2BPZ0QCC.png?st=2024-07-11T16%3A27%3A49Z&se=2024-07-11T18%3A27%3A49Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-10T23%3A55%3A34Z&ske=2024-07-11T23%3A55%3A34Z&sks=b&skv=2023-11-03&sig=oQijRwPwIujVQvkUMFvljM3HIyc2NluXrtB8ZMrumXU%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-UgTCLdLUVWuhi1cWpdG7HMA5.png?st=2024-07-11T16%3A27%3A58Z&se=2024-07-11T18%3A27%3A58Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A21%3A09Z&ske=2024-07-12T02%3A21%3A09Z&sks=b&skv=2023-11-03&sig=qZTAaSeb1Rn6tSeQYyhyRKLpwmWWulah7/cZSQ67I4M%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-d0Oh17EzPeeqeiXmG440lWPu.png?st=2024-07-11T16%3A28%3A08Z&se=2024-07-11T18%3A28%3A08Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A20%3A48Z&ske=2024-07-12T02%3A20%3A48Z&sks=b&skv=2023-11-03&sig=6yCSIKrBFciWZRcTRjt2trLz1YDQUT/tZgEjNIVv8Eo%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xoveDohUTeWTwd7uYScv2uyz/user-7E63qmNDGeNd8DOac52nI0qL/img-AkCQ9fmBPjt6QNnTkiV3G8bi.png?st=2024-07-11T16%3A28%3A17Z&se=2024-07-11T18%3A28%3A17Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A24%3A01Z&ske=2024-07-12T02%3A24%3A01Z&sks=b&skv=2023-11-03&sig=Dy2qC8RKt73iExzaBwf7r%2Bhn4MbUZOhSc4xJLPbpIJo%3D'
];

let currentIndex = 0;
let autoRotate = true;
let haikuInterval;
let hourlyHaikuUpdate;

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
  const netlifyImageUrl = `/.netlify/images?url=${encodeURIComponent(haikuImage)}`;
  document.body.style.backgroundImage = 'url(' + netlifyImageUrl + ')';
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

function startHourlyHaikuUpdate() {
  hourlyHaikuUpdate = setInterval(function() {
    incrementHaikuIndex();
  }, 60 * 60 * 1000); // Every hour
}

document.addEventListener('DOMContentLoaded', function() {
  updateHaiku();
  if (autoRotate) startRotation();
  startHourlyHaikuUpdate();
  applySeasonalTheme();
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

function applySeasonalTheme() {
  const month = new Date().getMonth();
  let season;
  if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else if (month >= 8 && month <= 10) {
    season = 'autumn';
  } else {
    season = 'winter';
  }
  document.documentElement.setAttribute('data-theme', season);
}