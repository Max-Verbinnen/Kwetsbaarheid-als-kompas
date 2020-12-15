// Button animation (ripple effect)

const buttons = document.querySelectorAll('a');

buttons.forEach(btn => {
  btn.addEventListener('mouseover', (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
  
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
  
    btn.appendChild(ripples);
  
    setTimeout(() => {
      ripples.remove()
    }, 600);
  });
});