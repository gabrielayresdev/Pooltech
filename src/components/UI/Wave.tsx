import Wave1 from "../../assets/wave1.svg";
import Wave2 from "../../assets/wave2.svg";

import styles from "./Wave.module.sass";

const Wave = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <span className={`${styles.wave} ${className}`}>
      <svg
        width="1208"
        viewBox="0 0 1208 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 29.6769L40.2667 20.1366C80.5333 10.5962 161.067 -8.48459 241.6 4.23592C322.133 16.9564 402.667 61.4782 483.2 67.8385C563.733 74.1987 644.267 42.3975 724.8 23.3167C805.333 4.23592 885.867 -2.12433 966.4 7.41605C1046.93 16.9564 1127.47 42.3975 1167.73 55.118L1208 67.8385V106H1167.73C1127.47 106 1046.93 106 966.4 106C885.867 106 805.333 106 724.8 106C644.267 106 563.733 106 483.2 106C402.667 106 322.133 106 241.6 106C161.067 106 80.5333 106 40.2667 106H0V29.6769Z"
          fill={`${color ? color : "#2991D6"}`}
        />
      </svg>

      <svg
        width="855"
        viewBox="0 0 855 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 50.0773L35.6663 56.3978C71.3326 62.7182 142.665 75.3591 213.998 75.3591C285.33 75.3591 356.663 62.7182 427.995 48.1326C498.337 33.547 569.67 16.5304 641.002 8.26519C712.335 0 783.667 0 819.334 0H855V88H819.334C783.667 88 712.335 88 641.002 88C569.67 88 498.337 88 427.995 88C356.663 88 285.33 88 213.998 88C142.665 88 71.3326 88 35.6663 88H0V50.0773Z"
          fill={`${color ? color : "#2991D6"}`}
        />
      </svg>
    </span>
  );
};

export default Wave;
