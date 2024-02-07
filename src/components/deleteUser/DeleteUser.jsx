import { deleteUser } from '@/lib/action';
import React from 'react';
import styles from './deleteuser.module.css';

const DeleteUser = ({id}) => {

  const deleteUserWithId = async () => {
    "use server"

    await deleteUser(id);
  }

  return (
    <form action={deleteUserWithId}>        
      <button className={styles.button}>Delete</button>
    </form>
  )
}

export default DeleteUser;