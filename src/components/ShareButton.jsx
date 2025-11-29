import { shareContent } from '../utils/helpers';
import { useToast } from './Toast';

const ShareButton = ({ title, text, url }) => {
  const { addToast } = useToast();

  const handleShare = async () => {
    const shared = await shareContent(title, text, url || window.location.href);
    if (shared) {
      addToast('Muvaffaqiyatli ulashildi!', 'success');
    } else {
      // Fallback: copy to clipboard
      const copied = await navigator.clipboard.writeText(url || window.location.href);
      if (copied) {
        addToast('Havola nusxalandi!', 'success');
      }
    }
  };

  return (
    <button className="btn btn-secondary" onClick={handleShare}>
      📤 Ulashish
    </button>
  );
};

export default ShareButton;
