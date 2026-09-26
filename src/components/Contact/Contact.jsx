import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p className="contact-text">
        I am looking for an opportunity
        to learn and develop my skills.
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          your-email@example.com
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit my GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;