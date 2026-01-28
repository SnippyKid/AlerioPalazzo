# 🏛️ Alerio Palazzo - Luxury E-Commerce Experience

> **Italian-inspired luxury home and lifestyle essentials with palace-level elegance**

An award-winning, experience-driven luxury e-commerce website featuring stunning animations, cinematic effects, and a sophisticated spotlight mode.

---

## 🎨 Brand Identity

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| **Palazzo Purple** | `#555879` | Primary color, headers, footer background |
| **Palazzo Blue** | `#98A1BC` | Secondary accents, hover states |
| **Palazzo Tan** | `#DED3C4` | Subtle backgrounds, decorative elements |
| **Palazzo Cream** | `#F4EBD3` | Main background, light text |

### Typography

#### **Primary Font: Clash Display**
- **Type**: Modern Geometric Sans-Serif
- **Formats**: WOFF2, WOFF, TTF, OTF
- **Weights Available**:
  - Extralight (200)
  - Light (300)
  - Regular (400)
  - Medium (500)
  - Semibold (600)
  - Bold (700)
  - Variable (200-700)
- **Usage**: Headings, UI elements, body text, navigation
- **Location**: `assets/font/ClashDisplay_Complete/`

#### **Accent Font: Luxury Stylish**
- **Type**: Elegant Modern Serif
- **Formats**: OTF, TTF
- **Weight**: Normal (400)
- **Usage**: Hero titles, special headings, brand moments
- **Location**: `assets/font/luxury-stylish-modern-serif-font/`

---

## 🚀 Technology Stack

### **Frontend Framework**
- **Tailwind CSS v3.x** (CDN)
  - Custom color palette integration
  - Custom font families
  - Utility-first styling

### **Animation Libraries**
| Library | Version | Purpose |
|---------|---------|---------|
| **GSAP** | 3.12.5 | Core animation engine |
| **ScrollTrigger** | 3.12.5 | Scroll-based animations |
| **ScrollToPlugin** | 3.12.5 | Smooth navigation |
| **Lenis** | 1.0.29 | Smooth scroll (optional) |
| **Split Type** | Latest | Text animation effects |
| **Three.js** | r128 | 3D effects (optional) |

### **Core Technologies**
- HTML5
- CSS3 (Custom Properties, Animations)
- Vanilla JavaScript (ES6+)
- Canvas API (Spotlight effect)
- GSAP Timeline & Tweens

---

## 📁 Project Structure

```
Alerio Palazzo/
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
│
├── assets/
│   ├── css/
│   │   └── style.css         # Custom styles (352 lines)
│   │
│   ├── js/
│   │   └── script.js         # Main JavaScript (546 lines)
│   │
│   ├── font/
│   │   ├── ClashDisplay_Complete/
│   │   │   └── Fonts/
│   │   │       ├── OTF/      # Desktop fonts
│   │   │       ├── TTF/      # Desktop fonts
│   │   │       └── WEB/      # Web fonts (WOFF, WOFF2)
│   │   │           ├── css/
│   │   │           │   └── clash-display.css
│   │   │           └── fonts/
│   │   │
│   │   └── luxury-stylish-modern-serif-font/
│   │       ├── luxury-stylish.otf
│   │       └── luxury-stylish.ttf
│   │
│   ├── img/                  # Product images (27 files)
│   │   ├── ARTICHOKE-1-DINNER-PLATE_1080x.webp
│   │   ├── bags_ac57093d-3376-4bce-bf75-b54121d25759_1080x.webp
│   │   ├── BLUE-PEA-DINNER-PLATE-1_1080x.webp
│   │   ├── BulletCoffeeTable5_3000x_2bb600bf-602c-435a-9640-6da72bb6d27a_1080x.webp
│   │   ├── CHAMPA-WATER-TUMBLR-1_1080x.webp
│   │   ├── ChessEndTable_3000x_33a3a548-f2b6-480f-89a2-8786612fec58_1080x.webp
│   │   └── ... (21 more images)
│   │
│   └── videos/
│       └── spring is here - Forrain (1080p, h264) (1).mp4
```

