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
    e.stopPropagation(); // Prevent click from bubbling
    pagesContainer.classList.toggle('active');
  });

  // Hide dropdown on outside click
  document.addEventListener('click', function () {
    pagesContainer.classList.remove('active');
  });
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

});
