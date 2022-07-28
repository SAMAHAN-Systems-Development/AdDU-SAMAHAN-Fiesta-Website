import { HeroSection } from "../ComponentIndex";
import { CalendarSection } from "../ComponentIndex";
import Footer from "../Footer/Footer";
import CarouselSection from "./CarouselSection/CarouselSection";
import styles from "./LandingPage.module.scss";
import SocialsSection from "./SocialsSection/SocialsSection";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CarouselSection />
      <CalendarSection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
