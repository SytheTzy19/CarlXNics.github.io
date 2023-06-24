function loadAnimation() {
    document.getElementById('loading-animation').classList.remove('hidden');
    setTimeout(function() {
      window.location.href = 'second-page.html';
    }, 3000); // Adjust the delay (in milliseconds) according to your preference
  }
  