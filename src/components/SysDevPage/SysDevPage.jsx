import styles from './SysDevPage.module.scss';
import InfoCard from './InfoCard/InfoCard.jsx';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar.jsx";
import Image from 'next/image';

const SysDevPage = () => {
  return (
    <div className={styles["Container"]}>
      <Navbar />
      <div className={styles["Title"]}> 
      <h3> SAMAHAN </h3>
      <h1>Systems Development Team</h1>
      </div>
      <div className={`${styles["row-container"]} ${styles["one"]}`}>
        <div className={styles["Row"]}>
        <InfoCard 
        Name = 'Laarni Ives Booc'
        Position = 'UI/UX Designer'
        Course = 'BS-Computer Science'
        Email = 'lbooc04@gmail.com'
        />
        <InfoCard
        Name = 'Jan Patrick Matayabas'
        Position = 'Front-End Developer'
        Course = 'BS-Information Technology'
        Email = 'patmatayabas@gmail.com'
        />
        </div>
      </div>
      <div className={`${styles["row-container"]} ${styles["two"]}`}>
        <div className={styles["Row"]}>
        <InfoCard
        Name = 'Cyril Olanolan'
        Position = 'Front-End Developer'
        Course = 'BS-Computer Science'
        Email = 'olanolancyrilm@gmail.com'      
        />
        <InfoCard
        Name = 'Julienne Andrea Panes'
        Position = 'Front-End Developer'
        Course = 'BS-Computer Science'
        Email = 'juliennepanes@gmail.com'      
        />
        </div>
      </div>
      <div className={`${styles["row-container"]} ${styles["three"]}`}>
        <div className={styles["Row"]}>
        <InfoCard
        Name = 'Louis Miguel Pawaon'
        Position = 'Front-End Developer'
        Course = 'BS-Computer Science'
        Email = 'lpawaon@gmail.com'      
        />
        <InfoCard
        Name = 'Jay Innhahn Tan'
        Position = 'Front-End Developer'
        Course = 'BS-Computer Science'
        Email = 'jaytan3825@gmail.com'      
        />
        </div>
      </div>
      <Footer />

    </div>
    
  )
}


export default SysDevPage