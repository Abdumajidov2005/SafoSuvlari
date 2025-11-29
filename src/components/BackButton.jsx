const BackButton = ({ onClick }) => {
  const handleBack = () => {
    if (onClick) {
      onClick();
    } else {
      window.history.back();
    }
  };

  return (
    <button className="back-button" onClick={handleBack}>
      ← Orqaga
    </button>
  );
};

export default BackButton;
