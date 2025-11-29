const LoadingSpinner = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  };

  return (
    <div className={`spinner ${sizeClasses[size]}`}>
      <div className="spinner-circle"></div>
    </div>
  );
};

export default LoadingSpinner;
