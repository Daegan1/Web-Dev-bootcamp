//Init tooltips
tippy('.link', {
  placement: 'bottom',
});

//Toggle mode
const toggle = document.querySelector('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');

toggle.addEventListener('click', () => {
  if (body.classList.contains('text-gray-900')) {
    toggle.innerHTML = '☀️';
    body.classList.remove('text-gray-900');
    body.classList.add('text-gray-100');
    profile.classList.remove('bg-white');
    profile.classList.add('bg-gray-900');
  } else {
    toggle.innerHTML = '🌙';
    body.classList.remove('text-gray-100');
    body.classList.add('text-gray-900');
    profile.classList.remove('bg-gray-900');
    profile.classList.add('bg-white');
  }
});

const btn = document.querySelector('#btn');
(function () {
  emailjs.init('user_id');
})();

btn.addEventListener('click', function (e) {
  var templateParams = {
    name: 'James',
    notes: 'Check this out!',
  };

  emailjs.send('service_id', 'template_id', templateParams).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function (error) {
      console.log('FAILED...', error);
    },
  );
});
