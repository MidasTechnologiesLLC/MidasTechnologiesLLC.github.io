// Set the progress bar percentage
window.addEventListener('load', function() {
    const progressFill = document.getElementById('progress-fill');
    const percentage = progressFill.getAttribute('data-percentage');
    progressFill.style.setProperty('--progress-percentage', percentage + '%');
});

// Add tooltips to roadmap items
const roadmapItems = document.querySelectorAll('.roadmap-item');

roadmapItems.forEach(function(item) {
    const tooltipText = item.getAttribute('data-content');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = tooltipText;
    item.appendChild(tooltip);
});

