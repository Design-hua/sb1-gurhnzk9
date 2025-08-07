// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// University carousel auto-scroll control
let isCarouselPaused = false;
const universityTrack = document.getElementById('university-track');

universityTrack.addEventListener('mouseenter', () => {
    universityTrack.style.animationPlayState = 'paused';
    isCarouselPaused = true;
});

universityTrack.addEventListener('mouseleave', () => {
    universityTrack.style.animationPlayState = 'running';
    isCarouselPaused = false;
});

// University item click handler
document.querySelectorAll('.university-item').forEach(item => {
    item.addEventListener('click', () => {
        const universityName = item.querySelector('.university-name').textContent;
        alert(`查看 ${universityName} 的录取要求`);
        // In a real application, this would navigate to a detailed page
    });
});

// University card click handler for detailed information
document.querySelectorAll('.university-card').forEach(card => {
    card.addEventListener('click', () => {
        const universityName = card.querySelector('h4').textContent;
        const requirements = card.querySelector('.requirements').innerHTML;
        
        // Create modal or expand card (simplified version)
        card.classList.toggle('expanded');
        
        // In a real application, this would open a detailed modal or navigate to a dedicated page
        console.log(`Clicked on ${universityName}`);
    });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

// University search data
const universityData = {
    '马来亚大学': 'malaya',
    'university of malaya': 'malaya',
    'um': 'malaya',
    '博特拉大学': 'putra',
    'universiti putra malaysia': 'putra',
    'upm': 'putra',
    '国民大学': 'kebangsaan',
    'universiti kebangsaan malaysia': 'kebangsaan',
    'ukm': 'kebangsaan',
    '理工大学': 'utm',
    'universiti teknologi malaysia': 'utm',
    'utm': 'utm',
    '理科大学': 'usm',
    'universiti sains malaysia': 'usm',
    'usm': 'usm',
    '泰莱大学': 'taylor',
    "taylor's university": 'taylor',
    'taylor': 'taylor',
    '双威大学': 'sunway',
    'sunway university': 'sunway',
    'sunway': 'sunway',
    '亚太科技大学': 'apu',
    'asia pacific university': 'apu',
    'apu': 'apu',
    '世纪大学': 'segi',
    'segi university': 'segi',
    'segi': 'segi',
    '赛城大学': 'ucsiuniversity',
    'university college sedaya international': 'ucsiuniversity',
    'ucsi': 'ucsiuniversity',
    '城市大学': 'cityuniversity',
    'city university malaysia': 'cityuniversity',
    'city university': 'cityuniversity'
};

function searchUniversity(query) {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Find matching university
    for (const [key, value] of Object.entries(universityData)) {
        if (key.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(key.toLowerCase())) {
            return value;
        }
    }
    return null;
}

function scrollToUniversity(universityId) {
    const universityCard = document.querySelector(`[data-university="${universityId}"]`);
    if (universityCard) {
        // Highlight the university card
        universityCard.style.border = '3px solid #D4AF37';
        universityCard.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.5)';
        
        // Scroll to the university section
        const universitiesSection = document.getElementById('universities');
        const offsetTop = universitiesSection.offsetTop - 100;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
            universityCard.style.border = '';
            universityCard.style.boxShadow = '';
        }, 3000);
        
        return true;
    }
    return false;
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        const universityId = searchUniversity(query);
        if (universityId) {
            scrollToUniversity(universityId);
            searchInput.value = ''; // Clear search input
        } else {
            alert(`未找到匹配的学校: ${query}\n\n可搜索的学校包括：\n马来亚大学、博特拉大学、国民大学、理工大学、理科大学、泰莱大学、双威大学、亚太科技大学、世纪大学、赛城大学、城市大学`);
        }
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// CTA button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    // Open WeChat with the specified contact
    window.open('weixin://dl/chat?13153335866', '_blank');
    // Fallback alert for browsers that don't support WeChat protocol
    setTimeout(() => {
        alert('请添加微信：13153335866 获得免费咨询！');
    }, 1000);
});

// Language switcher
const languageSwitch = document.querySelector('.language-switch');
languageSwitch.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    alert(`语言切换至: ${selectedLang === 'zh' ? '中文' : 'English'}`);
    // In a real application, this would change the website language
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

// Apply animation to feature cards and timeline items
document.querySelectorAll('.feature-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form input focus effects
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#D4AF37';
        this.style.boxShadow = '0 0 5px rgba(212, 175, 55, 0.3)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
        this.style.boxShadow = 'none';
    });
});

// Add loading effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Add scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #D4AF37;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'translateY(20px)';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});