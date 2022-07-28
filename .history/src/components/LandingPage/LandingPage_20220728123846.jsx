import { HeroSection } from "../ComponentIndex";
import { CalendarSection } from "../ComponentIndex";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";
import SocialsSection from "./SocialsSection/SocialsSection";
import { Socfeeds } from '../ComponentIndex'

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CalendarSection />
      <Socfeeds
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