---

## 🎬 Features & Animations

### **1. Hero Section**
- **Full-screen video background** with cinematic overlay
- **Animated logo** (AP) with elegant fade-in
- **Spotlight Mode** ⚡ (Unique Feature!)
  - Toggle button in top-right
  - Canvas-based spotlight effect
  - Mouse-following light beam
  - Fixed logo spotlight
  - Dramatic darkening effect
- **Staggered text animations** with 3D transforms
- **Decorative SVG ornaments** with expand animations
- **Scroll indicator** with animated line
- **Video parallax** on scroll (1.6x zoom)
- **Cinematic letterbox effect** (15% inset)

### **2. Content Section**
- **Image grid** with 3D reveal animations
- **Floating background orbs** with slow animation
- **Staggered content reveal**
- **Animated statistics** with counting effect:
  - 250+ Products
  - 15+ Countries
  - 100+ Artisans
- **Parallax images** at different speeds
- **Hover effects** with image scale

### **3. Products Section**
- **6 Featured products** in responsive grid
- **Blur-to-focus heading** animation
- **Staggered card entrance** (1.2s total)
- **Parallax scroll effect** on cards
- **Hover interactions**:
  - Image scale 1.1x
  - Gradient overlay
  - "Quick View" button slide-up
  - Title color change
- **Product categories**: Tableware, Drinkware, Furniture, Accessories

### **4. Footer**
- **4-column responsive layout**
- **Staggered fade-in** animation
- **Social media icons** with hover lift
- **Newsletter subscription** form
- **Link hover underline** effect
- **Animated divider** line

---

## 📸 Assets Inventory

### **Images (27 Total)**
| Category | Count | Format | Resolution |
|----------|-------|--------|------------|
| Tableware | 10 | WebP | 1080x1080 |
| Furniture | 4 | WebP | 1080x1080 |
| Bags & Accessories | 3 | WebP | 1080x1080 |
| Decorative Items | 10 | WebP | 1080x1080 |

**Sample Products:**
- Artichoke Dinner Plate
- Blue Pea Dinner Plate
- Champa Water Tumbler
- Bullet Coffee Table
- Chess End Table
- Handcrafted Leather Bag

### **Video**
- **Filename**: `spring is here - Forrain (1080p, h264) (1).mp4`
- **Resolution**: 1080p
- **Codec**: H.264
- **Usage**: Hero background, content section accent
- **Features**: Autoplay, loop, muted, playsinline

---

## ✨ Animation Details

### **Hero Entrance Sequence** (Total: ~3.5s)
1. Logo fade (1.5s)
2. Spotlight button (1.5s, overlaps)
3. Top ornament expand (1s)
4. Subtitle slide up (1s)
5. Main title fade + slide (1.5s)
6. Tagline fade (1s)
7. Bottom ornament expand (1s)
8. Scroll indicator (1s)

### **Scroll Animations**
| Element | Effect | Duration | Easing |
|---------|--------|----------|--------|
| Video | Scale 1.6x + darken | Scrub 1.5s | none |
| Letterbox | 15% inset | Scrub 1.5s | none |
| Hero Content | Fade + Y-80px | Scrub 1.5s | power1.in |
| Images | 3D reveal + scale | 1.5s | power4.out |
| Stats | Count-up animation | 2s | Linear |
| Products | Blur-focus + fade | 1.8s | power3.out |

### **Spotlight Mode** 🔦
- **Activation**: Top-right button click
- **Technology**: HTML5 Canvas API
- **Features**:
  - 92% screen darkness
  - Mouse-following spotlight (230px radius)
  - Fixed logo spotlight (150px radius)
  - Smooth follow (12% easing)
  - Destination-out blend mode
  - 60fps animation loop
- **Visual Effects**:
  - Logo glow (3 layers: 25px, 50px, 100px)
  - Title glow (3 layers: 30px, 60px, 120px)
  - Subtitle glow (15px)

