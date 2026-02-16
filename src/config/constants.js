export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Safo Suvlari';
export const API_URL = import.meta.env.VITE_API_URL || 'https://safo.onrender.com/api';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'info@safosuvlari.uz';
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || '+998 90 123 45 67';

export const DELIVERY_PRICE = 10000; // 10,000 so'm
export const FREE_DELIVERY_THRESHOLD = 100000; // 100,000 so'm dan yuqori bepul

export const PAYMENT_METHODS = [
  { id: 'cash', name: 'Naqd pul', icon: '💵' },
  { id: 'card', name: 'Plastik karta', icon: '💳' },
  { id: 'click', name: 'Click', icon: '📱' },
  { id: 'payme', name: 'Payme', icon: '💰' }
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'Barchasi', icon: '🌐' },
  { id: 'water', name: 'Suvlar', icon: '💧' },
  { id: 'filter', name: 'Filtrlar', icon: '🔧' }
];

export const SOCIAL_LINKS = {
  telegram: 'https://t.me/safosuvlari',
  instagram: 'https://instagram.com/safosuvlari',
  facebook: 'https://facebook.com/safosuvlari'
};

export const WORKING_HOURS = {
  weekdays: '9:00 - 18:00',
  weekend: 'Dam olish'
};

export const COMPANY_INFO = {
  name: 'Safo Suvlari',
  address: 'Toshkent shahar, Chilonzor tumani, Bunyodkor ko\'chasi, 1-uy',
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  phone2: '+998 91 234 56 78',
  inn: '123456789',
  license: 'AB 1234567'
};
