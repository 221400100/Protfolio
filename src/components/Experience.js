import { Building, Calendar, MapPin } from "lucide-react"
import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Student",
      company: "GIFT University",
      location: "Gujranwala, Pakistan",
      period: "2021 - Present",
      type: "Full-time Student",
      description:
        "Pursuing Bachelor of Science in Software Engineering with focus on mobile app development and modern web technologies. Actively working on university projects and building practical applications.",
      achievements: [
        "Developed ChatSphere - WhatsApp clone with real-time messaging",
        "Built Mini YouTube Clone with video streaming capabilities",
        "Maintained consistent academic performance with focus on practical projects",
        "Participated in university coding competitions and tech events",
      ],
      technologies: ["React Native", "React", "Node.js", "Firebase", "MongoDB"],
    },
    {
      title: "Mobile App Development Projects",
      company: "University Projects",
      location: "GIFT University",
      period: "2022 - Present",
      type: "Academic Projects",
      description:
        "Focused on creating real-world applications as part of academic curriculum. Emphasis on mobile-first development and user experience design.",
      achievements: [
        "Successfully deployed ChatSphere with 50+ active test users",
        "Implemented real-time features using Firebase and WebRTC",
        "Created responsive UI/UX designs following modern design principles",
        "Collaborated with classmates on group projects and code reviews",
      ],
      technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
    },
    {
      title: "Web Development Learning",
      company: "Self-Directed Learning",
      location: "Gujranwala, Pakistan",
      period: "2021 - Present",
      type: "Continuous Learning",
      description:
        "Continuously expanding knowledge in web and mobile development through online courses, tutorials, and hands-on projects.",
      achievements: [
        "Completed multiple React and React Native courses",
        "Built various small projects to practice new technologies",
        "Active contributor to open-source projects on GitHub",
        "Staying updated with latest trends in mobile development",
      ],
      technologies: ["JavaScript", "React", "Node.js", "Git", "VS Code"],
    },
  ]

  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            A journey of continuous growth and impactful contributions in mobile development
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="company-info">
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="achievements-section">
                <h4 className="achievements-title">Key Achievements:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="technologies-section">
                <h4 className="technologies-title">Technologies Used:</h4>
                <div className="technologies-list">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
