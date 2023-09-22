import Wave1 from "../../assets/wave1.svg";
import Wave2 from "../../assets/wave2.svg";

import styles from "./Wave.module.sass";

const Wave = ({ className }: { className?: string }) => {
  return (
    <span className={`${styles.wave} ${className}`}>
      <img src={Wave1} />
      <img src={Wave2} />
    </span>
  );
};

export default Wave;
