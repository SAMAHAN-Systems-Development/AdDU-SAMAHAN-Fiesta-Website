import React from 'react'
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <h1>SIDLAKAN</h1>
        </nav>
    </header>
  )
}

export default Navbar