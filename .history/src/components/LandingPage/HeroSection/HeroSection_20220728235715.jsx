import Image from "next/image";
import YouTube from "react-youtube";
import styles from "./HeroSection.module.scss";
import NowHappening from "./NowHappening/NowHappening";

const HeroSection = () => {

  const options = {
    height: 'auto',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
      enablejsapi: 1,
      modestbranding: 1,
      showinfo: 0
    }
  } as const
  
  
  return (
    <div className={styles["section"]}>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/addu-logo.png"
              alt="AdDU Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className={`${styles["grid-item"]} ${styles["two"]}`}>
          <div className={styles['video-container']}>
            {/* <video 
            src={'https://ak.picdn.net/shutterstock/videos/1046439025/preview/stock-footage-puerto-vallarta-jalisco-mexico-january-traditional-folklore-dance-with-beautiful.webm'}
            autoPlay
            loop
            muted
            /> */}
            <YouTube 
              // https://youtu.be/kkLePusMLak
              // https://www.youtube.com/watch?v=kkLePusMLak
              videoId="kkLePusMLak" opts={opts}>
            />
          </div>
          <h1>SIDLAKAN 22</h1>
          <div className={styles['h1-hover']}>74th AdDU Fiesta</div>
        </div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}>
          <NowHappening />
        </div>
        <div className={`${styles["grid-item"]} ${styles["four"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/cheer.png"
              alt="Cheer don't jeer"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection