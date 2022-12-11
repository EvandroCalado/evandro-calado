import Experience from "./Experience";
import styles from "./Skills.module.scss";

const Skills = ({ skills }) => {
  const renderSkills = skills.skills_list.map((item) => {
    return (
      <li className="h5" key={item._key}>
        {item.skill}
      </li>
    );
  });

  const renderExperience = skills.experience.map((item) => {
    return <Experience key={item._key} experience={item} />;
  });

  return (
    <section className={styles.section}>
      <div className={styles.skills}>
        <div className={styles.heading}>
          <h2>{skills.title}</h2>
          <p>{skills.subtitle}</p>
        </div>
        <div className={styles.content}>
          <h3>{skills.skills_title}</h3>
          <ul>{renderSkills}</ul>
        </div>
      </div>
      <div className={styles.experiences}>
        <h3>{skills.experience_title}</h3>
        <ul>{renderExperience}</ul>
      </div>
    </section>
  );
};

export default Skills;
