import styles from "./Header.module.scss";
import { RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram, AiOutlineArrowDown } from "react-icons/ai";
const Header = ({header}) => {
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
          <a href="#">
            <RiLinkedinFill className={styles.icon} />
          </a>
          <a href="#">
            <AiFillInstagram className={styles.icon} />
          </a>
          <a href="#">
            <RiWhatsappFill className={styles.icon} />
          </a>
        </div>
        <a href="#" className={styles.arrow}>
          <AiOutlineArrowDown className={styles.icon} />
        </a>
      </div>
    </header>
  );
};

export default Header;
