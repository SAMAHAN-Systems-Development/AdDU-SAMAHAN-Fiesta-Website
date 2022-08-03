import styles from './Navbar.module.scss';
import { TicketsButton } from '../ComponentIndex';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <Link href="/">
              <div className={styles.fiesta_logo}>
                <Image 
                  src="/assets/sadya.png"
                  layout="fill"
                  objectFit="contain"
                  draggable="false"
                  alt='Sadya 2022 Logo'
                  priority
                />
              </div>
            </Link>
            <div className={styles.tickets_btn}>
              <TicketsButton />
            </div>
        </nav>
    </header>
  )
}

export default Navbar