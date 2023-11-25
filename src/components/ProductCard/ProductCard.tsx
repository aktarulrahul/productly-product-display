import React from 'react';
import styles from './ProductCard.module.css';

type Props = {
  name: string;
  description: string;
  image: string;
};

const ProductCard = ({ name, description, image }: Props) => {
  const [showDescription, setShowDescription] = React.useState(false);
  const toggleDescription = () => setShowDescription((prev) => !prev);
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {showDescription ? (
          <p className={styles.description}>{description}</p>
        ) : (
          <img src={image} alt={name} />
        )}
      </div>
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <button onClick={toggleDescription}>
          {showDescription ? 'Hide' : 'Show'} Description
        </button>
        <br />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
