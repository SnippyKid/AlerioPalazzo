/* ================================
   ALERIO PALAZZO - MAIN JAVASCRIPT
   Experience-Based Luxury E-Commerce
   ================================ */

console.log('🏛️ Alerio Palazzo - Initializing...');

// ============ GSAP REGISTRATION ============
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============ SMOOTH HERO ANIMATION ============
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    const spotlightToggle = document.getElementById('spotlight-toggle');
    const heroOrnamentTop = document.querySelector('.hero-ornament-top');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroTitle = document.querySelector('.hero-title');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroOrnamentBottom = document.querySelector('.hero-ornament-bottom');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const tl = gsap.timeline({ delay: 0.2 });

    // Logo appears first
    tl.to(logo, {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
    })
    
    // Spotlight button appears
    .to(spotlightToggle, {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
    }, '-=1.2')
    
    // Top ornament expands
    .to(heroOrnamentTop, {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.8')
    
    // Subtitle fades up
    .to(heroSubtitle, {
        y: 0,
        opacity: 0.6,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.5')
    
    // Main title - clean slide up
    .to(heroTitle, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
    }, '-=0.5')
    
    // Tagline
    .to(heroTagline, {
        y: 0,
        opacity: 0.5,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.8')
    
    // Bottom ornament
    .to(heroOrnamentBottom, {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.6')
    
    // Scroll indicator
    .to(scrollIndicator, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.3');
});

// ============ SPOTLIGHT EFFECT ============
let spotlightActive = false;
let canvas, ctx;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let targetX = mouseX;
let targetY = mouseY;
let animationFrameId = null;
let dpr = 1;

function initSpotlight() {
    canvas = document.getElementById('spotlight-canvas');
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Resize handler
    window.addEventListener('resize', () => {
        dpr = Math.max(1, window.devicePixelRatio || 1);
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
}

function drawSpotlight() {
    if (!canvas || !ctx) return;

    // stop loop if inactive
    if (!spotlightActive) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        animationFrameId = null;
        return;
    }

    // Smooth follow
    mouseX += (targetX - mouseX) * 0.12;
    mouseY += (targetY - mouseY) * 0.12;

    // Paint darkness
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.92)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Cut spotlight holes
    ctx.globalCompositeOperation = 'destination-out';

    // Mouse spotlight (smaller + softer)
    const r = 230;
    const g = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, r);
    g.addColorStop(0, 'rgba(0,0,0,1)');
    g.addColorStop(0.55, 'rgba(0,0,0,0.65)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, r, 0, Math.PI * 2);
    ctx.fill();

    // Logo spotlight (fixed)
    const lr = 150;
    const lg = ctx.createRadialGradient(96, 72, 0, 96, 72, lr);
    lg.addColorStop(0, 'rgba(0,0,0,0.9)');
    lg.addColorStop(0.6, 'rgba(0,0,0,0.4)');
    lg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = lg;
    ctx.beginPath();
    ctx.arc(96, 72, lr, 0, Math.PI * 2);
    ctx.fill();

    // Back to normal
    ctx.globalCompositeOperation = 'source-over';

    animationFrameId = requestAnimationFrame(drawSpotlight);
}

document.addEventListener('DOMContentLoaded', () => {
    initSpotlight();

    const spotlightToggle = document.getElementById('spotlight-toggle');
    const spotlightOverlay = document.getElementById('spotlight-overlay');
    const heroSection = document.getElementById('hero');
    const spotlightOn = document.querySelector('.spotlight-on');
    const spotlightOff = document.querySelector('.spotlight-off');

    if (!spotlightToggle || !spotlightOverlay || !heroSection) return;

    // Always start hidden (no CSS active/opacity conflicts)
    gsap.set(spotlightOverlay, { autoAlpha: 0 });

    // Track mouse
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    // Toggle spotlight
    spotlightToggle.addEventListener('click', (e) => {
        e.preventDefault();
        spotlightActive = !spotlightActive;

        console.log('Spotlight toggled:', spotlightActive);

        // kill any in-flight fades (prevents stuck state)
        gsap.killTweensOf(spotlightOverlay);

        if (spotlightActive) {
            heroSection.classList.add('spotlight-active');

            // show overlay
            gsap.to(spotlightOverlay, {
                autoAlpha: 1,
                duration: 0.35,
                ease: 'power2.out',
            });

            // start loop if not already running
            if (!animationFrameId) drawSpotlight();

            // Swap icons
            gsap.to(spotlightOn, { opacity: 0, rotate: 180, duration: 0.3, ease: 'power2.inOut' });
            gsap.to(spotlightOff, { opacity: 1, rotate: 0, duration: 0.3, ease: 'power2.inOut' });

        } else {
            heroSection.classList.remove('spotlight-active');

            gsap.to(spotlightOverlay, {
                autoAlpha: 0,
                duration: 0.35,
                ease: 'power2.inOut',
                onComplete: () => {
                    // ensure canvas is cleared and loop stopped
                    spotlightActive = false;
                    if (animationFrameId) cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                    if (canvas && ctx) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                },
            });

            // Swap icons back
            gsap.to(spotlightOn, { opacity: 1, rotate: 0, duration: 0.3, ease: 'power2.inOut' });
            gsap.to(spotlightOff, { opacity: 0, rotate: -180, duration: 0.3, ease: 'power2.inOut' });
        }
    });
});

// ============ CONTENT SECTION ANIMATIONS ============
// Images reveal with 3D effect and stagger
const revealImages = gsap.timeline({
    scrollTrigger: {
        trigger: '#content-section',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
    }
});

revealImages
    .to('.reveal-image-1', {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.5,
        ease: 'power4.out',
    })
    .to('.reveal-image-2', {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.5,
        ease: 'power4.out',
    }, '-=1.2')
    .to('.reveal-image-3', {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.5,
        ease: 'power4.out',
    }, '-=1.2');

// Content animations with timeline
const contentTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#content-section',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
    }
});

contentTL
    .to('.content-ornament', {
        opacity: 1,
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.out',
    })
    .to('.content-label', {
        opacity: 0.6,
        y: 0,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.8')
    .to('.content-heading', {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
    }, '-=0.6')
    .to('.content-divider', {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.8')
    .to('.content-text-1', {
        opacity: 0.8,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
    }, '-=0.5')
    .to('.content-text-2', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
    }, '-=0.9')
    .to('.content-stat', {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'back.out(1.5)',
        onComplete: animateNumbers,
    }, '-=0.6')
    .to('.content-btn', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.5');

// Animate numbers counting up
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Parallax effect on images
gsap.to('.reveal-image-1', {
    scrollTrigger: {
        trigger: '#content-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
    },
    y: -30,
    ease: 'none',
});

gsap.to('.reveal-image-2', {
    scrollTrigger: {
        trigger: '#content-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
    },
    y: -50,
    ease: 'none',
});

gsap.to('.reveal-image-3', {
    scrollTrigger: {
        trigger: '#content-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
    },
    y: -20,
    ease: 'none',
});

// ============ SMOOTH SCROLL EXPERIENCE ============
// Create master timeline for scroll effects - much smoother
const scrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
    }
});

// Video - smooth zoom and darken
scrollTimeline.to('#hero-video', {
    scale: 1.6,
    filter: 'brightness(0.4) contrast(1.3) saturate(0.8)',
    ease: 'none',
}, 0)

// Subtle letterbox effect
.to('#video-container', {
    clipPath: 'inset(15% 0% 15% 0%)',
    ease: 'none',
}, 0)

// Smooth vignette
.to('#video-overlay', {
    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 80%)',
    ease: 'none',
}, 0)

// Content fades MORE smoothly
.to('#hero-content', {
    opacity: 0,
    y: -80,
    ease: 'power1.in',
}, 0)

// Scroll indicator
.to('.scroll-indicator', {
    opacity: 0,
    y: 15,
    ease: 'power1.in',
}, 0);

// ============ MOUSE PARALLAX ON VIDEO ============
let parallaxMouseX = 0;
let parallaxMouseY = 0;

document.addEventListener('mousemove', (e) => {
    parallaxMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    parallaxMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Subtle parallax movement on video
gsap.ticker.add(() => {
    const video = document.getElementById('hero-video');
    if (video && window.scrollY < window.innerHeight) {
        gsap.to(video, {
            x: parallaxMouseX * 20,
            y: parallaxMouseY * 20,
            duration: 2,
            ease: 'power2.out',
        });
    }
});

// ============ PRODUCTS SECTION ANIMATIONS ============
// Header animations
const productsHeaderTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#products-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    }
});

productsHeaderTL
    .to('.products-label', {
        opacity: 0.6,
        y: 0,
        duration: 1,
        ease: 'power2.out',
    })
    .to('.products-heading', {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.8,
        ease: 'power3.out',
    }, '-=0.5')
    .to('.products-divider', {
        opacity: 1,
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.out',
    }, '-=1')
    .to('.products-desc', {
        opacity: 0.7,
        y: 0,
        duration: 1,
        ease: 'power2.out',
    }, '-=0.8');

// Product cards with stagger
gsap.to('.product-card', {
    scrollTrigger: {
        trigger: '.product-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: {
        amount: 1.2,
        from: 'start',
        ease: 'power2.out',
    },
    duration: 1.5,
    ease: 'power3.out',
});

// CTA button
gsap.to('.products-cta', {
    scrollTrigger: {
        trigger: '.products-cta',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.out',
});

// Parallax on product cards
gsap.utils.toArray('.product-card').forEach((card, index) => {
    const speed = (index % 3) === 0 ? -20 : (index % 3) === 1 ? -30 : -25;
    
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
        },
        y: speed,
        ease: 'none',
    });
});

// ============ FOOTER ANIMATIONS ============
gsap.to('.footer-col', {
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1.2,
    ease: 'power3.out',
});

gsap.to('.footer-divider', {
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
    },
    opacity: 1,
    scaleX: 1,
    duration: 1.5,
    ease: 'power2.out',
});

gsap.to('.footer-bottom', {
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
});

console.log('✨ Alerio Palazzo - Ready!');
