import { HeroSection } from "../ComponentIndex";
import { HeroSection } from "../ComponentIndex";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CalendarSection />
    </div>
  );
};

export default LandingPage;
