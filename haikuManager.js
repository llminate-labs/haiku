<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta http-equiv='Content-Security-Policy' content="default-src 'self'; script-src 'self' https://js.stripe.com; connect-src 'self' https://api.stripe.com; img-src 'self'; style-src 'self'; object-src 'none';">
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <link rel='stylesheet' href='styles.css'>
  <link rel='stylesheet' href='buttonStyles.css'>
  <script src='https://js.stripe.com/v3/'></script>
  <script src='app.js' defer></script>
  <title>Haiku Home</title>
</head>

<body>
  <div class='container'>
    <h1>Welcome to Our Enhanced Haiku Gallery</h1>
    <p>Use ← and → keys or the buttons below to navigate through the haikus, or just wait for the automatic transition.</p>
    <button id='prevHaikuBtn' role='button' tabindex='0'>Previous Haiku</button>
    <button id='newHaikuBtn' role='button' tabindex='0'>Next Haiku</button>
    <div id='haikuContainer' role='region' aria-live='polite'>
      <img id='haikuImage' src='' alt='Haiku Image' style='width:100%; height:auto; margin-bottom:20px;'>
      <p id='haiku' tabindex='0'>Loading Haikus...</p>
      <button id='buyHaikuBtn' role='button' tabindex='0'>Buy This Haiku</button>
    </div>
  </div>
  <script src='haikuManager.js' defer></script>
  <script src='purchaseManager.js' defer></script>
</body>

</html>