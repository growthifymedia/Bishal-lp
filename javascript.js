
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





!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '598607559739677');
fbq('track', 'PageView');
