document.addEventListener('DOMContentLoaded', function() {
    // Get references to the menu toggle button and the main menu
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    // Check if both elements exist before adding the event listener
    if (menuToggle && mainMenu) {
        // Add event listener for clicks on the menu toggle button
        menuToggle.addEventListener('click', function() {

            // This class is used in CSS to show/hide the menu on mobile
            mainMenu.classList.toggle('nav-open');

            const isOpen = mainMenu.classList.contains('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpen); // Improve accessibility
 
        });
    } else {
        // Log an error if elements are not found (useful for debugging)
        if (!menuToggle) console.error("Menu toggle button ('#menu-toggle') not found.");
        if (!mainMenu) console.error("Main menu ('#main-menu') not found.");
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            if (hrefAttribute && hrefAttribute.length > 1 && hrefAttribute.startsWith('#')) {
                const targetElement = document.querySelector(hrefAttribute);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close the menu if it's open (for mobile navigation)
                    if (mainMenu && mainMenu.classList.contains('nav-open')) {
                        mainMenu.classList.remove('nav-open');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });


});