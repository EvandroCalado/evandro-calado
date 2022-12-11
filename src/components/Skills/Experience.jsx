import styles from "./Experience.module.scss";

const Experience = ({ experience }) => {
  return (
    <li className={styles.experience}>
      <div className={styles.period}>{experience.period}</div>
      <div className={styles.description}>
        <h4>{experience.experience}</h4>
        <h5>{experience.company}</h5>
      </div>
    </li>
  );
};

export default Experience;
