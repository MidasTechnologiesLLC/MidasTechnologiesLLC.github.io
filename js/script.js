// Function to load ASCII art data from JSON file
async function loadAsciiArtData() {
    try {
        const response = await fetch('assets/ascii_art.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading ASCII art data:', error);
        return [];
    }
}

// Function to randomly select two different ASCII arts
async function setRandomAsciiArt() {
    const asciiArtData = await loadAsciiArtData();
    const leftArtElement = document.querySelector('.ascii-art-left pre');
    const rightArtElement = document.querySelector('.ascii-art-right pre');

    if (!leftArtElement || !rightArtElement || asciiArtData.length < 2) return;

    const totalArtPieces = asciiArtData.length;

    // Generate two different random indices
    let leftIndex = Math.floor(Math.random() * totalArtPieces);
    let rightIndex;
    do {
        rightIndex = Math.floor(Math.random() * totalArtPieces);
    } while (rightIndex === leftIndex);

    // Set the ASCII art content
    leftArtElement.textContent = asciiArtData[leftIndex].content;
    rightArtElement.textContent = asciiArtData[rightIndex].content;
}

// Call the function when the page loads
window.onload = function() {
    setRandomAsciiArt();

    // Existing code for menu items
    document.querySelectorAll('.menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            const page = item.getAttribute('data-page');
            window.location.href = page;
        });
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const page = item.getAttribute('data-page');
                window.location.href = page;
            }
        });
    });
};

// Script to add a class to header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Menu Item Click and Keypress Events
document.querySelectorAll('.menu-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const page = item.getAttribute('data-page');
        window.location.href = page;
    });
    item.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const page = item.getAttribute('data-page');
            window.location.href = page;
        }
    });
});

// Make Header Clickable
const headerContainer = document.querySelector('.header-container');
if (headerContainer) {
    headerContainer.style.cursor = 'pointer';
    headerContainer.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

// Navigation Button Click Events
document.querySelectorAll('.nav-container span').forEach(function(button) {
    button.addEventListener('click', function() {
        const page = button.getAttribute('data-page');
        window.location.href = page;
    });
});

