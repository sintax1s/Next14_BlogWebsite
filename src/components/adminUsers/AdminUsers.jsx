import { getUsers } from '@/lib/data';
import React from 'react';
import styles from './adminusers.module.css';
import Image from 'next/image';
import DeleteUser from '../deleteUser/DeleteUser';

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Users</h2>
    {users.map(user => (
      <div key={user.id} className={styles.user}>
        <div className={styles.details}>
          <Image src={user.img || '/noavatar.png'} alt='user' width={50} height={50} style={{ objectFit: 'cover'}}/>
          <span className={styles.userTitle}>{user.username}</span> 
        </div>
        <DeleteUser id={user.id} />
      </div>
    ))}
  </div>
  )
}

export default AdminUsers;