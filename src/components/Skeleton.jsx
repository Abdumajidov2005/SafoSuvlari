const Skeleton = ({ width = '100%', height = '20px', className = '' }) => {
  return (
    <div 
      className={`skeleton ${className}`}
      style={{ width, height }}
    />
  );
};

export const ProductSkeleton = () => (
  <div className="product-item skeleton-wrapper">
    <Skeleton height="120px" className="skeleton-image" />
    <Skeleton width="80%" height="24px" />
    <Skeleton width="60%" height="16px" />
    <Skeleton width="40%" height="28px" />
    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
      <Skeleton width="48%" height="40px" />
      <Skeleton width="48%" height="40px" />
    </div>
  </div>
);

export default Skeleton;
