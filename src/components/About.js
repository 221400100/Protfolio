import { Code, Smartphone, Users, Zap } from "lucide-react"
import "./About.css"

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Cross-Platform",
      description: "Expert in React Native, Flutter, and native development",
    },
    {
      icon: <Users size={32} />,
      title: "User-Centric",
      description: "Focusing on exceptional user experience and interface design",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      description: "Optimizing apps for speed, efficiency, and smooth operation",
    },
  ]

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-description">
            I'm Muhammad Anees Butt, a dedicated Software Engineering student at GIFT University with a passion for
            mobile app development. Currently pursuing my BS in Software Engineering, I've been creating innovative
            mobile solutions using React Native and modern web technologies.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">My Journey</h3>
            <div className="about-paragraphs">
              <p>
                As a Software Engineering student at GIFT University, I've been passionate about mobile development from
                day one. My academic journey has been complemented by hands-on project development, where I've created
                applications that solve real-world problems.
              </p>
              <p>
                My university projects include ChatSphere (a WhatsApp-like communication platform) and Mini YouTube
                Clone, both built with React Native. These projects have not only enhanced my technical skills but also
                taught me the importance of user experience and scalable architecture.
              </p>
            </div>
          </div>

          <div className="about-image">
            <img src="https://via.placeholder.com/400x400" alt="Developer at work" className="developer-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
