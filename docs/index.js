// Adjusting the width of body & height of hero section 
document.addEventListener("DOMContentLoaded", function () {
  function resize(){
    document.querySelector('body').style.width = window.innerWidth + 'px';
    };

    window.addEventListener("resize", resize);
    resize();


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

  //Page Dropdown Function of the Navbar
  const SubPagesContainer = document.getElementById('sub-pagesDropdown');

  if (!pagesContainer) return;

  // Toggle dropdown on click
  SubPagesContainer.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent click from bubbling
    SubPagesContainer.classList.toggle('active');
  });

  // Hide dropdown on outside click
  document.addEventListener('click', function () {
    SubPagesContainer.classList.remove('active');
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
    'url("imgs/projects-imgs/IMG-20250709-WA0041.jpg")'
  ];

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlideInterval;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 1200}px)`;
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

  showSlide(currentIndex);
  startAutoSlide();

  //Page Dropdown Function of the Navbar
  const pagesContainer = document.getElementById('pagesDropdown');

  if (!pagesContainer) return;

  // Toggle dropdown on click
  pagesContainer.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent click from bubbling
    pagesContainer.classList.toggle('active');
  });

  // Hide dropdown on outside click
  document.addEventListener('click', function () {
    pagesContainer.classList.remove('active');
  });

  const HeightOrigin = window.innerHeight / 2;

  document.addEventListener('scroll', () => {
  scrollY >= HeightOrigin ? document.querySelector('.gototop-btn').style.display = "flex" : document.querySelector('.gototop-btn').style.display = "none";
  scrollY >= HeightOrigin * 2 ? document.querySelector('.navbar').style.background = "linear-gradient(to right, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.9))" : document.querySelector('.navbar').style.background = "transparent";
  });

});




