# 💧 Safo Suvlari - Zamonaviy Suv Yetkazib Berish Platformasi

Zamonaviy React + Vite texnologiyalari bilan yaratilgan to'liq funksional e-commerce platforma.

## ✨ Xususiyatlar

### 🎨 Zamonaviy Dizayn
- Gradient ranglar va smooth animatsiyalar
- Glassmorphism effektlari
- Floating cards va pulse animatsiyalar
- Professional UI/UX

### 🌓 Dark Mode
- To'liq dark/light mode qo'llab-quvvatlash
- localStorage bilan saqlanadi
- Smooth theme transitions
- Barcha sahifalarda ishlaydi

### 🏠 Asosiy Sahifalar

#### Home (Bosh sahifa)
- Hero section (gradient background, animated cards)
- Statistika (5000+ mijozlar, 50K+ buyurtmalar)
- Mashhur mahsulotlar
- Aksiyalar va chegirmalar
- Xususiyatlar (features)
- CTA section

#### Products (Mahsulotlar)
- Filterlash (Barchasi, Suvlar, Filtrlar)
- Mahsulot kartochkalari
- Savatga qo'shish
- Modal oyna (batafsil ma'lumot)

#### Cart (Savatcha)
- Mahsulotlar ro'yxati
- Miqdorni o'zgartirish
- Narxni avtomatik hisoblash
- Checkout modal

#### Orders (Buyurtmalar) - Yandex Go kabi
- 5 bosqichli progress tracking:
  1. 📝 Qabul qilindi
  2. ✓ Tasdiqlandi
  3. 📦 Tayyorlanmoqda
  4. 🚚 Kuryerda
  5. ✓ Yetkazildi
- Real-time status ko'rsatish
- Animated delivery icon
- Buyurtma tafsilotlari
- Taxminiy yetkazish vaqti

#### About (Biz haqimizda)
- Kompaniya tarixi
- Afzalliklar
- Jarayon bosqichlari
- Statistika

#### Contact (Aloqa)
- Kontakt ma'lumotlari
- Xabar yuborish formasi
- Google Maps

## 🚀 Ishga Tushirish

### Usul 1: BAT fayl (Eng oson)
```bash
start.bat
```
Faqat `start.bat` faylini ikki marta bosing.

### Usul 2: CMD (Command Prompt)
```bash
npm run dev
```

### Usul 3: PowerShell (Agar ruxsat berilgan bo'lsa)
```powershell
npm run dev
```

Loyiha `http://localhost:5173` da ochiladi.

## 📁 Loyiha Strukturasi

```
SafoSuvlari/
├── src/
│   ├── components/        # Qayta ishlatiladigan komponentlar
│   │   ├── Navbar.jsx    # Navigatsiya (dark mode bilan)
│   │   └── Footer.jsx    # Footer
│   ├── context/          # State management
│   │   ├── CartContext.jsx    # Savatcha
│   │   ├── OrderContext.jsx   # Buyurtmalar
│   │   └── ThemeContext.jsx   # Dark/Light mode
│   ├── pages/            # Sahifalar
│   │   ├── Home.jsx      # Bosh sahifa
│   │   ├── Products.jsx  # Mahsulotlar
│   │   ├── Cart.jsx      # Savatcha
│   │   ├── Orders.jsx    # Buyurtmalar (tracking)
│   │   ├── About.jsx     # Biz haqimizda
│   │   └── Contact.jsx   # Aloqa
│   ├── data/
│   │   └── products.js   # Mahsulotlar ma'lumotlari
│   ├── App.jsx           # Asosiy komponent
│   ├── App.css           # Asosiy CSS
│   ├── index.css         # Global CSS + Dark mode
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── start.bat             # Oson ishga tushirish
└── README.md
```

## 🎯 Texnologiyalar

- **React 19** - UI library
- **Vite** - Build tool
- **Context API** - State management
- **CSS Variables** - Theming
- **SVG Icons** - Modern icons
- **LocalStorage** - Ma'lumotlarni saqlash

## 🎨 Dizayn Xususiyatlari

### Ranglar (Light Mode)
- Primary: `#06b6d4` (Cyan)
- Secondary: `#3b82f6` (Blue)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Danger: `#ef4444` (Red)

### Ranglar (Dark Mode)
- Primary: `#22d3ee` (Light Cyan)
- Secondary: `#60a5fa` (Light Blue)
- Background: `#0f172a` (Dark Slate)

### Animatsiyalar
- Floating cards (hero section)
- Pulse effect (delivery tracking)
- Smooth transitions
- Hover effects
- Progress bar animations

## 📱 Responsive

Loyiha barcha ekran o'lchamlarida ishlaydi:
- 📱 Mobile (< 480px)
- 📱 Tablet (< 768px)
- 💻 Desktop (< 1024px)
- 🖥️ Large Desktop (> 1024px)

## 🔧 Muammolarni Hal Qilish

### PowerShell Execution Policy
Agar `npm run dev` ishlamasa:

**CMD dan foydalaning:**
```bash
cd C:\Users\user\Desktop\SafoSuvlari
npm run dev
```

**Yoki PowerShell ruxsatini o'zgartiring:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port band bo'lsa
Agar 5173 port band bo'lsa, Vite avtomatik boshqa port tanlaydi.

## 📝 Keyingi Qadamlar

1. ✅ Backend API integratsiyasi
2. ✅ Real payment gateway (Click, Payme)
3. ✅ SMS notification
4. ✅ Admin panel
5. ✅ Real-time order tracking
6. ✅ User authentication
7. ✅ Order history
8. ✅ Reviews va ratings

## 👨‍💻 Ishlab Chiquvchi

Safo Suvlari loyihasi - 2025

---

**Loyihani ishga tushiring va sinab ko'ring!** 🚀
