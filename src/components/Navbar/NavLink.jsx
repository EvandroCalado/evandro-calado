import styles from "./NavLink.module.scss";

const NavLink = ({ text, url, toggleMenu = null }) => {
  return (
    <li className={styles.item}>
      <a className="h6" href={url} onClick={toggleMenu}>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
