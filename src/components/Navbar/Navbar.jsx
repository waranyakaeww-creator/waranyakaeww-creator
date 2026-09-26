import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.logo}>
        MyPortfolio
      </a>

      <div className={styles.menu}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={styles.social}>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;