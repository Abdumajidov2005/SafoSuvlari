export const products = [
  {
    id: 1,
    name: "Premium Suv 5L",
    category: "water",
    size: "5L",
    price: 8000,
    image: "/water-5l.jpg",
    description: "Oilaviy iste'mol uchun premium sifatli ichimlik suvi",
    features: ["5 bosqichli tozalash", "Mineral tarkibi muvozanatlangan", "BPA-free qadoq"],
    certification: "ISO 9001:2015, HACCP"
  },
  {
    id: 2,
    name: "Premium Suv 10L",
    category: "water",
    size: "10L",
    price: 15000,
    image: "/water-10l.jpg",
    description: "Katta oilalar va kichik ofislar uchun optimal yechim",
    features: ["Yuqori sifatli tozalash", "Uzoq saqlash muddati", "Ekologik toza"],
    certification: "ISO 9001:2015, HACCP"
  },
  {
    id: 3,
    name: "Premium Suv 19L",
    category: "water",
    size: "19L",
    price: 25000,
    image: "/water-19l.jpg",
    description: "Korporativ mijozlar va ofislar uchun professional yechim",
    features: ["Korporativ standartlar", "Muntazam yetkazib berish", "Sifat kafolati"],
    certification: "ISO 9001:2015, HACCP, Halal"
  },
  {
    id: 4,
    name: "AquaPro Home System",
    category: "filter",
    price: 450000,
    image: "/filter-home.jpg",
    description: "Uy uchun professional suv tozalash tizimi",
    features: ["5 bosqichli tozalash", "Avtomatik tozalash", "3 yillik kafolat"],
    certification: "CE, RoHS"
  },
  {
    id: 5,
    name: "AquaPro Business System",
    category: "filter",
    price: 850000,
    image: "/filter-office.jpg",
    description: "Biznes va ofislar uchun yuqori unumdorlikli tizim",
    features: ["7 bosqichli tozalash", "Smart monitoring", "5 yillik kafolat"],
    certification: "CE, RoHS, NSF"
  },
  {
    id: 6,
    name: "AquaPro Industrial",
    category: "filter",
    price: 2500000,
    image: "/filter-industrial.jpg",
    description: "Sanoat korxonalari uchun professional yechim",
    features: ["Industrial grade", "24/7 monitoring", "10 yillik kafolat"],
    certification: "CE, RoHS, NSF, ISO 14001"
  }
];

export const promotions = [
  {
    id: 1,
    title: "Korporativ Mijozlar uchun Maxsus Chegirma",
    discount: "20%",
    validUntil: "2025-12-31",
    description: "Oylik 100+ litr buyurtma uchun"
  },
  {
    id: 2,
    title: "Professional Filtr Tizimi + Bepul O'rnatish",
    discount: "Bepul",
    validUntil: "2025-12-31",
    description: "Barcha filtr tizimlariga professional o'rnatish"
  },
  {
    id: 3,
    title: "Yillik Kontrakt - 15% Tejash",
    discount: "15%",
    validUntil: "2025-12-31",
    description: "Yillik xizmat shartnomasi tuzganlar uchun"
  }
];

export const services = [
  {
    id: 1,
    title: "Korporativ Yetkazib Berish",
    description: "Ofis va korxonalar uchun muntazam yetkazib berish xizmati",
    icon: "truck"
  },
  {
    id: 2,
    title: "Professional O'rnatish",
    description: "Malakali mutaxassislar tomonidan tizim o'rnatish",
    icon: "tools"
  },
  {
    id: 3,
    title: "Texnik Xizmat",
    description: "24/7 texnik qo'llab-quvvatlash va xizmat ko'rsatish",
    icon: "support"
  },
  {
    id: 4,
    title: "Sifat Nazorati",
    description: "Muntazam laboratoriya testlari va sifat sertifikatlari",
    icon: "certificate"
  }
];

export const clients = [
  { name: "Uzbekistan Airways", logo: "/clients/uzbekistan-airways.png" },
  { name: "Uzautomotors", logo: "/clients/uzautomotors.png" },
  { name: "Tashkent City", logo: "/clients/tashkent-city.png" },
  { name: "Humo", logo: "/clients/humo.png" },
  { name: "Uzum", logo: "/clients/uzum.png" },
  { name: "Alif", logo: "/clients/alif.png" }
];

export const certifications = [
  { name: "ISO 9001:2015", description: "Sifat menejmenti tizimi" },
  { name: "HACCP", description: "Oziq-ovqat xavfsizligi" },
  { name: "Halal", description: "Halal sertifikati" },
  { name: "CE", description: "Yevropa standartlari" },
  { name: "NSF", description: "Xalqaro suv standartlari" }
];
