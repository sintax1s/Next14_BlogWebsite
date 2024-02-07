import React from 'react'
import NavBar from './navbar/NavBar';
import styles from './header.module.css';
import Link from 'next/link';
import { handleLogOut } from '@/lib/action';
import { auth } from '@/lib/auth';

const Header = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <nav>
        <NavBar handleLogOut={handleLogOut} session={session}/>     
      </nav>
    </div>
  )
}

export default Header;