import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import styles from './links.module.css';
import { usePathname } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const links = [
  { title: 'Home Page', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
];

const Links = ({clickHandler, handleLogOut, session}) => {
  const pathName = usePathname();

  return (
    <>
      {links.map(link => (
        <Link
          key={link.title} 
          href={link.path}
          onClick={clickHandler}
          className={cn(styles.link, {[styles.active]: pathName === link.path})}
        >
          {link.title}
        </Link>
      ))}
      {session?.user
        ? (
          <>  
            {session?.user.isAdmin && (
              <Link 
                href="/admin"  
                onClick={clickHandler}
                className={cn(styles.link, {[styles.active]: pathName === '/admin'})}
              >
                Admin
              </Link>
            )}
            <form action={handleLogOut}>
              <button onClick={clickHandler} className={styles.loginOut}>LogOut <LogoutIcon className={styles.logOutIcon}/></button>
            </form>
          </>
        ) 
        : (
          <Link
            onClick={clickHandler} 
            href="/login" 
            className={styles.loginIn}
          >
            Login 
            <LoginIcon />
          </Link>
        )}
    </>
  )
}

export default Links;