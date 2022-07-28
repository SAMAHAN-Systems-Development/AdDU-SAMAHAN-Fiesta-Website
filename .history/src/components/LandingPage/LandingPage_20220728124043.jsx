import { HeroSection } from "../ComponentIndex";
import { CalendarSection } from "../ComponentIndex";
import { SocialsSection } from "../ComponentIndex";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CalendarSection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
