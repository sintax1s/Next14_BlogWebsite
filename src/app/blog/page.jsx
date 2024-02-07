import React from 'react';
import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';
import Grid from '@mui/material/Unstable_Grid2';

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}> 
        {posts.map(post => (
          <Grid xs={4} key={post.slug}>
            <div className={styles.post}>
            <PostCard post={post}/>
          </div>
          </Grid>        
        ))}
      </Grid>
    </div>
  )
}

export default BlogPage;