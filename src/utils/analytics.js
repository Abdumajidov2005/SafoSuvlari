// Google Analytics yoki boshqa analytics xizmatlari uchun
export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
  console.log('Page view:', pageName);
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
  console.log('Event:', eventName, eventParams);
};

export const trackAddToCart = (product) => {
  trackEvent('add_to_cart', {
    item_id: product.id,
    item_name: product.name,
    price: product.price,
    currency: 'UZS'
  });
};

export const trackPurchase = (orderId, total, items) => {
  trackEvent('purchase', {
    transaction_id: orderId,
    value: total,
    currency: 'UZS',
    items: items.map(item => ({
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity
    }))
  });
};

export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm
  });
};
