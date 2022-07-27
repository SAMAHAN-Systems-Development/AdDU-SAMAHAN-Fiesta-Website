import { HeroSection } from "../ComponentIndex";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
    </div>
  );
};

export default LandingPage;
