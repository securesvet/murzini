import { useState } from "react";
import "./MenuItem.css";

export type Review = {
  author: string;
  text: string;
  rating: number;
};

export type MenuItemType = {
  name: string;
  description: string;
  price: number;
  image: string;
  reviews?: Review[];
};

const MenuItem = ({
  image,
  name,
  description,
  price,
  reviews,
}: MenuItemType) => {
  const [showReviews, setShowReviews] = useState(false);

  const averageRating = reviews
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="menu-item">
      <div className="menu-item-info">
        <img src={image} alt={name} className="menu-image" width={200} />
        <div>
          <p>
            <strong>{name}</strong> — {description}
          </p>
        </div>
        {reviews && (
          <>
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < averageRating ? "⭐" : "☆"}</span>
              ))}
              <span className="rating-number">{averageRating.toFixed(1)}</span>
            </div>
            <button
              type="button"
              onClick={() => setShowReviews(!showReviews)}
              className="review-button"
            >
              {showReviews ? "Скрыть отзывы" : "Показать отзывы"}
            </button>
          </>
        )}
        {showReviews && reviews && (
          <div className="reviews">
            {reviews.map((review, idx) => (
              <div key={idx} className="review">
                <p>
                  <strong>{review.author}</strong>:<br /> {review.text}
                </p>
                <p>{"⭐".repeat(review.rating)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <p className="price">{price} ₽</p>
      </div>
    </div>
  );
};

export default MenuItem;
