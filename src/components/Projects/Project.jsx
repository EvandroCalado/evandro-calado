import styles from "./Project.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const Project = ({ image, technologies, title, description, url }) => {
  const renderTechnologies = technologies.map((item) => {
    return <span key={item._key}>{item.technology}</span>;
  });

  const renderIcon = renderTechnologies.map((icon, index) => {
    return (
      (icon.props.children == "github" && (
        <AiFillGithub key={index} className={styles.icon} />
      )) ||
      (icon.props.children == "netlify" && (
        <SiNetlify key={index} className={styles.icon} />
      ))
    );
  });

  return (
    <li className={styles.project}>
      <a href={url} target="_blank">
        <div className={styles.image}>
          {renderIcon}
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
