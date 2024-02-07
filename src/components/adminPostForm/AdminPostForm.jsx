"use client"

import React from 'react';
import styles from './adminpostform.module.css';
import { useFormState } from 'react-dom';
import { addPost } from '@/lib/action';

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h2>Add New Post</h2>
      <input type="text" name='title' placeholder='Title'/>
      <input type="hidden" name='userId' value={userId}/>
      <input type="text" name='slug' placeholder='Slug(Unique)'/>
      <input type="text" name='img' placeholder='Image Link'/>
      <textarea type="text" name='desc' placeholder='Description' rows={10}/>
      <button>Add</button>
      {state?.error}
    </form>
  )
}

export default AdminPostForm;