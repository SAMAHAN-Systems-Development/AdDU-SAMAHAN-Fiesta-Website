import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "./TwitterFeed.module.scss";
import { useMediaQuery } from "@mui/material";

export default function TwitterFeed() {
  const matches = useMediaQuery("(min-width:1057px)");
  const height = matches ? 700 : 500;
  const width = matches ? 500 : 300;
  return (
    <div className={styles["container"]}>
      <div className={styles["container-1"]}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="addusamahan"
          options={{ height: height, width: width }}
        />
      </div>
    </div>
  );
}
