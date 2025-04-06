window.addEventListener('load', () => {
    document.querySelector('.imgbox').classList.add('loaded');
    document.querySelector('.me').classList.add('loaded');
    document.querySelector('.nav').classList.add('loaded');
  });

window.addEventListener('scroll',function(){
  document.querySelector('.bt').classList.add('scr')
})

  const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Auto slide (optional)
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 9000); //


function show (){
  document.querySelector('.nav').classList.add('show')
  document.querySelector('.menu').classList.add('show')
  document.querySelector('.ul').classList.add('show')
  document.querySelector('.logo').classList.add('show')
  document.querySelector('.menu').classList.add('hide')
  document.querySelector('.close').classList.add('show')
  document.querySelector('.me').classList.add('show')
  console.log(1)
}

function hide(){
  document.querySelector('.nav').classList.remove('show')
  document.querySelector('.menu').classList.remove('show')
  document.querySelector('.ul').classList.remove('show')
  document.querySelector('.logo').classList.remove('show')
  document.querySelector('.menu').classList.remove('hide')
  document.querySelector('.close').classList.remove('show')
  document.querySelector('.me').classList.remove('show')

  console.log(1)
}