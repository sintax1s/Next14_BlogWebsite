import React from 'react';
import styles from './loading.module.css';
import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div className={styles.container}><CircularProgress /></div>
  )
}

export default Loading;