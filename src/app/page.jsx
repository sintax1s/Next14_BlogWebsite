import Image from 'next/image';
import styles from './home.module.css';
import ImageContainer from '@/components/imageContainer/ImageContainer';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Creative Thoughts Agency.
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nemo quidem adipisci suscipit culpa? Nulla!
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.button}><Link href="/about">Learn More</Link></button>
          <button className={styles.button}><Link href="/contact">Contact</Link></button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt='brands' fill className={styles.brandImage}/>
        </div>
      </div>
      <ImageContainer 
        src={'/hero.gif'} 
        alt={'Hero'}
      />
    </div>
  )
};

export default Home;