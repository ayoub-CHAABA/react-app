document.addEventListener('DOMContentLoaded', function() {
  // Select all breadcrumb items except the home icon
  var breadcrumbItems = document.querySelectorAll('ul.wy-breadcrumbs li:not(:first-child) a');

  // Add click event listener to each breadcrumb item
  breadcrumbItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      // Prevent the default action
      event.preventDefault();
      // Scroll to the top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});
