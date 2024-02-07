import React from 'react';
import styles from './postuser.module.css';
import Avatar from '@mui/material/Avatar';
import { getUser } from '@/lib/data';

const PostUser = async ({userId, createdAt}) => {
  const user = await getUser(userId);

  const formattedDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', separator: '.' }).format(createdAt);

  const userImage = user.img || '/noavatar.png';

  return (
    <div className={styles.detail}>
      <Avatar src={userImage} alt='avatar'/>
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.username}</span>
    </div>
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Published</span>
      <span className={styles.detailValue}>{formattedDate.replaceAll('/', '.')}</span>
    </div>
  </div>
  )
}

export default PostUser;