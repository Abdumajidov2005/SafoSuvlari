# 🎬 Interaktiv Animatsiyalar - Safo Suvlari

## ✨ Qo'shilgan Animatsiyalar

### 1. **Scroll Animations** 📜
Sahifa scroll qilganda elementlar animatsiya bilan paydo bo'ladi.

**Turlar:**
- `fade-up` - Pastdan yuqoriga fade
- `fade-down` - Yuqoridan pastga fade
- `fade-left` - Chapdan o'ngga fade
- `fade-right` - O'ngdan chapga fade
- `scale-in` - Scale bilan fade
- `slide-in-left` - Chapdan slide
- `slide-in-right` - O'ngdan slide

**Ishlatish:**
```jsx
<AnimatedSection animation="fade-up" delay={100}>
  <h1>Sarlavha</h1>
</AnimatedSection>
```

### 2. **Mouse Follower** 🖱️
Sichqoncha harakatiga javob beradigan blur effect.

**Xususiyatlari:**
- Sichqonchani kuzatadi
- Blur effect
- Mix-blend-mode: difference
- Smooth transition

### 3. **CountUp Animation** 🔢
Raqamlar animatsiya bilan ko'tariladi.

**Ishlatish:**
```jsx
<CountUp end={5000} suffix="+" duration={2000} />
```

**Parametrlar:**
- `end` - Oxirgi raqam
- `suffix` - Qo'shimcha belgi (masalan: "+", "%")
- `prefix` - Oldingi belgi
- `duration` - Animatsiya davomiyligi (ms)

### 4. **Parallax Effect** 🌊
Scroll qilganda elementlar turli tezlikda harakatlanadi.

**Ishlatish:**
```jsx
<ParallaxSection speed={0.3}>
  <div>Content</div>
</ParallaxSection>
```

**Speed:**
- `0.1-0.3` - Sekin
- `0.4-0.6` - O'rtacha
- `0.7-1.0` - Tez

### 5. **Hover Effects** ✨

#### Card Hover
- `translateY(-8px)` - Lift effect
- `box-shadow` - Shadow depth
- `border-color` - Border animation

#### Button Hover
- Ripple effect
- Scale animation
- Shadow animation

#### Icon Hover
- Rotate animation
- Scale animation
- Color transition

### 6. **Interactive Effects** 🎯

#### Shimmer Effect
```css
.shimmer {
  animation: shimmer 2s infinite;
}
```

#### Glow Effect
```css
.glow-on-hover:hover::after {
  width: 200%;
  height: 200%;
}
```

#### Tilt Effect
```css
.tilt-card:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
}
```

### 7. **Loading Animations** ⏳

#### Skeleton Loading
```css
.skeleton {
  animation: skeleton-loading 1.4s ease-in-out infinite;
}
```

#### Bounce
```css
.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}
```

#### Rotate
```css
.animate-rotate {
  animation: rotate360 20s linear infinite;
}
```

### 8. **Gradient Animation** 🌈
```css
.animate-gradient {
  animation: gradientShift 3s ease infinite;
}
```

## 🎨 Animatsiya Parametrlari

### Easing Functions
```css
cubic-bezier(0.4, 0, 0.2, 1) - Material Design
ease-in-out - Smooth
ease-out - Natural
```

### Duration
- **Fast:** 0.2s - 0.3s
- **Normal:** 0.4s - 0.6s
- **Slow:** 0.8s - 1.2s

### Delay
- Har bir element uchun: `index * 50ms` yoki `index * 100ms`

## 📱 Performance

### Optimizatsiya
```css
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

## 🎯 Qayerda Ishlatilgan

### Home Page
- ✅ Hero section - fade-up animations
- ✅ Stats - CountUp animation
- ✅ Products - scale-in animation
- ✅ Promotions - Parallax effect
- ✅ Features - fade-up with delay

### Products Page
- ✅ Search bar - fade-up
- ✅ Filter buttons - fade-up
- ✅ Product cards - scale-in with stagger
- ✅ Modal - scale-in

### All Pages
- ✅ Mouse follower - Global
- ✅ Smooth scroll - Global
- ✅ Hover effects - All cards & buttons

## 🚀 Qo'shimcha Animatsiyalar

### Wave Animation
```jsx
<div className="animate-wave">
  <svg>...</svg>
</div>
```

### Magnetic Button
```jsx
<button className="btn btn-magnetic">
  Click me
</button>
```

### Interactive Card
```jsx
<div className="interactive-card">
  Content
</div>
```

## 💡 Maslahatlar

1. **Delay** - Elementlar ketma-ket paydo bo'lishi uchun delay ishlating
2. **Threshold** - IntersectionObserver uchun 0.1-0.3 optimal
3. **Once** - Animatsiya faqat bir marta bo'lishi uchun `once: true`
4. **Performance** - `will-change` dan foydalaning
5. **Accessibility** - `prefers-reduced-motion` ni qo'llab-quvvatlang

## 🎬 Demo

Loyihani ishga tushiring va quyidagilarni sinab ko'ring:

1. Sahifani scroll qiling - elementlar animatsiya bilan paydo bo'ladi
2. Sichqonchani harakatlantiring - blur effect
3. Product cardlarga hover qiling - lift va rotate
4. Buttonlarga hover qiling - ripple effect
5. Stats raqamlarini kuzating - CountUp animation

---

**Barcha animatsiyalar smooth, zamonaviy va performance-optimized!** ✨
