function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python"],
    },
    {
      title: "Computer Science",
      skills: ["DSA", "DBMS", "Operating Systems"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p>MY SKILLS</p>

          <h2>Technologies I Work With</h2>

          <span>
            Technologies and core concepts I am learning and working with.
          </span>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>

              <h3>{category.title}</h3>

              <div className="skill-list">

                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
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

export default Skills;