function shareOnFacebook() {
  const haikuText = document.getElementById('haiku').innerText;
  const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href) + '&quote=' + encodeURIComponent(haikuText);
  window.open(url, '_blank');
}

function shareOnTwitter() {
  const haikuText = document.getElementById('haiku').innerText;
  const url = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(document.location.href) + '&text=' + encodeURIComponent(haikuText);
  window.open(url, '_blank');
}

function shareOnInstagram() {
  // Instagram does not support direct sharing via URL, this function will guide users
  alert('To share on Instagram, please save the haiku image and post it manually.');
}