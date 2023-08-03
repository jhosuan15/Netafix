let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.addEventListener('scroll', revealDivs);

function revealDivs() {
  var boxes = document.querySelectorAll('.container');
  
	
  
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    var boxTop = box.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    if (boxTop < windowHeight) {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
    }
  }
}
