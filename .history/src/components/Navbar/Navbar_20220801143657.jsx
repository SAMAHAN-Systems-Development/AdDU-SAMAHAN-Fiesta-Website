import styles from './Navbar.module.scss';
import { TicketsButton } from '../ComponentIndex';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.fiesta_logo}>
              <Image 
                src="/assets/sadya2022.png"
                height="100%"
                width={minWidth1200px || maxWidth992px ? "220px" : "42px"}
                objectFit="contain"
                draggable="false"
                priority
                />
            </div>
            <div className={styles.tickets_btn}>
              <TicketsButton />
            </div>
        </nav>
    </header>
  )
}

export default Navbar