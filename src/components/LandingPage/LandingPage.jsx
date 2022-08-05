import { HeroSection, CalendarSection, TribalDivider, CurrentlyHappening, CalendarModal } from "../ComponentIndex";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";
import SocialsSection from "./SocialsSection/SocialsSection";
// import Script from 'next/script';

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <CurrentlyHappening />
      <TribalDivider />
      <CalendarSection />
      {/**<CalendarModal />*/}
      <TribalDivider />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
