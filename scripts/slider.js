const slider = document.querySelector('.slider-container');
const sliderImgs = document.querySelectorAll('.slider-container img');
const sliderCard = document.querySelector('.slider-card');
const header = document.getElementById('header');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let count = 0;

const size = sliderCard.clientWidth;

slider.style.transform = 'translateX(' - size * count + 'px)';

nextBtn.addEventListener('click', function () {
  if (count >= sliderImgs.length - 1) count = -1;

  slider.style.transition = 'transform 0.4s ease-out';
  count++;
  if (count === 0) header.style.opacity = '1';
  else header.style.opacity = '0';
  slider.style.transform = 'translateX(' + -size * count + 'px)';
});

prevBtn.addEventListener('click', function () {
  if (count <= 0) count = sliderImgs.length;

  slider.style.transition = 'transform 1s ease-out';
  count--;
  if (count === 0) header.style.opacity = '1';
  else header.style.opacity = '0';
  slider.style.transform = 'translateX(' + -size * count + 'px)';
});

setInterval(function () {
  if (count >= sliderImgs.length - 1) count = -1;

  slider.style.transition = 'transform 1s ease-out';
  count++;
  if (count === 0) header.style.opacity = '1';
  else header.style.opacity = '0';
  slider.style.transform = 'translateX(' + -size * count + 'px)';
}, 3000);
