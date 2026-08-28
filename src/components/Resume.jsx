function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">

        <div className="resume-heading">
          <p>MY JOURNEY</p>

          <h2>Education & Experience</h2>

          <span>
            My academic journey, learning experience, and professional growth.
          </span>
        </div>

        <div className="resume-content">

          <div className="resume-column">
            <h3>Education</h3>

            <div className="resume-card">
              <span className="resume-date">Current</span>

              <h4>Bachelor of Engineering</h4>

              <p>Computer Science / Engineering</p>

              <p className="resume-description">
                Currently pursuing my engineering degree while
                developing my skills in programming, data structures,
                databases, operating systems, and web development.
              </p>
            </div>
          </div>

          <div className="resume-column">
            <h3>Experience</h3>

            <div className="resume-card">
              <span className="resume-date">2026</span>

              <h4>Full Stack Web Development Intern</h4>

              <p>Future Interns</p>

              <p className="resume-description">
                Working on practical web development tasks and
                building a professional portfolio while improving
                frontend and development skills.
              </p>
            </div>
          </div>

        </div>

        <div className="resume-button-container">
          <a
            href="/Likitha_Gadade_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download-button"
          >
            ↓ &nbsp; Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;