function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>

          <span>
            I'm open to learning opportunities, collaborations,
            internships and interesting projects.
          </span>
        </div>

        <div className="contact-content">
          <div className="contact-links">

           <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=likithagadade377@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
             className="contact-card"
>
              <h3>Email</h3>
              <p>Send Me an Email</p>
            </a>

            <a
              href="https://github.com/Likithagadade41"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <h3>GitHub</h3>
              <p>View My GitHub</p>
            </a>

            <a
              href="https://www.linkedin.com/in/likitha-gadade-m-382150393"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <h3>LinkedIn</h3>
              <p>View My LinkedIn</p>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;