import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard(props) {
  const { title, subtitle, image } = props.product;

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={image} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default ProductCard;
