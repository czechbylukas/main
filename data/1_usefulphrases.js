<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <title>Practice: Useful Phrases – CzechByLukas</title>

  <!-- ✅ Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9067674021614925"
          crossorigin="anonymous"></script>
  <meta name="google-adsense-account" content="ca-pub-9067674021614925">

  <!-- ✅ Shared & Practice-Specific CSS -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/practice.css">
</head>

<body class="vocab-page">

  <!-- ✅ Page Title -->
  <h1>Practice Useful Phrases</h1>

  <!-- ✅ Navigation Buttons (Previous / Next) -->
  <div class="big-buttons">
    <button id="prevBtn">← Previous</button>
    <button id="nextBtn">Next →</button>
  </div>

  <!-- ✅ Flashcards -->
  <div class="vocab-container">
    <div id="englishCard" class="card"></div>
    <!-- no hardcoded text here; JS inserts "Click to show Czech" -->
    <div id="czechCard" class="card"></div>
  </div>

  <!-- ✅ Progress Bar + Numeric Counter -->
  <div class="progress-wrapper">
    <div class="progress-bar">
      <div id="progress" class="progress"></div>
    </div>
    <div id="progressText" class="progress-text"></div>
  </div>

  <!-- ✅ Vocabulary & Test Buttons -->
  <div class="big-buttons">
    <a href="../vocabulary/1_usefulphrases.html">📘 Vocabulary</a>
    <a href="../tests/1_usefulphrases.html">📝 Test</a>
  </div>

  <!-- ✅ Small Buttons: Home & Exercise List -->
  <div class="small-buttons">
    <a href="../index.html">🏠 Home</a>
    <a href="../exercise/index.html">🧠 Exercise List</a>
  </div>

  <!-- ✅ Load Vocabulary Data First -->
  <script src="../data/1_usefulphrases.js"></script>

  <!-- ✅ Then Load Practice Logic -->
  <script src="../js/practice.js"></script>

  <!-- ✅ Footer (Fetched Dynamically) -->
  <script>
    fetch("../css/footer.html")
      .then(res => res.text())
      .then(data => document.body.insertAdjacentHTML("beforeend", data))
      .catch(err => console.error("Footer failed to load:", err));
  </script>

</body>
</html>
