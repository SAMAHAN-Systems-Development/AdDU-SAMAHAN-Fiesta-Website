import styles from './SysDevPage.module.scss';
import InfoCard from './InfoCard/InfoCard.jsx';

const SysDevPage = () => {
  return (
    <div className={styles["Container"]}>
      <InfoCard/>
      <InfoCard/>

      <InfoCard/>
      <InfoCard/>

      <InfoCard/>
      <InfoCard/>
    </div>
  )
}

export default SysDevPage