---

## 🎯 CSS Features

### **Custom Properties**
```css
--color-palazzo-purple: #555879;
--color-palazzo-blue: #98A1BC;
--color-palazzo-tan: #DED3C4;
--color-palazzo-cream: #F4EBD3;
```

### **Utility Classes**
- `.fade-in` - Scroll-triggered fade animation
- `.parallax` - Parallax effect with data-speed
- `.hover-lift` - Lift on hover effect
- `.magnetic-btn` - Magnetic button effect
- `.reveal-image` - Image reveal animation

### **Advanced CSS**
- **Custom scrollbar** styling
- **Selection** styling (purple bg)
- **Film grain** animation (8s loop)
- **Floating orbs** (20s & 25s cycles)
- **Mix-blend-mode** effects
- **Backdrop filters**
- **CSS animations** (ping, float, grain)

---

## 🛠️ Setup & Usage

### **Quick Start**
1. Clone or download the repository
2. Open `index.html` in a modern browser
3. No build process required - all CDN-based!

### **Browser Requirements**
- Modern browser with ES6+ support
- Canvas API support
- WOFF2 font support
- CSS Grid & Flexbox
- Recommended: Chrome 90+, Firefox 88+, Safari 14+

### **Performance**
- All animations use hardware acceleration
- Images optimized (WebP format)
- Fonts loaded with `font-display: swap`
- Canvas animations at 60fps
- Lazy loading for off-screen content

---

## 🎨 Customization

### **Change Colors**
Edit Tailwind config in `index.html`:
```javascript
colors: {
    'palazzo-purple': '#YOUR_COLOR',
    'palazzo-blue': '#YOUR_COLOR',
    'palazzo-tan': '#YOUR_COLOR',
    'palazzo-cream': '#YOUR_COLOR',
}
```

### **Adjust Animations**
Edit timing in `assets/js/script.js`:
```javascript
duration: 1.5,  // Animation duration
ease: 'power3.out',  // Easing function
stagger: 0.2,  // Stagger delay
```

### **Modify Spotlight**
Edit canvas settings in `drawSpotlight()` function:
```javascript
const r = 230;  // Spotlight radius
ctx.fillStyle = 'rgba(0, 0, 0, 0.92)';  // Darkness level
```

---

## 📊 Project Stats

| Metric | Count |
|--------|-------|
| **Total Lines of Code** | ~1,200 |
| **HTML** | 568 lines |
| **CSS** | 400+ lines |
| **JavaScript** | 546 lines |
| **Assets** | 28 files |
| **Animations** | 50+ |
| **Sections** | 4 main |
| **Load Time** | <2s (with CDN) |

---

## 🏆 Key Features

- ✅ **Fully Responsive** (Mobile, Tablet, Desktop)
- ✅ **No Build Process** Required
- ✅ **CDN-Based** Libraries
- ✅ **Award-Winning Design**
- ✅ **60fps Animations**
- ✅ **Custom Spotlight Mode**
- ✅ **Cinematic Effects**
- ✅ **Interactive Elements**
- ✅ **Optimized Performance**
- ✅ **Luxury Aesthetic**

---

## 📝 License

Fonts are subject to their respective licenses:
- **Clash Display**: © Indian Type Foundry (Fontshare)
- **Luxury Stylish**: Check included license file

---

## 🎭 Experience Highlights

1. **Cinematic Hero** - Full-screen video with animated text
2. **Spotlight Mode** - Unique interactive light effect
3. **3D Transforms** - Image reveals with perspective
4. **Counting Stats** - Animated number counters
5. **Parallax Depth** - Multiple scroll speeds
6. **Hover Magic** - Rich micro-interactions
7. **Smooth Animations** - GSAP-powered fluidity
8. **Luxury Typography** - Premium font pairing

---

**Built with passion for luxury e-commerce experiences** ✨

**Alerio Palazzo** - Where Italian Artistry Meets Modern Living
