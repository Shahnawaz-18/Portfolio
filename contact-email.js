(function() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
  script.onload = function() {
    emailjs.init('Z_XH3WuBUnc6U4fJW'); 
  };
  document.head.appendChild(script);
})();

window.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_jslns2j', 'template_fbnmcqj', form, 'Z_XH3WuBUnc6U4fJW')
      .then(function() {
        alert('Message sent successfully!');
        form.reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
        console.error(error);
      });
  });
});
