/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu');
 /*---------------------------navbar js ends here-----------------------------*/ 
 /*---------------sec-01 js starts here----------------*/
 // Access the Images
 document.addEventListener('DOMContentLoaded', () => {
    let slideImages = document.querySelectorAll('.slides img');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let dots = document.querySelectorAll('.dot');
    let counter = 0;
    let interval;
  
    function showSlide(index) {
      slideImages.forEach((img, i) => {
        img.classList.remove('active');
        img.style.animation = '';
      });
      dots.forEach(dot => dot.classList.remove('active'));
  
      slideImages[index].classList.add('active');
      dots[index].classList.add('active');
    }
  
    function slideNext() {
      slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
      counter = (counter + 1) % slideImages.length; // Loop back to the first image
      slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
      showSlide(counter);
    }
  
    function slidePrev() {
      slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
      counter = (counter - 1 + slideImages.length) % slideImages.length; // Loop back to the last image
      slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
      showSlide(counter);
    }
  
    function autoSliding() {
      interval = setInterval(slideNext, 3000); // Change slide every 3 seconds
    }
  
    function stopSliding() {
      clearInterval(interval);
    }
  
    function indicators() {
      dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === counter) {
          dot.className += ' active';
        }
      });
    }
  
    function switchImage(currentImage) {
      let imageId = parseInt(currentImage.getAttribute('attr'), 10);
      if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
      } else if (imageId < counter) {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
      }
      counter = imageId;
      slideImages[counter].style.animation = (imageId > counter ? 'next2' : 'prev2') + ' 0.5s ease-in forwards';
      showSlide(counter);
    }
  
    next.addEventListener('click', () => {
      stopSliding();
      slideNext();
      autoSliding();
    });
  
    prev.addEventListener('click', () => {
      stopSliding();
      slidePrev();
      autoSliding();
    });
  
    const container = document.querySelector('.slide-container');
    container.addEventListener('mouseover', stopSliding);
    container.addEventListener('mouseout', autoSliding);
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        stopSliding();
        switchImage(dot);
        autoSliding();
      });
    });
  
    showSlide(counter); // Initial display
    autoSliding(); // Start auto sliding
  });
 /*---------------sec-01 js ends here----------------*/
 /*------------testimonial section js starts here-----------*/ 
 let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.navigation-dots');

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
    updateDots();
}

function updateSlider() {
    const slider = document.querySelector('.testimonial-slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
    updateDots();
}

createDots();
setInterval(nextSlide, 3000);
 /*------------testimonial section js ends here-----------*/ 