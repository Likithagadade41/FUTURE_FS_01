function Projects() {
  const projects = [
    {
      number: "01",
      title: "Adaptive Learning Using Neural Divergence",
      status: "Completed",
      description:
        "An academic project exploring adaptive learning concepts and how learning experiences can be adjusted based on learner differences.",
      technologies: ["Python", "AI", "Machine Learning"],
    },
    {
      number: "02",
      title: "Fake News Detection",
      status: "Completed",
      description:
        "A project focused on identifying potentially misleading or fake news content using machine learning and text-based analysis.",
      technologies: ["Python", "Machine Learning", "NLP"],
    },
    {
      number: "03",
      title: "Student Management System",
      status: "Learning Project",
      description:
        "A basic management application designed to handle student information and demonstrate programming, database, and CRUD concepts.",
      technologies: ["Java", "SQL", "DBMS"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>MY WORK</p>

          <h2>Projects</h2>

          <span>
            A selection of projects and learning work that reflects my
            technical interests and development journey.
          </span>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;