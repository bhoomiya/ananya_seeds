document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});