import Box from "../Ui/box";
import styles from "./About.module.scss";

const About = ({ about }) => {
  const renderParagraph = about.text.map((item, index) => {
    return <p key={index}>{item.paragraph}</p>;
  });

  return (
    <section className={styles.about} id="about">
      <div className={styles.image}>
        <img src={about.image_url} alt="Evandro" />
        <div className={styles.box}>
          <Box text="Sobre" />
        </div>
      </div>
      <div className={styles.content}>
        <h2>{about.title}</h2>
        {renderParagraph}
        <a href={about.url} target="_blank" rel="noreferrer" className="btn btn-primary">
          {about.button}
        </a>
      </div>
    </section>
  );
};

export default About;
