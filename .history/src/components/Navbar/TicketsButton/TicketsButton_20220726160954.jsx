import Link from 'next/link';
import styles from './TicketsButton.module.scss';

const TicketsButton = () => {
  return (
    <Link>
      <button type='button' className={styles.TicketsButton} href='jotforms.com'>
        <a>GET TICKETS</a>
      </button>
    </Link>
  )
}

export default TicketsButton