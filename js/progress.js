// Set the progress bar percentages
window.addEventListener('load', function() {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(function(progressFill) {
        const percentage = progressFill.getAttribute('data-percentage');
        progressFill.style.setProperty('--progress-percentage', percentage + '%');
    });
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

// Initialize Charts
const ctxUsers = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(ctxUsers, {
    type: 'line',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'],
        datasets: [{
            label: 'Active Users',
            data: [1000, 5000, 10000, 20000],
            borderColor: '#ff4081',
            backgroundColor: 'rgba(255, 64, 129, 0.1)',
            fill: true,
            tension: 0.4,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    color: 'rgba(255,255,255,0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
            y: {
                grid: {
                    color: 'rgba(255,255,255,0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                }
            }
        }
    }
});

const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctxRevenue, {
    type: 'bar',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'],
        datasets: [{
            label: 'Revenue ($)',
            data: [50000, 150000, 300000, 600000],
            backgroundColor: '#ff8c00',
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    color: 'rgba(255,255,255,0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
            y: {
                grid: {
                    color: 'rgba(255,255,255,0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                }
            }
        }
    }
});

