"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import "./Hero.css"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Software Engineering student at GIFT University"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-section">
      {/* Animated background */}
      <div className="hero-background">
        <div className="background-overlay">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-avatar">
          <img
            src="https://via.placeholder.com/150x150"
            alt="Muhammad Anees Butt - Software Engineering Student & Mobile App Developer"
            className="avatar-image"
          />
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Muhammad Anees Butt</span>
        </h1>

        <div className="hero-subtitle">
          <span className="typing-text">{text}</span>
        </div>

        <p className="hero-description">
          Software Engineering student at GIFT University, passionate about creating innovative mobile applications with
          React Native. Building the future one app at a time.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">View My Work</button>
          <button className="btn btn-secondary">Download CV</button>
        </div>

        <div className="social-links">
          <a href="https://github.com/221400100" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-anees-butt-925707348/" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:ab8432202@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}

export default Hero
