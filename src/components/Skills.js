import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
      color: "blue",
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Dart", "Java", "Python", "Swift"],
      color: "green",
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "AWS"],
      color: "purple",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Xcode", "Android Studio", "VS Code", "Figma"],
      color: "orange",
    },
  ]

  const expertise = [
    { skill: "React Native", level: 85 },
    { skill: "React.js", level: 80 },
    { skill: "JavaScript/TypeScript", level: 75 },
    { skill: "Firebase", level: 70 },
    { skill: "Node.js", level: 65 },
    { skill: "UI/UX Design", level: 70 },
  ]

  return (
    <section className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-description">
            Skills developed through university coursework, personal projects, and continuous learning as a Software
            Engineering student
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className={`category-title ${category.color}`}>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="expertise-section">
          <h3 className="expertise-title">Expertise Level</h3>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-item">
                <div className="expertise-header">
                  <span className="expertise-name">{item.skill}</span>
                  <span className="expertise-percentage">{item.level}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
