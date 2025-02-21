
let radios = document.querySelectorAll(' .nav-button');

radios.forEach((radio, index) => {
  radio.addEventListener('click', () => {
    document.querySelector('.carousel-items').style.animation = 'none';
    document.querySelector('.carousel-items').style.transform = `translate(-${index * 100}%)`;
    radios.forEach(r => r.classList.remove('active'));
    radio.classList.add('active');
  });
});