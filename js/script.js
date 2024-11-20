// Script to add a class to header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Menu Item Click Events
document.querySelectorAll('.menu-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const page = item.getAttribute('data-page');
        window.location.href = page;
    });
});

// Navigation Button Click Events
document.querySelectorAll('.nav-container span').forEach(function(button) {
    button.addEventListener('click', function() {
        const page = button.getAttribute('data-page');
        window.location.href = page;
    });
});

