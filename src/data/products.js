import { API_URL } from "../config/constants";

export const getProductsData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${API_URL}/products/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getProducts = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString
      ? `${API_URL}/products/?${queryString}`
      : `${API_URL}/products/`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Agar token bo'lsa, qo'shamiz
        ...(localStorage.getItem("token") && {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Products from API:", result);

    // API dan kelgan ma'lumotlarni qaytarish
    return result;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Mahsulotlarni kategoriyaga bo'lib olish
export const getProductsByCategory = async (category) => {
  return getProducts({ category });
};

// Mahsulotni ID bo'yicha olish
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(localStorage.getItem("token") && {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(`Product ${id} from API:`, result);
    return result;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Mahsulotlarni qidirish
export const searchProducts = async (query) => {
  return getProducts({ search: query });
};

export const promotions = [
  {
    id: 1,
    title: "Korporativ Mijozlar uchun Maxsus Chegirma",
    discount: "20%",
    validUntil: "2025-12-31",
    description: "Oylik 100+ litr buyurtma uchun",
  },
  {
    id: 2,
    title: "Professional Filtr Tizimi + Bepul O'rnatish",
    discount: "Bepul",
    validUntil: "2025-12-31",
    description: "Barcha filtr tizimlariga professional o'rnatish",
  },
  {
    id: 3,
    title: "Yillik Kontrakt - 15% Tejash",
    discount: "15%",
    validUntil: "2025-12-31",
    description: "Yillik xizmat shartnomasi tuzganlar uchun",
  },
];

export const services = [
  {
    id: 1,
    title: "Korporativ Yetkazib Berish",
    description: "Ofis va korxonalar uchun muntazam yetkazib berish xizmati",
    icon: "truck",
  },
  {
    id: 2,
    title: "Professional O'rnatish",
    description: "Malakali mutaxassislar tomonidan tizim o'rnatish",
    icon: "tools",
  },
  {
    id: 3,
    title: "Texnik Xizmat",
    description: "24/7 texnik qo'llab-quvvatlash va xizmat ko'rsatish",
    icon: "support",
  },
  {
    id: 4,
    title: "Sifat Nazorati",
    description: "Muntazam laboratoriya testlari va sifat sertifikatlari",
    icon: "certificate",
  },
];

export const clients = [
  { name: "Uzbekistan Airways", logo: "/clients/uzbekistan-airways.png" },
  { name: "Uzautomotors", logo: "/clients/uzautomotors.png" },
  { name: "Tashkent City", logo: "/clients/tashkent-city.png" },
  { name: "Humo", logo: "/clients/humo.png" },
  { name: "Uzum", logo: "/clients/uzum.png" },
  { name: "Alif", logo: "/clients/alif.png" },
];

export const certifications = [
  { name: "ISO 9001:2015", description: "Sifat menejmenti tizimi" },
  { name: "HACCP", description: "Oziq-ovqat xavfsizligi" },
  { name: "Halal", description: "Halal sertifikati" },
  { name: "CE", description: "Yevropa standartlari" },
  { name: "NSF", description: "Xalqaro suv standartlari" },
];
