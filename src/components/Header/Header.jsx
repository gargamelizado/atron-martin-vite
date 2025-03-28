import styles from "./Header.module.css";
import Button from "../Button/button"
import LogoHeader from "../../assets/logo.svg";
import { useState } from "react";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${styles.header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div>
          <button>
            <img src={LogoHeader} alt="" />
          </button>
        </div>
        <button onClick={toggleMenu} id={styles.menuIcon}>
          <img src={menuActive ? iconCloser : iconBars} alt="" />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="">inicio</a>
            </li>
            <li className={styles.navLi}>
              <a href="">carros</a>
            </li>
            <li className={styles.navLi}>
              <a href="">manuteção</a>
            </li>
            <li className={styles.navLi}>
              <a href="">novos</a>
            </li>
            <li className={styles.navLiButton}> <Button>Comprar</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
