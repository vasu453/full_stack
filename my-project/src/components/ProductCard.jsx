import React from 'react';
import './ProductCard.css';

// We "destructure" props inside the curly braces
const ProductCard = ({ name, price, image, inStock }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <p className="price">${price}</p>
        
        {/* Visual status indicator */}
        <span className={inStock ? 'status-in' : 'status-out'}>
          {inStock ? '● In Stock' : '○ Out of Stock'}
        </span>
        
        <button disabled={!inStock}>
          {inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;