"use client"

import React from 'react';
import styles from './adminuserform.module.css';
import { useFormState } from 'react-dom';
import { addUser } from '@/lib/action';


const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h2>Add New User</h2>
      <input type="text" name='username' placeholder='Username'/>
      <input type="text" name='img' placeholder='Avatar Image Link'/>
      <input type="text" name='email' placeholder='Email'/>
      <input type="password" name='password' placeholder='Password'/>
      <select name="isAdmin" >
        <option value="false">Is Admin?</option>
        <option value="false">
          User
        </option>
        <option value="true">
          Admin
        </option>
      </select>
      <button>Add</button>
      {state?.error}
    </form>
  )
}

export default AdminUserForm;