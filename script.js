// Tunggu DOM load
document.addEventListener('DOMContentLoaded', function() {
  
  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior:'smooth'
        });
      }
      // Tutup hamburger menu ketika link diklik
      const navMenu = document.getElementById("nav-menu");
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  // HAMBURGER MENU
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggle) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (navMenu) {
        navMenu.classList.toggle("active");
      }
    });
  }

  // Tutup menu ketika link diklik
  if (navMenu) {
    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // Tutup menu ketika klik di area luar
  document.addEventListener("click", (e) => {
    if (toggle && navMenu && !e.target.closest("nav")) {
      navMenu.classList.remove("active");
    }
  });

  // MODAL
  function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    if (modal && modalImg) {
      modal.style.display = "flex";
      modalImg.src = src;
    }
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  // Expose functions globally
  window.openModal = openModal;
  window.closeModal = closeModal;

  // SCROLL REVEAL
  function checkReveal() {
    const reveals = document.querySelectorAll(".card, .skill, section h2");
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        el.classList.add("active");
      }
    });
  }

  // Check on load
  checkReveal();

  // Check on scroll
  window.addEventListener("scroll", checkReveal);

}); // End DOMContentLoaded
