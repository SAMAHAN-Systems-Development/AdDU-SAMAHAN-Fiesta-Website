import Link from 'next/link';
import styles from './TicketsButton.module.scss';

const TicketsButton = () => {
  return (
    <Link href="https://jotform.com/" passHref={true}>
      <button type='button' className={styles.TicketsButton} href='jotforms.com'>
        <a>GET TICKETS</a>
      </button>
    </Link>
  )
}

export default TicketsButton