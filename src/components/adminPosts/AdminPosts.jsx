import { getPosts } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import styles from './adminposts.module.css';
import DeletePost from '../deletePost/DeletePost';

const AdminPosts = async () => {

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Posts</h2>
      {posts.map(post => (
        <div key={post.id} className={styles.post}>
          <div className={styles.details}>
            <Image src={post.img} alt='post' width={50} height={50}/>
            <span className={styles.postTitle}>{post.title}</span> 
          </div>
          <DeletePost id={post.id} />
        </div>
      ))}
    </div>
  )
}

export default AdminPosts;