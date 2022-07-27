import styles from "./LandingPage.module.scss";
import HeroSection from "./HeroSection/HeroSection";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
    </div>
  );
};

export default LandingPage;
