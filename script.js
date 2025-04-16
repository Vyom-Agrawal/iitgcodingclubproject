/**
 * Simple script for Coding Club Website
 * Handles mobile navigation toggle.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the menu toggle button and the main menu
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    // Check if both elements exist before adding the event listener
    if (menuToggle && mainMenu) {
        // Add event listener for clicks on the menu toggle button
        menuToggle.addEventListener('click', function() {
            // Toggle the 'nav-open' class on the main menu
            // This class is used in CSS to show/hide the menu on mobile
            mainMenu.classList.toggle('nav-open');

            // Optional: Change button text/icon for accessibility or visual cue
            const isOpen = mainMenu.classList.contains('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpen); // Improve accessibility
            // Example: Change icon (requires using icon fonts or SVG)
            // menuToggle.innerHTML = isOpen ? '×' : '☰';
        });
    } else {
        // Log an error if elements are not found (useful for debugging)
        if (!menuToggle) console.error("Menu toggle button ('#menu-toggle') not found.");
        if (!mainMenu) console.error("Main menu ('#main-menu') not found.");
    }

    // Optional: Add smooth scrolling for internal links (if any)
    // Example: (Uncomment if you have internal #links you want to scroll smoothly)
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // Ensure it's a valid internal link and not just '#'
            if (hrefAttribute && hrefAttribute.length > 1 && hrefAttribute.startsWith('#')) {
                const targetElement = document.querySelector(hrefAttribute);
                if (targetElement) {
                    e.preventDefault(); // Prevent default jump
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Optional: Close mobile menu after clicking an internal link
                    if (mainMenu && mainMenu.classList.contains('nav-open')) {
                        mainMenu.classList.remove('nav-open');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });
    */

}); // End of DOMContentLoaded