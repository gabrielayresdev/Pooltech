import styles from "./Testimonial.module.sass";

interface ITestimonial {
  image: string;
  name: string;
  text: string;
}

const Testimonial = ({ image, name, text }: ITestimonial) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.profile_picture}>
        <img src={image} alt="" />
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
};

export default Testimonial;
