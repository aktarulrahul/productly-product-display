import React from 'react';
import styles from './ProductCard.module.css';

type Props = {
  name: string;
  description: string;
};

const ProductCard = ({ name, description }: Props) => {
  const [showDescription, setShowDescription] = React.useState(false);
  const toggleDescription = () => setShowDescription((prev) => !prev);
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <button onClick={toggleDescription}>
          {showDescription ? 'Hide' : 'Show'} Description
        </button>
        {showDescription && <p>{description}</p>}
        <br />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
