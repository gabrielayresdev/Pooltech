import styles from "./Wave.module.sass";
import WaveIcon from "../../assets/Wave.svg?react";

const Wave = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <div className={`${styles.wave} ${className}`}>
      <WaveIcon fill={`${color ? color : "#2991D6"}`} />
    </div>
  );
};

export default Wave;
