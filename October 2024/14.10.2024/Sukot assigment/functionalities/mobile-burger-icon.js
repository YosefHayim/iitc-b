const burgerIcon = document.querySelector('.icon-menu-open');
const mobileNavBar = document.querySelector('.mobile-pages');

const mainElement = document.querySelector('main');
const divsInMain = mainElement ? mainElement.querySelectorAll(':scope > div') : [];
const thirdDivInMain = divsInMain[2]; // Zero-based index (0 = first div)

const openCloseMobileIconFn = () => {
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault();

    const isMenuOpen = burgerIcon.src.includes('icon-menu-open.png');

    // Toggle the burger icon image
    burgerIcon.src = isMenuOpen
      ? '../images/mobile-navbar/icon-menu-close.png'
      : '../images/mobile-navbar/icon-menu-open.png';

    // Show or hide the mobile navigation bar
    mobileNavBar.style.display = isMenuOpen ? 'flex' : 'none';

    // If the third immediate child div in main exists, manipulate its styles
    if (thirdDivInMain) {
      
      thirdDivInMain.style.opacity = isMenuOpen ? '0%' : '100%';
      thirdDivInMain.style.pointerEvents = isMenuOpen ? 'none' : 'auto';
    }
  });
};

export { openCloseMobileIconFn };
