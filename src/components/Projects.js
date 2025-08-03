import { ExternalLink, Github, Play, Star, Download, Users } from "lucide-react"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "ChatSphere",
      subtitle: "WhatsApp Clone - University Project",
      description:
        "A comprehensive real-time messaging application built as a university project. Features include instant messaging, group chats, media sharing, and user authentication. Built with React Native and Firebase.",
      image: "https://via.placeholder.com/500x300",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
      stats: {
        downloads: "University Project",
        rating: "A+ Grade",
        users: "50+ Testers",
      },
      links: {
        demo: "https://youtube.com/watch?v=your-chatsphere-demo",
        github: "https://github.com/221400100/chatsphere",
        live: "#",
      },
      featured: true,
    },
    {
      title: "Mini YouTube Clone",
      subtitle: "Video Streaming Platform",
      description:
        "A React-based video streaming platform that replicates core YouTube functionality. Features video upload, streaming, search, and user interactions. University project showcasing full-stack development skills.",
      image: "https://via.placeholder.com/500x300",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      stats: {
        downloads: "University Project",
        rating: "A Grade",
        users: "30+ Testers",
      },
      links: {
        demo: "https://youtube.com/watch?v=your-youtube-clone-demo",
        github: "https://github.com/221400100/mini-youtube",
        live: "#",
      },
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Branding Project",
      description:
        "A modern, responsive portfolio website built with React and Next.js. Showcases my projects, skills, and journey as a software engineering student.",
      image: "https://via.placeholder.com/500x300",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      stats: {
        downloads: "Live Website",
        rating: "Responsive",
        users: "Visitors",
      },
      links: {
        demo: "#",
        github: "https://github.com/221400100/portfolio",
        live: "#",
      },
    },
  ]

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Showcasing innovative mobile applications that solve real-world problems
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? "featured" : ""}`}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={16} />
                    Featured
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-stats">
                  <div className="stat">
                    <Download size={16} />
                    <span>{project.stats.downloads}</span>
                  </div>
                  <div className="stat">
                    <Star size={16} />
                    <span>{project.stats.rating}</span>
                  </div>
                  <div className="stat">
                    <Users size={16} />
                    <span>{project.stats.users}</span>
                  </div>
                </div>

                <div className="project-actions">
                  <button className="btn btn-primary">
                    <Play size={16} />
                    Watch Demo
                  </button>
                  <button className="btn btn-secondary">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="btn btn-secondary">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
