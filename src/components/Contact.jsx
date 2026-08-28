function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p>GET IN TOUCH</p>

          <h2>Let's Connect</h2>

          <span>
            Have a project idea, opportunity, or just want to say hello?
            Feel free to reach out.
          </span>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Contact Information</h3>

            <p>
              I'm always open to learning opportunities, collaborations,
              and interesting projects.
            </p>

            <div className="contact-item">
              <strong>📧 Email</strong>
              <span>likithagadade377@gmail.com</span>
            </div>

            <div className="contact-item">
              <strong>💼 LinkedIn</strong>
              <span>linkedin.com/in/likitha-gadade-m-382150393</span>
            </div>

            <div className="contact-item">
              <strong>💻 GitHub</strong>
              <span>github.com/Likithagadade41</span>
            </div>

          </div>

          <form
           className="contact-form"
           onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
           }}
>

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;