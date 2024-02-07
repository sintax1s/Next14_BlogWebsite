import React from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({post}) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', separator: '.' }).format(post.createdAt);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image 
            src={post.img} 
            alt='Post'
            loading="lazy"
            sizes='(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 40vw'
            fill
            className={styles.image}
          />
        </div>
        <span className={styles.date}>{formattedDate.replaceAll('/', '.')}</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;