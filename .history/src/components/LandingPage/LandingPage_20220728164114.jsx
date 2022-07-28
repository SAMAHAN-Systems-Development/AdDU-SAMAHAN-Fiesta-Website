import { HeroSection, CarouselSection, CalendarSection, SocialsSection, Footer} from "../ComponentIndex";
import  from "../Footer/Footer";
import styles from "./LandingPage.module.scss";

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
