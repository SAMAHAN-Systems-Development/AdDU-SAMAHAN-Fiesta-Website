import { HeroSection, CalendarSection, TicketsButton } from "../ComponentIndex";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";
import SocialsSection from "./SocialsSection/SocialsSection";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CalendarSection />
      <SocialsSection />
      <div className={styles.float}>
        <TicketsButton />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
