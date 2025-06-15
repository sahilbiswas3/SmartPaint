document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html') || (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('active');
            });
        });
    }

    // Portfolio Filtering - Only on portfolio page
    if (document.querySelector('.portfolio-filters')) {
        console.log('Portfolio section found');
        const portfolioFilterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        console.log('Portfolio filter buttons:', portfolioFilterButtons.length);
        console.log('Portfolio items:', portfolioItems.length);

        portfolioFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Portfolio filter button clicked:', button.getAttribute('data-filter'));
                // Remove active class from all buttons
                portfolioFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    // Check both class and data-category attribute
                    const hasClass = item.classList.contains(filterValue);
                    const dataCategory = item.getAttribute('data-category');
                    
                    console.log('Portfolio item:', dataCategory, 'Filter value:', filterValue, 'Has class:', hasClass);
                    
                    if (filterValue === 'all' || dataCategory === filterValue || hasClass) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Gallery Filtering - Only on gallery page
    if (document.querySelector('.gallery-filters')) {
        console.log('Gallery section found');
        const galleryFilterButtons = document.querySelectorAll('.gallery-filters .filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        console.log('Gallery filter buttons:', galleryFilterButtons.length);
        console.log('Gallery items:', galleryItems.length);

        galleryFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Gallery filter button clicked:', button.getAttribute('data-filter'));
                // Remove active class from all buttons
                galleryFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    // Check both class and data-category attribute
                    const hasClass = item.classList.contains(filterValue);
                    const dataCategory = item.getAttribute('data-category');
                    
                    console.log('Gallery item:', dataCategory, 'Filter value:', filterValue, 'Has class:', hasClass);
                    
                    if (filterValue === 'all' || dataCategory === filterValue || hasClass) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for navbar height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !phone || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
});