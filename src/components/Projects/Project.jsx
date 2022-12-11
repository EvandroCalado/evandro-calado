import styles from "./Project.module.scss";

const Project = ({ image, technologies, title, description }) => {
  const renderTechnologies = technologies.map((item) => {
    return <span key={item._key}>{item.technology}</span>;
  });

  return (
    <li className={styles.project}>
      <a href="#">
        <div className={styles.image}>
          <img src={image} alt="Projeto" />
        </div>
        {renderTechnologies}
        <h3 className="h5">{title}</h3>
        <p>{description}</p>
      </a>
    </li>
  );
};

export default Project;
