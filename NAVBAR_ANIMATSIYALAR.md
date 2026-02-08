# 🎨 Navbar Animatsiyalari

## ✨ Qo'shilgan Animatsiyalar

### 1. **Navigation Links** 🔗

#### Underline Effect (::before)
- Hover qilganda pastdan chiziq chiqadi
- Gradient rangda (primary → primary-light)
- 80% kenglikka yetadi
- Smooth transition (0.4s)

#### Shimmer Effect (::after)
- Hover qilganda chapdan o'ngga yorug'lik o'tadi
- Transparent → White → Transparent gradient
- 0.6s davomida animatsiya
- Dark mode uchun alohida stil

#### Hover Effects
- `translateY(-2px)` - Yuqoriga ko'tariladi
- Background color o'zgaradi
- Color primary ga aylanadi

#### Active Link
- Primary rangda
- Background bilan ajralib turadi
- Underline doim ko'rinadi
- Joriy sahifani ko'rsatadi

### 2. **Logo** 🎯

#### Glow Effect (::before)
- Hover qilganda atrofida yorug'lik paydo bo'ladi
- Radial gradient (primary color)
- 150% gacha kengayadi
- Smooth transition

#### Icon Animation
- 360° aylanadi
- Scale 1.1 ga oshadi
- Drop shadow qo'shiladi
- Gradient ranglari o'zgaradi (reverse)

### 3. **Theme Toggle** 🌓

#### Rotating Background (::before)
- Conic gradient animatsiya
- 360° aylanadi
- Hover qilganda ko'rinadi
- Primary color bilan

#### Button Effects
- 180° aylanadi
- Scale 1.1 ga oshadi
- Border color primary ga aylanadi
- Box shadow qo'shiladi
- Icon ga drop shadow

#### Active State
- Scale 0.95 ga kichrayadi
- Click effekti

### 4. **Cart Link** 🛒

#### Ripple Effect (::before)
- Click qilganda to'lqin effekti
- Markazdan kengayadi
- 200% gacha yetadi
- White color bilan

#### Hover Effects
- Primary background
- Scale 1.05 + rotate 5deg
- Box shadow qo'shiladi
- Badge animatsiyasi

#### Badge Animation
- Bounce effekti (0.6s)
- Hover qilganda ranglar o'zgaradi
- Box shadow bilan
- Scale 1.2 ga oshadi

### 5. **Wishlist Link** ❤️

#### Heart Beat (::after)
- Border ring animatsiya
- Scale 1.3 ga kengayadi
- Opacity 0.5
- Pulse effekti

#### Heartbeat Animation
- 2s davomida takrorlanadi
- 4 marta "uradi"
- Scale 1.05 ga oshadi
- Faqat badge bo'lganda ishlaydi

#### Hover Effects
- Pink background (#FEE)
- Primary border
- Scale 1.05
- Ring effekti

## 🎯 CSS Texnikalari

### Pseudo-elements
```css
::before - Background effects, underlines, glows
::after - Shimmer effects, rings, overlays
```

### Transitions
```css
cubic-bezier(0.4, 0, 0.2, 1) - Smooth easing
0.3s - 0.6s - Optimal duration
```

### Transforms
```css
translateY() - Vertical movement
scale() - Size changes
rotate() - Rotation effects
```

### Animations
```css
@keyframes bounce - Badge bounce
@keyframes heartbeat - Wishlist pulse
```

## 🌈 Ranglar

### Light Mode
- Primary: #0066FF
- Hover: rgba(0, 102, 255, 0.08)
- Shadow: rgba(0, 102, 255, 0.3)

### Dark Mode
- Primary: #3385FF
- Hover: rgba(51, 133, 255, 0.15)
- Shimmer: rgba(255, 255, 255, 0.1)

## 📱 Responsive

Barcha animatsiyalar mobil qurilmalarda ham ishlaydi:
- Touch events qo'llab-quvvatlanadi
- Performance optimizatsiya qilingan
- Reduced motion qo'llab-quvvatlanadi

## ⚡ Performance

### Optimizatsiyalar:
- `will-change` ishlatilmagan (zarur bo'lganda)
- GPU acceleration (transform, opacity)
- Minimal repaints
- Efficient selectors

### Browser Support:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎬 Animatsiya Turlari

1. **Hover Animations** - Mouse hover qilganda
2. **Active Animations** - Click qilganda
3. **State Animations** - Active link
4. **Continuous Animations** - Heartbeat, pulse
5. **Transition Animations** - Smooth o'zgarishlar

## 💡 Foydalanish

Barcha animatsiyalar avtomatik ishlaydi:
- Linklar ustiga hover qiling
- Theme toggle ni bosing
- Cart/Wishlist ga hover qiling
- Sahifalar orasida o'ting (active state)

## 🔧 Sozlash

Animatsiya tezligini o'zgartirish:
```css
transition: all 0.3s; /* 0.3s ni o'zgartiring */
```

Animatsiya o'chirish:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

---

**Versiya:** 2.1.0  
**Sana:** 2026-02-08  
**Status:** ✅ Ishga tushirildi
