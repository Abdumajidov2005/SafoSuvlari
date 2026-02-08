import React, { useState, useEffect } from 'react';
import { Star, User, Send } from 'lucide-react';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  // Load reviews from localStorage
  useEffect(() => {
    const savedReviews = localStorage.getItem(`reviews-${productId}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      // Default fake reviews for demo
      const defaultReviews = [
        {
          id: 1,
          name: 'Azizbek',
          rating: 5,
          comment: 'Juda sifatli suv, tavsiya qilaman!',
          date: '2024-02-01'
        },
        {
          id: 2,
          name: 'Madina',
          rating: 4,
          comment: 'Yetkazib berish xizmati tez ekan.',
          date: '2024-02-03'
        }
      ];
      setReviews(defaultReviews);
    }
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;

    const newReview = {
      id: Date.now(),
      name: name || 'Foydalanuvchi',
      rating,
      comment,
      date: new Date().toLocaleDateString()
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${productId}`, JSON.stringify(updatedReviews));
    
    // Reset form
    setRating(0);
    setComment('');
    setName('');
  };

  const averageRating = reviews.length 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="product-reviews">
      <div className="reviews-header">
        <h3>Sharhlar ({reviews.length})</h3>
        <div className="average-rating">
          <span className="rating-number">{averageRating}</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={16} 
                fill={star <= Math.round(averageRating) ? "#FFD700" : "none"} 
                color={star <= Math.round(averageRating) ? "#FFD700" : "#CBD5E1"}
              />
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        <h4>Sharh qoldirish</h4>
        <div className="rating-select">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="star-btn"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              <Star 
                size={24} 
                fill={star <= (hoverRating || rating) ? "#FFD700" : "none"} 
                color={star <= (hoverRating || rating) ? "#FFD700" : "#CBD5E1"}
              />
            </button>
          ))}
        </div>
        
        <input
          type="text"
          placeholder="Ismingiz (ixtiyoriy)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="review-input"
        />
        
        <div className="input-group">
          <textarea
            placeholder="Fikringizni yozing..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="review-textarea"
            required
          />
          <button type="submit" className="submit-btn" disabled={rating === 0}>
            <Send size={18} />
          </button>
        </div>
      </form>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-user">
              <div className="user-avatar">
                <User size={16} />
              </div>
              <div className="user-info">
                <span className="user-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
            <div className="review-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={12} 
                  fill={star <= review.rating ? "#FFD700" : "none"} 
                  color={star <= review.rating ? "#FFD700" : "#CBD5E1"}
                />
              ))}
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>

      <style>{`
        .product-reviews {
          margin-top: 24px;
          border-top: 1px solid var(--border);
          padding-top: 24px;
        }

        .reviews-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .average-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rating-number {
          font-size: 24px;
          font-weight: bold;
          color: var(--text-primary);
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .review-form {
          background: var(--bg-secondary);
          padding: 16px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .rating-select {
          display: flex;
          gap: 4px;
          margin: 12px 0;
        }

        .star-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.2s;
        }

        .star-btn:hover {
          transform: scale(1.2);
        }

        .review-input, .review-textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--bg-primary);
          color: var(--text-primary);
          margin-bottom: 10px;
          font-family: inherit;
        }

        .input-group {
          display: flex;
          gap: 10px;
        }

        .review-textarea {
          resize: vertical;
          min-height: 60px;
          margin-bottom: 0;
        }

        .submit-btn {
          background: var(--primary);
          color: white;
          border: none;
          width: 44px;
          height: 44px; /* Match textarea minimal height roughly */
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
          align-self: flex-start;
        }

        .submit-btn:disabled {
          background: var(--text-tertiary);
          cursor: not-allowed;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 300px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .reviews-list::-webkit-scrollbar {
          width: 4px;
        }

        .reviews-list::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 4px;
        }

        .review-item {
          padding: 12px;
          border-radius: 8px;
          background: var(--bg-secondary);
        }

        .review-user {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          font-size: 12px;
        }

        .user-name {
          font-weight: 600;
        }

        .review-date {
          color: var(--text-tertiary);
          font-size: 10px;
        }

        .review-rating {
          display: flex;
          gap: 1px;
          margin-bottom: 4px;
        }

        .review-comment {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

export default ProductReviews;
