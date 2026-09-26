import styles from "./Hero.module.css";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>

        <h1>Waranya Kaewwichai</h1>

        <h2>
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Computer Engineering Student",
              2000,
              "Web Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className={styles.description}>
          Welcome to my portfolio. I am passionate about programming,
          technology, and web development.
        </p>

        <a href="#portfolio" className={styles.button}>
          View My Work
        </a>
      </div>

      <Tilt className={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700"
          alt="Workspace"
          className={styles.image}
        />
      </Tilt>
    </section>
  );
}

export default Hero;