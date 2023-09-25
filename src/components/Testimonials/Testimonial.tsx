import styles from "./Testimonial.module.sass";
import Pic from "../../assets/image 5.png";

interface ITestimonial {
  name: string;
  text: string;
}

const Testimonial = ({ name, text }: ITestimonial) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.profile_picture}>
        <img src={Pic} alt="" />
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
};

export default Testimonial;
