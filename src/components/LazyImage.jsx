import { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className = '', fallback = '🖼️' }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading) {
    return <div className={`lazy-image-placeholder ${className}`}>⏳</div>;
  }

  if (!imageSrc) {
    return <div className={`lazy-image-placeholder ${className}`}>{fallback}</div>;
  }

  return <img src={imageSrc} alt={alt} className={`lazy-image ${className}`} />;
};

export default LazyImage;
