import React from 'react';
import styles from './login.module.css';
import LoginForm from '@/components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}

export default LoginPage;