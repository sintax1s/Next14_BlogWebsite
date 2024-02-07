import React from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import { getOnePost, getUser } from '@/lib/data';
import PostUser from '@/components/postUser/PostUser';

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getOnePost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
       <Image 
          src={post.img} 
          alt='Post' 
          fill
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{post.title}</h2>
          <PostUser userId={post.userId} createdAt={post.createdAt}/>
        <p className={styles.description}>
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePostPage;
