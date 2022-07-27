import styles from "./LandingPage.module.scss";
import HeroSection from "./HeroSection/HeroSection";
import { CalendarSection } from "../ComponentIndex";


const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CalendarSection
    </div>
  );
};

export default LandingPage;
