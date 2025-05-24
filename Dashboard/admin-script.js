 // Toggle Sidebar
 document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Theme Toggle
document.querySelector('.theme-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    const isDark = this.classList.contains('active');
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('.theme-toggle').classList.add('active');
    document.body.setAttribute('data-theme', 'dark');
}

// Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
            label: 'Monthly Sales (KSh)',
            data: [120000, 150000, 180000, 160000, 190000, 210000, 200000, 220000, 230000, 240000, 248750],
            borderColor: 'rgba(0, 128, 55, 1)',
            backgroundColor: 'rgba(0, 128, 55, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Category Chart
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Fertilizers', 'Pesticides', 'Animal Feed', 'Farm Tools', 'Dairy Equipment'],
        datasets: [{
            data: [35, 20, 25, 12, 8],
            backgroundColor: [
                'rgba(0, 128, 55, 0.8)',
                'rgba(243, 146, 0, 0.8)',
                'rgba(41, 98, 255, 0.8)',
                'rgba(111, 66, 193, 0.8)',
                'rgba(220, 53, 69, 0.8)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            }
        }
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fadeIn');
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.animate-fadeIn').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run once on load
animateOnScroll();

// Run on scroll
window.addEventListener('scroll', animateOnScroll);