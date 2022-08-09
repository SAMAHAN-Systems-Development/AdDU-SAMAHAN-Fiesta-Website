import styles from './SysDevPage.module.scss';
import InfoCard from './InfoCard/InfoCard.jsx';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar.jsx";
import Image from 'next/image';
import { Divider } from '@mui/material';
import { TribalDivider } from "../ComponentIndex";

const SysDevPage = () => {
  return (
    <div className={styles["Container"]}>
      <Navbar />
      <TribalDivider />

      <div className={styles["Title"]}> 
          <h3> SAMAHAN </h3>
          <h1>Systems Development Team</h1>
      </div>
      <TribalDivider />

      <div className={`${styles["row-container"]} ${styles["one"]}`}>
        <div className={styles["Row"]}>
        <InfoCard 
        Name = 'Laarni Ives Booc'
        Position = 'UI/UX Designer'
        Course = 'BS-Computer Science'
        Email = 'lbooc04@gmail.com'
        Picture= "/assets/LaarniBooc.png"
        fbLink= "https://www.facebook.com/laarnives"
        twitterLink= "https://twitter.com/arlbbooc" 
        instaLink= "https://www.instagram.com/lbbooc/"
        gitLink= "https://github.com/libbooc"
        />
        <InfoCard
        Name = 'Jan Patrick Matayabas'
        Position = 'Front-End Developer'
        Course = 'BS-Information Technology'
        Email = 'patmatayabas@gmail.com'
        Picture= "/assets/PatrickMatayabas.png"
        fbLink= "https://www.facebook.com/janpatrick.matayabas"
        twitterLink= "https://twitter.com/Jpmatayabas" 
        instaLink= "https://www.instagram.com/patmatss/"
        gitLink= "https://github.com/janpatmat"    
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
        Picture= "/assets/CyrilOlanolan.png"  
        fbLink= "https://www.facebook.com/CyrilOlanolan"
        twitterLink= "https://twitter.com/CyrilOlanolan" 
        instaLink= "https://www.instagram.com/cyrilolanolan/"
        gitLink= "https://github.com/CyrilOlanolan"
        />
        <InfoCard
        Name = 'Julienne Andrea Panes'
        Position = 'Front-End Developer'
        Course = 'BS-Computer Science'
        Email = 'juliennepanes@gmail.com' 
        Picture= "/assets/JuliennePanes.png" 
        fbLink= "https://www.facebook.com/iyaapanes/"
        twitterLink= "https://www.twitter.com/eyayayah" 
        instaLink = "https://www.instagram.com/SAMAHANSysDev/"
        gitLink= "https://github.com/iyabc"    
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
        Picture= "/assets/LouisPawaon.png"  
        fbLink= "https://www.facebook.com/miggypawaon"
        twitterLink= "https://www.twitter.com/miggy_pawaon" 
        instaLink= "https://www.instagram.com/miggy_pawaon/"
        gitLink= "https://github.com/louispawaon"    
        />
        <InfoCard
        Name = 'Jay Innhahn Tan'
        Position = 'Front-End Developer'
        Course = 'BS-Computer Science'
        Email = 'jaytan3825@gmail.com' 
        Picture= "/assets/JayTan.png"  
        fbLink= "https://www.facebook.com/jayinnhahn"
        twitterLink= "https://www.twitter.com/Jayinnhahn" 
        instaLink= "https://www.instagram.com/innhahn/"
        gitLink= "https://github.com/Jayinnhahn"     
        />
        </div>
      </div>
      <Footer />

    </div>
    
  )
}


export default SysDevPage