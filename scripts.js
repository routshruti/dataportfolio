// Function to open a popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

// Function to close a popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Function to handle active state of navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            links.forEach(l => l.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

