import { HeroSection } from "../ComponentIndex";
import { CalendarSection } from "../ComponentIndex";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";
// import SocialsSection from "./SocialsSection/SocialsSection";

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
