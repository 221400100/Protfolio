import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import "./Contact.css"

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "ab8432202@gmail.com",
      link: "mailto:ab8432202@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+92 339 0022356",
      link: "tel:+923390022356",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Gujranwala, Pakistan",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/221400100",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-anees-butt-925707348/",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      link: "https://twitter.com/muhammadanees",
    },
  ]

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-description">
            Ready to bring your mobile app ideas to life? Let's discuss your next project!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3 className="contact-subtitle">Get In Touch</h3>
              <p className="contact-text">
                I'm always interested in new opportunities and exciting projects. Whether you're a startup looking to
                build your first app or an established company wanting to enhance your mobile presence, I'd love to hear
                from you.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <p className="contact-label">{info.label}</p>
                    <p className="contact-value">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.link} className="social-link" aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">Send Message</h3>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" placeholder="John" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="Project Discussion" />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea rows={5} className="form-textarea" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
