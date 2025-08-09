document.addEventListener("DOMContentLoaded", () => {
  //Loader
      setTimeout(() => {
        document.getElementById("loader-wrapper").classList.add("fade-out");
        document.body.classList.add("loaded");
      }, 500);
    });

// Adjusting the width of body & height of hero section 
document.addEventListener("DOMContentLoaded", function () {

  //Navbar Pages Dropdown

  const NavBarPages = document.getElementById('pagesDropdown');
  const NavBarPagesMenu = document.getElementById('dropdownMenu');

  NavBarPages.addEventListener('click', (event) => {
    event.stopPropagation();
    NavBarPagesMenu.classList.toggle('show-dropdown');
  });

  document.addEventListener('click', (event) => {
    if (!NavBarPages.contains(event.target) && !NavBarPages.contains(event.target)) {
      NavBarPagesMenu.classList.remove('show-dropdown');
    }
  });
 
  //Function of Navbar Dropdown Bar

  const barIcon = document.querySelector(".navbar-bar-icon");
  const crossIcon = document.querySelector(".navbar-cross-icon");
  const dropdownMenu = document.querySelector(".navbar-bar-dropdown");

  dropdownMenu.style.display = "none";
  crossIcon.style.display = "none";

  barIcon.addEventListener("click", () => {
    dropdownMenu.style.display = "flex";
    barIcon.style.display = "none";
    crossIcon.style.display = "inline-block";
  });

  crossIcon.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
    barIcon.style.display = "inline-block";
    crossIcon.style.display = "none";
  });

  //Function of Pages Inside Navbar Dropdown

  const subPagesContainer = document.getElementById('sub-pagesContainer');
  const subPagesDropdown = document.getElementById('sub-pagesDropdown');

  subPagesContainer.addEventListener('click', (event) => {
    event.stopPropagation();
    subPagesDropdown.classList.toggle('show-dropdown');
  });

  document.addEventListener('click', (event) => {
    if (!subPagesContainer.contains(event.target) && !subPagesDropdown.contains(event.target)) {
      subPagesDropdown.classList.remove('show-dropdown');
    }
  });

  //Function of carousel

  const slider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-prev-btn');
  const nextBtn = document.querySelector('.hero-next-btn');
  const heroContainer = document.querySelector('.hero');
  
  const backgroundImages = [
    'url("imgs/projects-imgs/IMG-20250709-WA0027.jpg")',
    'url("imgs/projects-imgs/IMG-20250709-WA0028.jpg")',
    'url("imgs/projects-imgs/IMG-20250709-WA0041.jpg")',
    'url("imgs/projects-imgs/IMG-20250709-WA0020.jpg")',
    'url("imgs/projects-imgs/IMG-20250709-WA0038.jpg")',
  ];

  let currentIndex = 0;
  const totalSlides = slides.length;
  document.querySelector('.hero-slider').style.width = `${totalSlides * 100}vw`;
  let autoSlideInterval;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}vw)`;
    heroContainer.style.backgroundImage = backgroundImages[index];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 8000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  let StartX = 0;

  heroContainer.addEventListener("touchstart", e => {
    StartX = e.touches[0].clientX;
  });

  heroContainer.addEventListener("touchend", e => {
    let EndX = e.changedTouches[0].clientX;
    let diff = StartX - EndX;

    if(Math.abs(diff) > 0){
      if(diff > 50) {
        currentIndex = (currentIndex + 1) % totalSlides;
      }
      else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      }
    }
    stopAutoSlide();
    showSlide(currentIndex);
    startAutoSlide();
  })

  showSlide(currentIndex);
  startAutoSlide();

  //Show/Hide of Go To Top Buttton & Navbar
  const HeightOrigin = window.innerHeight / 2;

  document.addEventListener('scroll', () => {
  scrollY >= HeightOrigin ? document.querySelector('.gototop-btn').style.display = "flex" : document.querySelector('.gototop-btn').style.display = "none";
  scrollY >= HeightOrigin * 2 ? document.querySelector('.navbar').style.background = "linear-gradient(to right, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.9))" : document.querySelector('.navbar').style.background = "transparent";
  });

  document.querySelector('.currYear').textContent = new Date().getFullYear();
});




