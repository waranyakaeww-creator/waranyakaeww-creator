import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <p>
        © {new Date().getFullYear()} Waranya Kaewwichai
      </p>

      <p>Computer Engineering Student</p>

      <a href="#home" className="back-to-top">
        Back to Top ↑
      </a>
    </footer>
  );
}

export default Footer;