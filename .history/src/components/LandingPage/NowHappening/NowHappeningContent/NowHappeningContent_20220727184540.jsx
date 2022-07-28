import styles from "./NowHappeningContent.module.scss";
import CHData from "../../../../sampleData/currentlyHappening.json";

const NowHappeningContent=({dateTime,event,platform})=>{
const NowHappeningContent=()=>{
    return(
        <div>
            {CHData.content.contents.map((item)=>{
                return(
                    <React.Fragment key={item.ItemNum}>
                        dateTime={item.DateTime}
                        {item.DateTime}
                        <br></br>
                        event={item.event}
                        {item.event}
                        <br></br>
                        platform={item.platform}
                        {item.platform}
                        <br></br>
                    </React.Fragment>
                );