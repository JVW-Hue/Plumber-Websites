// Custom cursor tracking
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX - 10 + 'px';
    cursorGlow.style.top = e.clientY - 10 + 'px';
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.9)';
    }
});

// Terminal form submission
document.querySelector('.terminal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Simulate transmission
    submitBtn.textContent = 'TRANSMITTING...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'MESSAGE SENT';
        submitBtn.style.background = 'linear-gradient(45deg, #00ff80, #00cc66)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            this.reset();
        }, 2000);
    }, 1500);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service modules
document.querySelectorAll('.service-module').forEach(module => {
    module.style.opacity = '0';
    module.style.transform = 'translateY(30px)';
    module.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(module);
});

// Random data updates for the display screen
function updateDisplayData() {
    const dataLines = document.querySelectorAll('.data-line');
    const data = [
        `PRESSURE: ${(40 + Math.random() * 20).toFixed(1)} PSI`,
        `FLOW RATE: ${(2 + Math.random() * 2).toFixed(1)} GPM`,
        `TEMP: ${(65 + Math.random() * 10).toFixed(1)}°F`,
        `STATUS: ${Math.random() > 0.8 ? 'MAINTENANCE' : 'OPTIMAL'}`
    ];
    
    dataLines.forEach((line, index) => {
        if (data[index]) {
            line.textContent = data[index];
        }
    });
}

// Update display data every 5 seconds
setInterval(updateDisplayData, 5000);

// Tech progress bars animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.tech-progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Trigger progress animation when tech section comes into view
const techObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            techObserver.unobserve(entry.target);
        }
    });
});

const techSection = document.querySelector('.tech-section');
if (techSection) {
    techObserver.observe(techSection);
}

// Emergency button pulse effect
const emergencyBtn = document.querySelector('.emergency-btn');
emergencyBtn.addEventListener('click', () => {
    alert('EMERGENCY PROTOCOL ACTIVATED\nResponse team dispatched to your location');
});

// Hologram interaction
const hologram = document.querySelector('.hologram');
if (hologram) {
    hologram.addEventListener('mouseenter', () => {
        hologram.style.transform = 'scale(1.1)';
        hologram.style.transition = 'transform 0.3s ease';
    });
    
    hologram.addEventListener('mouseleave', () => {
        hologram.style.transform = 'scale(1)';
    });
}

// Service module hover effects
document.querySelectorAll('.service-module').forEach(module => {
    module.addEventListener('mouseenter', () => {
        module.style.borderColor = '#8000ff';
        module.style.boxShadow = '0 10px 30px rgba(128, 0, 255, 0.3)';
    });
    
    module.addEventListener('mouseleave', () => {
        module.style.borderColor = '#00ffff';
        module.style.boxShadow = 'none';
    });
});

// Quantum particle effect
function createQuantumParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.background = '#00ffff';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.opacity = '0.8';
    
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 10;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.body.appendChild(particle);
    
    // Animate particle upward
    particle.animate([
        { transform: 'translateY(0px)', opacity: 0.8 },
        { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: 8000,
        easing: 'linear'
    }).onfinish = () => particle.remove();
}

// Create quantum particles periodically
setInterval(createQuantumParticle, 300);

// Status indicator updates
function updateSystemStatus() {
    const statusText = document.querySelector('.status-bar span:last-child');
    const statuses = ['SYSTEM ONLINE', 'QUANTUM SYNC', 'AI PROCESSING', 'SENSORS ACTIVE'];
    
    let currentIndex = 0;
    setInterval(() => {
        statusText.textContent = statuses[currentIndex];
        currentIndex = (currentIndex + 1) % statuses.length;
    }, 3000);
}

updateSystemStatus();