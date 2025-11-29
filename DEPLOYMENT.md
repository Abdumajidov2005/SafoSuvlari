# 🚀 Deployment Guide - Safo Suvlari

## Loyihani Ishga Tushirish

### 1. Development Mode

```bash
# Paketlarni o'rnatish
npm install

# Development server
npm run dev
```

Brauzerda: `http://localhost:5173`

### 2. Production Build

```bash
# Production build yaratish
npm run build

# Build natijasini ko'rish
npm run preview
```

Build fayllari `dist/` papkasida saqlanadi.

## 🌐 Hosting Platformalari

### Vercel (Tavsiya etiladi)

1. **GitHub ga yuklash**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Vercel ga deploy qilish**
- [vercel.com](https://vercel.com) ga kiring
- "Import Project" tugmasini bosing
- GitHub repository tanlang
- Deploy tugmasini bosing

**Vercel Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Netlify

1. **Build settings:**
```
Build command: npm run build
Publish directory: dist
```

2. **netlify.toml yaratish:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

1. **vite.config.js ni yangilash:**
```javascript
export default {
  base: '/repository-name/',
  // ...
}
```

2. **Deploy script qo'shish (package.json):**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Deploy qilish:**
```bash
npm install -D gh-pages
npm run deploy
```

### Firebase Hosting

1. **Firebase CLI o'rnatish:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

2. **firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

3. **Deploy:**
```bash
npm run build
firebase deploy
```

### Cloudflare Pages

1. Cloudflare Pages ga kiring
2. GitHub repository ulang
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy tugmasini bosing

## 🔧 Environment Variables

Production uchun `.env.production` yarating:

```env
VITE_API_URL=https://api.safosuvlari.uz
VITE_APP_URL=https://safosuvlari.uz
VITE_GOOGLE_MAPS_API_KEY=your_key
VITE_CLICK_MERCHANT_ID=your_id
VITE_PAYME_MERCHANT_ID=your_id
```

## 📊 Performance Optimization

### 1. Image Optimization
```bash
# WebP formatga o'tkazish
npm install -D vite-plugin-imagemin
```

### 2. Code Splitting
```javascript
// Lazy loading
const Products = lazy(() => import('./pages/Products'));
```

### 3. Compression
```bash
# Gzip compression
npm install -D vite-plugin-compression
```

### 4. CDN
- Rasmlarni CDN ga yuklash
- Static fayllarni CDN orqali berish

## 🔒 Security Checklist

- [ ] Environment variables xavfsiz saqlash
- [ ] HTTPS ishlatish
- [ ] CSP headers qo'shish
- [ ] Rate limiting
- [ ] Input validation
- [ ] XSS protection
- [ ] CSRF tokens

## 📈 Monitoring

### Google Analytics
```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Error Tracking)
```bash
npm install @sentry/react
```

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production"
});
```

## 🧪 Pre-deployment Checklist

- [ ] Barcha testlar o'tdi
- [ ] Build xatosiz
- [ ] Environment variables to'g'ri
- [ ] Meta tags to'ldirilgan
- [ ] Favicon qo'shilgan
- [ ] robots.txt yaratilgan
- [ ] sitemap.xml yaratilgan
- [ ] 404 sahifa mavjud
- [ ] Loading states ishlaydi
- [ ] Error handling to'g'ri
- [ ] Mobile responsive
- [ ] Cross-browser test
- [ ] Performance test
- [ ] Security audit
- [ ] Accessibility test

## 🔄 CI/CD Pipeline

### GitHub Actions

`.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📱 PWA Setup (Optional)

1. **vite-plugin-pwa o'rnatish:**
```bash
npm install -D vite-plugin-pwa
```

2. **vite.config.js:**
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Safo Suvlari',
        short_name: 'Safo',
        description: 'Toza va sog\'lom suv',
        theme_color: '#0ea5e9',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
}
```

## 🌍 Custom Domain

### Vercel
1. Vercel dashboard ga kiring
2. Project settings > Domains
3. Custom domain qo'shing
4. DNS settings yangilang

### DNS Configuration
```
Type: A
Name: @
Value: [Vercel IP]

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📞 Support

Muammolar yuzaga kelsa:
- Email: support@safosuvlari.uz
- Telegram: @safosuvlari_support
- GitHub Issues: [repository]/issues

---

**Muvaffaqiyatli deploy!** 🎉
