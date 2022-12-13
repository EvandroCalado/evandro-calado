import styles from "./Navbar.module.scss";
import NavLink from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <section className={styles["navbar_wrapper"]}>
      <div className={styles.navbar}>
        <a href="#" className={styles.logo}>
          <h1>Evandro Calado</h1>
        </a>
        <nav>
          <ul className={styles.list}>
            <NavLink text="Sobre Mim" url="#about" />
            <NavLink text="Experiências" url="#skills" />
            <NavLink text="Projetos" url="#projects" />
            <NavLink text="Contato" url="#footer" />
          </ul>
        </nav>
        <div className={`${styles.mobile} ${isMenu ? styles.active : ""}`}>
          <GiHamburgerMenu
            className={styles.icon}
            onClick={() => setIsMenu(!isMenu)}
          />
          <div className={styles.background}>
            <AiOutlineClose
              className={styles.icon}
              onClick={() => setIsMenu(!isMenu)}
            />
            <nav>
              <ul className={styles["mobile_list"]}>
                <NavLink
                  text="Sobre Mim"
                  url="#about"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <NavLink
                  text="Experiências"
                  url="#skills"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <NavLink
                  text="Projetos"
                  url="#projects"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <NavLink
                  text="Contato"
                  url="#footer"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
