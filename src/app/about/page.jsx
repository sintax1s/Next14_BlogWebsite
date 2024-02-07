import React from 'react';
import styles from './about.module.css';
import ImageContainer from '@/components/imageContainer/ImageContainer';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>    
        <h1 className={styles.title}>We Create didgital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident voluptates quod ex sunt harum est. Ex voluptatibus in, error odio commodi dolores eveniet iure ratione, sapiente maxime saepe dicta?</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3 className={styles.subTitle}>10</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.subTitle}>234 K+</h3>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.subTitle}>5 K+</h3>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <ImageContainer 
        src={'/about.png'} 
        alt={'About Image'}
      />
    </div>
  )
}

export default AboutPage;
