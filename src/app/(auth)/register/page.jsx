import React from 'react';
import styles from './registerpage.module.css';
import RegisterForm from '@/components/registerForm/RegisterForm';


const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage;