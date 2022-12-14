import styles from "./Header.module.scss";
import { RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram, AiOutlineArrowDown } from "react-icons/ai";

const Header = ({ header, social }) => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={header.image_url} alt="Evandro" />
        </div>
        <div className={styles.content}>
          <span>Olá 👋 meu nome é Evandro. Sou um...</span>
          <h1>{header.ocupation}</h1>
          <p>{header.sumary}</p>
        </div>
        <div className={styles.social}>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <RiLinkedinFill className={styles.icon} />
          </a>
          <a href={social.instagram} target="_blank" rel="noreferrer">
            <AiFillInstagram className={styles.icon} />
          </a>
          <a href={social.whatsapp} target="_blank" rel="noreferrer">
            <RiWhatsappFill className={styles.icon} />
          </a>
        </div>
        <a href="#about" className={styles.arrow}>
          <AiOutlineArrowDown className={styles.icon} />
        </a>
      </div>
    </header>
  );
};

export default Header;
