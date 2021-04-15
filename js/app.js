// Button animation (ripple effect)

const links = document.querySelectorAll('a');
links.forEach(link => {
  let re = /[a-zA-Z]+\-cta/;
  if (re.test(link.classList[0])) {
    execRipple(link);
  }
})

function execRipple(elem) {
  elem.addEventListener('mouseover', (e) => {
    let x = e.clientX - e.target.offsetLeft;
    const {top} = e.target.getBoundingClientRect();
    let y = e.clientY - top;
  
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
  
    elem.appendChild(ripples);
  
    setTimeout(() => {
      ripples.remove()
    }, 600);
  });
}

// Swiper (testimonials)

const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    // depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  loop: true
});