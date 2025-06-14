// Gallery.js - Specific JavaScript for gallery.html

document.addEventListener('DOMContentLoaded', function() {
    // Gallery filtering functionality
    const galleryFilters = document.querySelector('.gallery-filters');
    
    // Only run this code if we're on a page with gallery filters
    if (galleryFilters) {
        const filterButtons = galleryFilters.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Add click event listeners to each filter button
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get the filter value from the button's data-filter attribute
                const filterValue = this.getAttribute('data-filter');
                
                console.log('Gallery filter clicked:', filterValue);
                
                // Show or hide gallery items based on the filter value
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || filterValue === itemCategory) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        console.log('Gallery filtering initialized');
    }
});