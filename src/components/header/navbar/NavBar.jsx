"use client";

import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import cn from 'classnames';
import Links from '../links/links';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = ({handleLogOut, session}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsClicked(prev => !prev);
      setIsOpen(prev => !prev);
    } else {
      setIsClicked(prev => !prev);

      setTimeout(() => {
        setIsOpen(prev => !prev);
      }, 300);
    }
  };

  const onLinkClick = () => {
    if (isOpen) {
      setIsClicked(prev => !prev);

      setTimeout(() => {
        setIsOpen(prev => !prev);
      }, 300);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Links handleLogOut={handleLogOut} session={session}/>
      </div>
      <button 
        onClick={toggleMenu}
        className={styles.burgerButton}
      >
        {!isOpen
        ? (
            <MenuIcon fontSize='large'/>
          ) 
        : (
            <CloseIcon fontSize='large'/>
          )
        }
      </button>

      {isOpen && (
        <aside className={cn(styles.menu, {[styles.menuOpen]: isClicked, [styles.menuClose]:!isClicked})}>
          <Links clickHandler={onLinkClick} handleLogOut={handleLogOut} session={session}/>
        </aside>
      )}
    </div>
  )
}

export default NavBar;