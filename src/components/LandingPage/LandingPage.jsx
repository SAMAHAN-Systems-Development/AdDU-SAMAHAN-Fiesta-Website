import { HeroSection, CalendarSection} from "../ComponentIndex";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";
import SocialsSection from "./SocialsSection/SocialsSection";
// import Script from 'next/script';

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      {/* FACEBOOK EMBED */}
      {/* <div id="fb-root"></div>
      <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0" nonce="uHPeIijp" /> */}
      <HeroSection />
      <CalendarSection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
