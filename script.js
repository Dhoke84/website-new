document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle Functionality
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');
    const headerLinkContainer = document.querySelector('.header-link');
    const mainNav = document.querySelector('.main-nav');

    // Toggle visibility of header links and main navigation
    menuIcon.addEventListener('click', () => {
        headerLinkContainer.classList.add('visible');
        mainNav.classList.add('active');
        menuIcon.style.display = 'none'; // Hide bars icon
        closeIcon.style.display = 'block'; // Show close icon
    });

    closeIcon.addEventListener('click', () => {
        headerLinkContainer.classList.remove('visible');
        mainNav.classList.remove('active');
        menuIcon.style.display = 'block'; // Show bars icon
        closeIcon.style.display = 'none'; // Hide close icon
    });

    // Ensure menu closes when clicking outside (only for mobile view)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) { // Check if the screen width is mobile
            if (!event.target.closest('.header') && !event.target.closest('.header-link') && !event.target.closest('.main-nav') && !event.target.closest('.fa-bars')) {
                headerLinkContainer.classList.remove('visible');
                mainNav.classList.remove('active');
                menuIcon.style.display = 'block'; // Show bars icon
                closeIcon.style.display = 'none'; // Hide close icon
            }
        }
    });

    // Prevent clicks on menu icon and close icon from propagating to document
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    closeIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Handle link click event
    const handleLinkClick = (event, links) => {
        event.stopPropagation(); // Prevent document click from triggering

        links.forEach(link => link.classList.remove('active'));
        event.currentTarget.classList.add('active');
    };

    // Header Navigation Active Link Functionality
    const headerNavLinks = document.querySelectorAll('.header-link a');
    headerNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            handleLinkClick(event, headerNavLinks);
        });
    });

    // Main Navigation Active Link Functionality
    const mainNavLinks = document.querySelectorAll('.main-nav ul li a');
    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            handleLinkClick(event, mainNavLinks);
            // Handle dropdown icon change
            const dropdown = link.nextElementSibling;
            const icon = link.querySelector('.dropdown-icon');
            if (dropdown && dropdown.style.display === 'block') {
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            } else if (dropdown) {
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            }
        });
    });

    // Show dropdown on click and toggle icon
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');
    dropdownIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation();
            const dropdown = icon.parentElement.nextElementSibling;
            if (dropdown && dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            } else if (dropdown) {
                dropdown.style.display = 'block';
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            }
        });
    });

    // Remove "active" class when clicking outside of the links
    document.addEventListener('click', function() {
        if (window.innerWidth <= 768) { // Check if the screen width is mobile
            headerNavLinks.forEach(link => link.classList.remove('active'));
            mainNavLinks.forEach(link => link.classList.remove('active'));

            dropdownIcons.forEach(icon => {
                const dropdown = icon.parentElement.nextElementSibling;
                if (dropdown && dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                    icon.classList.remove('fa-caret-up');
                    icon.classList.add('fa-caret-down');
                }
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar .fa-search');
    const closeIcon = document.querySelector('.search-bar .fa-times');
    const searchBar = document.querySelector('.search-bar');

    // Toggle search bar visibility
    searchIcon.addEventListener('click', () => {
        searchBar.classList.add('expanded');
        searchInput.focus();
    });

    closeIcon.addEventListener('click', () => {
        searchBar.classList.remove('expanded');
        searchInput.value = ''; // Optional: Clear the input field
        searchInput.blur();
    });

    // Ensure search bar closes when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-bar')) {
            searchBar.classList.remove('expanded');
            searchInput.value = ''; // Optional: Clear the input field
            searchInput.blur();
        }
    });

    // Prevent clicks on the search bar from closing it
    searchBar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Select the carousel image element
const carouselImage = document.getElementById('carousel-image');

// Select all the carousel icons
const carouselIcons = document.querySelectorAll('.carousel-icon');

// Add click event listener to each icon
carouselIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Get the target image src from the data-src attribute
    const targetImageSrc = this.getAttribute('data-src');
    
    // Update the src attribute of the carousel image
    carouselImage.setAttribute('src', targetImageSrc);
  });
});


// Handle the modal popup
document.getElementById('application-form-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('download-modal').style.display = 'block'; // Show the modal
});

// Close the modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('download-modal').style.display = 'none';
});

// Close the modal when the cancel button is clicked
document.getElementById('cancel-download').addEventListener('click', function() {
    document.getElementById('download-modal').style.display = 'none';
});

// Handle the download action when the confirm button is clicked
document.getElementById('confirm-download').addEventListener('click', function() {
    document.getElementById('download-modal').style.display = 'none';
    // Trigger file download
    window.location.href = 'path/to/application_form.pdf'; // Replace with the actual path to the form
});

// Close the modal if user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('download-modal')) {
        document.getElementById('download-modal').style.display = 'none';
    }
});

// Get contact-modal and button elements
var contactModal = document.getElementById("contactModal");
var btn = document.getElementById("talkToProsBtn");
var closeBtn = document.getElementsByClassName("contact-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  contactModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  contactModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
}
