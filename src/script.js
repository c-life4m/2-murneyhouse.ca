// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme based on local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
    // loadHeroImage(); // REMOVE THIS LINE
    loadImages(); // Use this instead of loadHeroImage()
    setupEventListeners();
    handleScroll(); // Call on load to set initial header state
});

function loadImages() {
    // Hero image animation
    setTimeout(() => {
        const heroImage = document.querySelector('.hero-image');
        const heroText = document.querySelector('.hero-text');

        if (heroImage) {
            heroImage.style.opacity = 1;
            heroImage.style.transform = 'scale(1)';
        }

        // Trigger hero text fly-in animation
        if (heroText) {
            heroText.classList.add('loaded');
        }
    }, 500);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mainContent = document.querySelector('main'); // Assuming main content area

    if (mobileNavToggle && mobileNav) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
            // Optional: Add class to body to prevent scrolling when mobile nav is open
            document.body.classList.toggle('mobile-nav-open');
        });

        // Close mobile nav when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileNavToggle.classList.remove('active');
                document.body.classList.remove('mobile-nav-open');
            });
        });
    }

    // Sticky header on scroll
    window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
    const header = document.querySelector('.site-header');
    if (header) {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        } // Added missing closing brace
    }
}

// Announcements card animation trigger
function initAnnouncementsCard() {
    const announcementsCard = document.querySelector('.announcements-card');

    if (announcementsCard) {
        // Trigger the animation after hero loads
        setTimeout(() => {
            announcementsCard.classList.add('loaded');
        }, 1200);
    }
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Your existing code...

    // Initialize announcements
    initAnnouncementsCard();
});

 // Load announcements from JSON
async function loadAnnouncements() {
    const container = document.getElementById('announcements-container');

    try {
        const response = await fetch('data/announcements.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.announcements && data.announcements.length > 0) {
            // Sort by date (newest first)
            const sortedAnnouncements = data.announcements.sort((a, b) =>
                new Date(b.date) - new Date(a.date)
            );

            // Generate HTML
            const announcementsHTML = sortedAnnouncements.map(announcement => `
                <div class="announcement-item ${announcement.priority}">
                    <div class="announcement-date">${formatDate(announcement.date)}</div>
                    <div class="announcement-title">${announcement.title}</div>
                    <div class="announcement-content">${announcement.content}</div>
                </div>
            `).join('');

            container.innerHTML = announcementsHTML;
        } else {
            loadFallbackAnnouncements(container);
        }
    } catch (error) {
        console.error('Error loading announcements:', error);
        loadFallbackAnnouncements(container);
    }
}

// Fallback announcements if JSON fails
function loadFallbackAnnouncements(container) {
    container.innerHTML = `
        <div class="announcement-item high">
            <div class="announcement-date">Jan 15, 2024</div>
            <div class="announcement-title">Welcome to Murney House</div>
            <div class="announcement-content">Experience comfort and hospitality in our beautiful heritage home. Book your stay today!</div>
        </div>
        <div class="announcement-item medium">
            <div class="announcement-date">Jan 10, 2024</div>
            <div class="announcement-title">Winter Special</div>
            <div class="announcement-content">Enjoy our cozy rooms during the winter season with special rates available.</div>
        </div>
    `;
}
