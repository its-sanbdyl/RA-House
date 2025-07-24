// Adjusting the width of body & height of hero section 
document.addEventListener("DOMContentLoaded", function () {
function resize(){
    document.querySelector('body').style.maxWidth = window.innerWidth + 'px';
    };

    window.addEventListener("resize", resize);
    resize();

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


  //Contact Form
const form = document.getElementById('contactForm');
const submitBtn = document.querySelector("#contactForm button[type='submit']");

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const response = await fetch('/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById('responseMessage').textContent =result.message;

  setTimeout(() => {
    responseMessage.textContent = '';
  }, 3000);

  submitBtn.disabled = false;
});

const HeightWin = window.innerHeight / 2;

document.addEventListener('scroll', () => {
  scrollY >= HeightWin ? document.querySelector('.gototop-btn').style.display = "flex" : document.querySelector('.gototop-btn').style.display = "none";


function setupFAQToggle() {
  const arrows = document.querySelectorAll('.faq-arrow');

  arrows.forEach((arrow, index) => {
    const answer = document.getElementById(`faq-answer-${index + 1}`);

    arrow.addEventListener('click', () => {
      const isVisible = answer.style.display === "flex";

      answer.style.display = isVisible ? "none" : "flex";
      arrow.style.transform = isVisible ? "rotateX(0deg)" : "rotateX(-180deg)";
    });
  });
}

document.addEventListener('DOMContentLoaded', setupFAQToggle);

})});
const HeightOrigin = window.innerHeight / 3;

  document.addEventListener('scroll', () => {
  scrollY >= HeightOrigin ? document.querySelector('.navbar').style.background = "linear-gradient(to right, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.9))" : document.querySelector('.navbar').style.background = "transparent";
  });