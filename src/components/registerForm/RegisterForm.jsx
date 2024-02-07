"use client"

import { register } from '@/lib/action';
import React, { useEffect } from 'react';
import styles from './registerform.module.css';
import { useFormState } from 'react-dom'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
        <h2>Create Account</h2>
        <input 
          className={styles.input} 
          type="text"
          placeholder='Username'
          name='username' 
          />
        <input className={styles.input} type="email" placeholder='Email' name='email'/>
        <input className={styles.input} type="text" placeholder='Paste the link for your image(optional)' name='image'/>
        <input className={styles.input} type="password" name="password" placeholder="Password" min="6" required/>
        <input className={styles.input} type="password" name="passwordRepeat" placeholder="Repeat your password" min="6" required/>
      <button className={styles.button}>Register</button>
      {state?.error}
      <Link href="/login">Have an Account? <b>Login</b></Link>
      </form>
  )
}

export default RegisterForm;