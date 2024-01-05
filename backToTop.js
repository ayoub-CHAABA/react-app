document.addEventListener('DOMContentLoaded', function() {
  // Select all breadcrumb links
  var breadcrumbLinks = document.querySelectorAll('ul.wy-breadcrumbs li a');

  // Attach the event listener to each link
  breadcrumbLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Check if the clicked link is the 'Home' icon
      if (!this.classList.contains('icon-home')) {
        // It's not the 'Home' icon, so prevent the default link behavior
        event.preventDefault();
        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      // If it is the 'Home' icon, the default action will proceed, navigating to the linked page
    });
  });
});
