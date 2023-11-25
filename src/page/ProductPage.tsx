import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/product.service';
import styles from '../styles/Product.module.css';

const ProductPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data</p>;
  }
  return (
    <div className={styles.product_wrapper}>
      {products?.map((product: any, index: number) => (
        <ProductCard
          key={`product-${index}-${product.id}`}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductPage;
