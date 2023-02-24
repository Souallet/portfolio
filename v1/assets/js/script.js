/*
 * -----------------------
 * Manage Navigation Menu
 * -----------------------
 */

const header = document.getElementById('header'),
  navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navToggleIcon = document.getElementById('nav-toggle-icon'),
  navLinks = document.querySelectorAll('.nav__link'),
  ctaScroll = document.getElementById('cta_scroll'),
  scrollToTop = document.getElementById('scroll-to-top');

const hideMenu = (event) => {
  navMenu.classList.remove('nav__menu_show');
  navToggleIcon.classList.add('my-icon__category');
  navToggleIcon.classList.remove('my-icon__category-alt');
  navToggle.hidden = false;
};

const toggleMenu = () => {
  navMenu.classList.toggle('nav__menu_show');
  navToggleIcon.classList.toggle('my-icon__category');
  navToggleIcon.classList.toggle('my-icon__category-alt');
};

navToggle.addEventListener('click', toggleMenu);

[...navLinks, ctaScroll, scrollToTop].forEach((link) => {
  link.addEventListener(
    'click',
    (event) => {
      event.preventDefault();
      hideMenu();
      header.classList.add('sticky'); // Avoid first scroll margin-top issue
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    },
    { passive: false }
  );
});

// Manage sticky nav for medium and large screen (>= 480px)
if (window.screen.width >= 480) {
  window.onscroll = () => {
    var sticky = header.offsetTop;

    window.pageYOffset >= sticky + 100
      ? header.classList.add('sticky')
      : header.classList.remove('sticky');
  };
}

/*
 * ---------------------------------
 * AOS Setup
 * ---------------------------------
 */

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
});
