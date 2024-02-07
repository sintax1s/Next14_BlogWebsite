import React from 'react';
import styles from './imageContainer.module.css';
import Image from 'next/image';

const ImageContainer = ({ src, alt }) => {
  return (
    <div className={styles.imageContainer}>
      <Image 
        src={src} 
        alt={alt} 
        className={styles.heroImage} 
        fill
      />
    </div>
  )
}

export default ImageContainer