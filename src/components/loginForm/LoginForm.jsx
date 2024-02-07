"use client";

import { login } from '@/lib/action'
import React, { useEffect } from 'react';
import styles from './loginform.module.css';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom'; 
import Link from 'next/link';
import ContinueWithGoogle from '../continueWithGoogle/ContinueWithGoogle';
import ContinueWithGitHub from '../continueWithGitHub/ContinueWithGitHub';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/');
  }, [state?.success, router]);

  return (
    <div className={styles.wrapper}>
      <ContinueWithGoogle />
      <ContinueWithGitHub /> 
      <form action={formAction} className={styles.form}>
        <h2>Login</h2>
        <input className={styles.input} type="email" placeholder='Email' name='email'/>
        <input className={styles.input} type="password" name="password" placeholder="Password" min="6" required/>
      <button className={styles.button}>Login</button>
      {state?.error}
      <Link href="/register">Dont have an Account? <b>Register</b></Link>
      </form>
    </div>
  )
}

export default LoginForm;