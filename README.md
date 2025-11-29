# 💧 Safo Suvlari - Zamonaviy E-commerce Platforma

Toza va sog'lom suv mahsulotlarini sotish uchun zamonaviy veb-ilova.

## 🚀 Texnologiyalar

- **React 19** - Zamonaviy UI kutubxonasi
- **Vite** - Tez build tool
- **Context API** - State management
- **LocalStorage** - Ma'lumotlarni saqlash
- **CSS3** - Zamonaviy animatsiyalar va effektlar

## ✨ Xususiyatlar

### 🎨 Zamonaviy Dizayn
- Responsive dizayn (mobil, planshet, desktop)
- Smooth animatsiyalar va transitions
- Glassmorphism effektlari
- Gradient ranglar va neon glow
- Custom scrollbar

### 🛠️ Funksionallik
- **Mahsulotlar sahifasi**: Filterlash va qidiruv
- **Savat tizimi**: LocalStorage bilan saqlash
- **Toast notifications**: Real-time xabarlar
- **Lazy loading**: Rasm va komponentlar uchun
- **Skeleton loaders**: Yuklash holati
- **Animated counters**: Statistika uchun
- **Scroll to top**: Yuqoriga qaytish tugmasi
- **Progress bar**: Sahifa scroll ko'rsatkichi

### 📱 Sahifalar
1. **Bosh sahifa** - Hero banner, mahsulotlar, aksiyalar
2. **Mahsulotlar** - Filterlash, qidiruv, batafsil ko'rish
3. **Savat** - Mahsulotlarni boshqarish, buyurtma berish
4. **Biz haqimizda** - Kompaniya ma'lumotlari
5. **Aloqa** - Kontakt forma va xarita

## 🎯 Zamonaviy Texnologiyalar

### Hooks
- `useLocalStorage` - Ma'lumotlarni saqlash
- `useIntersectionObserver` - Scroll animatsiyalari
- `useToast` - Xabarlar tizimi

### Komponentlar
- `FadeIn` - Scroll animatsiyasi
- `AnimatedCounter` - Raqamlarni animatsiya qilish
- `LazyImage` - Rasmlarni lazy loading
- `Skeleton` - Loading holati
- `Toast` - Notification tizimi
- `ScrollToTop` - Yuqoriga qaytish
- `ProgressBar` - Scroll progress
- `SearchBar` - Qidiruv komponenti

### Animatsiyalar
- Fade in/out
- Slide animations
- Pulse effects
- Shimmer loading
- Ripple effects
- Float animations
- 3D card hover
- Typing effect

## 📦 O'rnatish

```bash
# Loyihani klonlash
git clone <repository-url>

# Papkaga kirish
cd SafoSuvlari

# Paketlarni o'rnatish
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production
npm run preview
```

## 🌐 Ishga tushirish

Development rejimda:
```bash
npm run dev
```

Brauzerda ochish: `http://localhost:5173`

## 📁 Loyiha Strukturasi

```
src/
├── components/       # Qayta ishlatiladigan komponentlar
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FadeIn.jsx
│   ├── Toast.jsx
│   ├── Skeleton.jsx
│   ├── ScrollToTop.jsx
│   ├── ProgressBar.jsx
│   ├── SearchBar.jsx
│   ├── AnimatedCounter.jsx
│   ├── LazyImage.jsx
│   ├── LoadingSpinner.jsx
│   └── Badge.jsx
├── pages/           # Sahifalar
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── context/         # State management
│   └── CartContext.jsx
├── hooks/           # Custom hooks
│   ├── useLocalStorage.js
│   └── useIntersectionObserver.js
├── utils/           # Yordamchi funksiyalar
│   ├── formatters.js
│   └── validators.js
├── data/            # Mock ma'lumotlar
│   └── products.js
├── App.jsx          # Asosiy komponent
├── App.css          # Stillar
└── main.jsx         # Entry point
```

## 🎨 Dizayn Xususiyatlari

### Ranglar
- Primary: `#0ea5e9` (Sky Blue)
- Success: `#10b981` (Green)
- Danger: `#ef4444` (Red)
- Secondary: `#64748b` (Slate)

### Animatsiyalar
- Fade in/out: 0.6s
- Hover effects: 0.3s
- Scroll animations: Intersection Observer
- Counter animations: RequestAnimationFrame

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Konfiguratsiya

### Vite Config
```javascript
// vite.config.js
export default {
  plugins: [react()],
  server: {
    port: 5173
  }
}
```

## 📝 To-Do

- [ ] Backend integratsiyasi
- [ ] User authentication
- [ ] Payment gateway (Click, Payme)
- [ ] Admin panel
- [ ] Order tracking
- [ ] Email notifications
- [ ] PWA support
- [ ] Multi-language support

## 🤝 Hissa qo'shish

Pull request'lar qabul qilinadi. Katta o'zgarishlar uchun avval issue oching.

## 📄 Litsenziya

MIT

## 👨‍💻 Muallif

Safo Suvlari jamoasi

## 📞 Aloqa

- Email: info@safosuvlari.uz
- Telefon: +998 90 123 45 67
- Manzil: Toshkent, O'zbekiston

---

**Toza va sog'lom suv - sog'lom hayot!** 💧
