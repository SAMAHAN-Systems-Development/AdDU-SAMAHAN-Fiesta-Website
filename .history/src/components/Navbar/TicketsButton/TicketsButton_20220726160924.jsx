import Link from 'next/link';
import styles from './TicketsButton.module.scss';

const TicketsButton = () => {
  return (
    <button type='button' className={styles.TicketsButton} href='jotforms.com'><a>GET TICKETS</a></button>
  )
}

export default TicketsButton