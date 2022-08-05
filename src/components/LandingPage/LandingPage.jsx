import { HeroSection, CalendarSection} from "../ComponentIndex";
import CurrentlyHappening from "../CurrentlyHappening/CurrentlyHappening";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";
import SocialsSection from "./SocialsSection/SocialsSection";
// import Script from 'next/script';

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CurrentlyHappening />
      <CalendarSection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
