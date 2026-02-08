# 🎮 Interaktiv Elementlar

## ✨ Qo'shilgan Komponentlar

### 1. **FloatingButton** ⬆️
Sahifani yuqoriga scroll qilish tugmasi

**Xususiyatlar:**
- 300px scroll qilgandan keyin paydo bo'ladi
- Smooth scroll animation
- Hover lift effect
- Bottom-right corner
- Mobile responsive

**Foydalanish:**
```jsx
import FloatingButton from './components/FloatingButton';
<FloatingButton />
```

### 2. **InteractiveCard** 🎴
Mouse harakatiga javob beruvchi card

**Xususiyatlar:**
- Mouse position tracking
- Glow effect on hover
- Smooth animations
- Customizable

**Foydalanish:**
```jsx
import InteractiveCard from './components/InteractiveCard';
<InteractiveCard>
  <YourContent />
</InteractiveCard>
```

### 3. **RippleButton** 💧
Click qilganda ripple effekti

**Xususiyatlar:**
- Material Design ripple
- Multiple ripples support
- Auto cleanup
- Customizable

**Foydalanish:**
```jsx
import RippleButton from './components/RippleButton';
<RippleButton onClick={handleClick} className="btn btn-primary">
  Click Me
</RippleButton>
```

### 4. **ParticleBackground** ✨
Animated particle background

**Xususiyatlar:**
- Canvas-based animation
- Connected particles
- Smooth movement
- Performance optimized

**Foydalanish:**
```jsx
import ParticleBackground from './components/ParticleBackground';
<div style={{ position: 'relative' }}>
  <ParticleBackground />
  <YourContent />
</div>
```

## 🎨 CSS Utility Classes

### Hover Effects

#### 1. **Magnetic Effect**
```html
<div class="magnetic-element">Hover me</div>
```
- Scale 1.05 on hover

#### 2. **Tilt Effect**
```html
<div class="tilt-card">3D Tilt</div>
```
- 3D perspective rotation

#### 3. **Glow on Hover**
```html
<div class="glow-on-hover">Glow effect</div>
```
- Radial gradient glow

#### 4. **Hover Lift**
```html
<div class="hover-lift">Lift up</div>
```
- TranslateY(-8px) + shadow

#### 5. **Rotate on Hover**
```html
<div class="rotate-on-hover">Rotate</div>
```
- 5deg rotation

### Animations

#### 1. **Shake**
```html
<div class="shake-on-hover">Shake</div>
```
- Horizontal shake animation

#### 2. **Bounce In**
```html
<div class="bounce-in">Bounce</div>
```
- Scale bounce entrance

#### 3. **Slide In**
```html
<div class="slide-in-left">From left</div>
<div class="slide-in-right">From right</div>
```
- Slide entrance animations

#### 4. **Floating**
```html
<div class="floating">Float</div>
```
- Up and down movement

#### 5. **Pulse Glow**
```html
<div class="pulse-glow">Pulse</div>
```
- Pulsing box-shadow

#### 6. **Reveal**
```html
<div class="reveal">Reveal</div>
```
- Fade in + slide up

### Click Effects

#### 1. **Scale on Click**
```html
<button class="scale-on-click">Click</button>
```
- Scale 0.95 on active

#### 2. **Interactive Button**
```html
<button class="btn-interactive">Interactive</button>
```
- Ripple effect on hover

### Special Effects

#### 1. **Gradient Border**
```html
<div class="gradient-border">Animated border</div>
```
- Animated gradient border

#### 2. **Shimmer**
```html
<div class="shimmer">Loading...</div>
```
- Shimmer loading effect

#### 3. **Cursor Follow**
```html
<div class="cursor-follow">Follow cursor</div>
```
- Glow follows cursor

### Stagger Animation
```html
<div class="stagger-item">Item 1</div>
<div class="stagger-item">Item 2</div>
<div class="stagger-item">Item 3</div>
```
- Sequential reveal animation

## 🎯 Qo'llash Misollari

### Product Card
```jsx
<InteractiveCard className="product-card hover-lift">
  <img src="product.jpg" alt="Product" />
  <h3>Product Name</h3>
  <RippleButton className="btn btn-primary">
    Add to Cart
  </RippleButton>
</InteractiveCard>
```

### Hero Section
```jsx
<section className="hero" style={{ position: 'relative' }}>
  <ParticleBackground />
  <div className="hero-content reveal">
    <h1 className="floating">Welcome</h1>
    <p className="slide-in-left">Description</p>
    <RippleButton className="btn-interactive btn-primary">
      Get Started
    </RippleButton>
  </div>
</section>
```

### Stats Grid
```jsx
<div className="stats-grid">
  <div className="stat-item stagger-item glow-on-hover">
    <h3>5000+</h3>
    <p>Customers</p>
  </div>
  <div className="stat-item stagger-item glow-on-hover">
    <h3>15+</h3>
    <p>Certificates</p>
  </div>
  <div className="stat-item stagger-item glow-on-hover">
    <h3>24/7</h3>
    <p>Support</p>
  </div>
</div>
```

## ⚡ Performance

### Optimizatsiyalar:
- CSS animations (GPU accelerated)
- RequestAnimationFrame for canvas
- Debounced scroll events
- Cleanup on unmount
- Reduced motion support

### Best Practices:
- Use transform instead of position
- Use opacity instead of visibility
- Limit particle count
- Cleanup event listeners
- Use will-change sparingly

## 📱 Responsive

Barcha interaktiv elementlar responsive:
- Touch events qo'llab-quvvatlanadi
- Mobile-optimized sizes
- Reduced animations on mobile
- Performance-conscious

## 🎨 Customization

### Colors
```css
/* Change glow color */
.glow-on-hover::after {
  background: radial-gradient(circle, rgba(YOUR_COLOR) 0%, transparent 70%);
}
```

### Timing
```css
/* Change animation speed */
.floating {
  animation-duration: 5s; /* default: 3s */
}
```

### Intensity
```css
/* Change hover lift distance */
.hover-lift:hover {
  transform: translateY(-12px); /* default: -8px */
}
```

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ Reduced motion support

## 💡 Tips

1. **Combine effects** - Use multiple classes together
2. **Don't overdo** - Too many animations can be distracting
3. **Performance** - Test on slower devices
4. **Accessibility** - Respect prefers-reduced-motion
5. **Context** - Use appropriate effects for each element

---

**Versiya:** 3.0.0  
**Sana:** 2026-02-08  
**Status:** ✅ Production Ready
