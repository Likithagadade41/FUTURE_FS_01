function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <p className="hero-small">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Likitha Gadade</span>
        </h1>

        <h2>
          Full Stack Developer & AI Enthusiast
        </h2>

        <p className="hero-description">
          I am passionate about building modern web applications
          and exploring innovative AI-powered solutions.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <a
            href="#contact"
            className="hero-primary-button"
          >
            Contact Me →
          </a>

          <a
            href="/Likitha_Gadade_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-outline-button"
          >
            View Resume
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="hero-socials">

          <span>Find me on</span>

          <a
            href="https://github.com/Likithagadade41"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/likitha-gadade-m-382150393"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="mailto:likithagadade377@gmail.com"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

        </div>

      </div>

      {/* RIGHT SIDE — LAPTOP */}
      <div className="hero-visual">

        <div className="laptop-wrapper">

          {/* CODE / LEARN / EVOLVE */}
          <div className="code-tags">
            <span>CODE</span>
            <span>LEARN</span>
            <span>EVOLVE</span>
          </div>

          {/* LAPTOP IMAGE */}
          <img
            src="/laptop.png"
            alt="Laptop"
            className="hero-laptop"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;