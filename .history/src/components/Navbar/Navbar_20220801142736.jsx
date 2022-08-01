import styles from './Navbar.module.scss';
import { TicketsButton } from '../ComponentIndex';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <div>
              <Image 
              src="/assets/sadya2022.png"
              />
            </div>
            <TicketsButton />
        </nav>
    </header>
  )
}

export default Navbar