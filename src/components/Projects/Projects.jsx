import Project from "./Project";
import styles from "./Projects.module.scss";

const Projects = ({ projects }) => {
  const renderPorject = projects.projects.map((item) => {
    return (
      <Project
        key={item._key}
        image={item.image_url}
        technologies={item.technologies}
        title={item.title}
        description={item.description}
        url={item.url}
      />
    );
  });

  return (
    <section className={styles.projects} id="projects">
      <h2>{projects.title}</h2>
      <ul className={styles.list}>{renderPorject}</ul>
      <a
        href={projects.url}
        target="_blank"
        className="btn btn-primary"
        rel="noreferrer"
      >
        {projects.button}
      </a>
    </section>
  );
};

export default Projects;
