import { removePost } from '@/lib/action';
import React from 'react';
import styles from './deletepost.module.css';

const DeletePost = ({id}) => {

  const deletePostWithId = async () => {
    "use server"

    await removePost(id);
  }

  return (
    <form action={deletePostWithId}>        
      <button className={styles.button}>Delete</button>
    </form>
  )
}

export default DeletePost;