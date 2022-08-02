import styles from './Navbar.module.scss';
import { TicketsButton } from '../ComponentIndex';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.fiesta-logo}>
              <Image 
                src="/assets/sadya2022.png"
                layout="fill"
                objectFit="contain"
                draggable="false"
                priority
                />
            </div>
            <div>
              <TicketsButton />
            </div>
        </nav>
    </header>
  )
}

export default Navbar