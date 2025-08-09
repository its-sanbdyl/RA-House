// Adjusting the width of body & height of hero section 
document.addEventListener("DOMContentLoaded", function () {

  //Loader
      setTimeout(() => {
        document.getElementById("loader-wrapper").classList.add("fade-out");
        document.body.classList.add("loaded");
      }, 500);

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

  //FAQ Show/Hide Toggle
  const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item, index) => {
        const titleArrow = item.querySelector(".faq-title-arrow");
        const answer = item.querySelector(".faq-answer");
        const arrow = item.querySelector(".faq-arrow");

        titleArrow.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".faq-arrow").forEach(arw => arw.style.transform = "rotate(0deg)");

            if (!isOpen) {
                answer.style.display = "block";
                arrow.style.transform = "rotate(180deg)";
            }
        });
    });

// Go To Top Function    
const HeightWin = window.innerHeight / 2;

document.addEventListener('scroll', () => {
  scrollY >= HeightWin ? document.querySelector('.gototop-btn').style.display = "flex" : document.querySelector('.gototop-btn').style.display = "none";
  });

// Appear NavBar After Hero
const HeightOrigin = window.innerHeight / 3;

  document.addEventListener('scroll', () => {
  scrollY >= HeightOrigin ? document.querySelector('.navbar').style.background = "linear-gradient(to right, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.9))" : document.querySelector('.navbar').style.background = "transparent";
  });

  //Contact form at contactus.html

  document.getElementById("contactForm").addEventListener("submit", async function(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const responseEl = document.getElementById('responseMessage');

      const res = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const ReceivedMessage = await res.text();

      responseEl.style.display = 'flex';
      responseEl.textContent = ReceivedMessage;

      if (ReceivedMessage.trim() === "Message sent successfully!") {
        responseEl.style.color = "#00ff00";
      } else {
        responseEl.style.color = "#cc0000";
      }

      document.getElementById('contactForm').reset();

      setTimeout(() => {
        responseEl.style.display = 'none';
        responseEl.textContent = '';
      }, 4000);
    });
  
});

document.querySelector('.currYear').textContent = new Date().getFullYear();