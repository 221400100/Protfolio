"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src="/placeholder-user.png"
            alt="Muhammad Anees Butt - Software Engineering Student & Mobile App Developer"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Muhammad Anees Butt
          </span>
        </h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
          <span className="border-r-2 border-purple-400 pr-1">{text}</span>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Software Engineering student at GIFT University, passionate about creating innovative mobile applications with
          React Native. Building the future one app at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent"
          >
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/221400100" className="text-white/60 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-anees-butt-925707348/" className="text-white/60 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/muhammadanees" className="text-white/60 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  )
}
