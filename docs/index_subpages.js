// Adjusting the width of body & height of hero section 
document.addEventListener("DOMContentLoaded", function () {
function resize(){
    document.querySelector('body').style.maxWidth = window.innerWidth + 'px';
    };

    window.addEventListener("resize", resize());

  //Page Dropdown Function of the Navbar
  const pagesContainer = document.getElementById('pagesDropdown');

  if (!pagesContainer) return;

  // Toggle dropdown on click
  pagesContainer.addEventListener('click', function (e) {
    e.stopPropagation(); 
    pagesContainer.classList.toggle('active');
  });

  // Hide dropdown on outside click
  document.addEventListener('click', function () {
    pagesContainer.classList.remove('active');
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
  document.getElementById('responseMessage').textContent != "" ? document.getElementById('responseMessage').textContent =result.message : setTimeout(document.getElementById('responseMessage').textContent = "", 5000);

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
  scrollY >= HeightOrigin ? document.querySelector('.navbar').style.background = "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 5))" : document.querySelector('.navbar').style.background = "transparent";
  });