const searchIcon = document.querySelector('.bi.bi-search'); // Select search icon
const searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  if (searchTerm.trim() !== '') { // Check if search term is not empty
    alert(`You searched for: ${searchTerm}`);
  }
});
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function(event) {
  // Prevent default link behavior (following the href)
  event.preventDefault();

  dropdownMenu.classList.toggle('show'); // Toggle 'show' class
});
