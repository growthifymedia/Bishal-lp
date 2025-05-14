
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

let duration = 15 * 60; // 15 minutes in seconds
const countdownElement = document.getElementById('countdown');

const timer = setInterval(() => {
  const minutes = String(Math.floor(duration / 60)).padStart(2, '0');
  const seconds = String(duration % 60).padStart(2, '0');
  countdownElement.textContent = `${minutes}:${seconds}`;
  duration--;

  if (duration < 0) {
    clearInterval(timer);
    countdownElement.textContent = "00:00";
  }
}, 1000);


  document.querySelectorAll('.redirect-button').forEach(function(button) {
    button.addEventListener('click', function() {
      window.location.href = 'https://link.thekingofconfidence.com/checkout';
    });
  });

