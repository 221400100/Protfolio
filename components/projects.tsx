import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Star, Download, Users } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "ChatSphere",
      subtitle: "WhatsApp Clone - University Project",
      description:
        "A comprehensive real-time messaging application built as a university project. Features include instant messaging, group chats, media sharing, and user authentication. Built with React Native and Firebase.",
      image: "icon.png",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
      stats: {
        downloads: "University Project",
        rating: "A+ Grade",
        users: "50+ Testers",
      },
      links: {
        demo: "https://github.com/221400100/Whatsapp_Clone_Chatsphere",
        github: "https://github.com/221400100/Whatsapp_Clone_Chatsphere",
        live: "https://github.com/221400100/Whatsapp_Clone_Chatsphere",
      },
      featured: true,
    },
    {
      title: "Mini YouTube Clone",
      subtitle: "Video Streaming Platform",
      description:
        "A React-based video streaming platform that replicates core YouTube functionality. Features video upload, streaming, search, and user interactions. University project showcasing full-stack development skills.",
      image: "/logo.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      stats: {
        downloads: "University Project",
        rating: "A Grade",
        users: "30+ Testers",
      },
      links: {
        demo: "https://github.com/221400100/Whatsapp_Clone_Chatsphere",
        github: "https://github.com/221400100/Whatsapp_Clone_Chatsphere",
        live: "#",
      },
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Branding Project",
      description:
        "A modern, responsive portfolio website built with React and Next.js. Showcases my projects, skills, and journey as a software engineering student.",
      image: "/Protofiloi.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      stats: {
        downloads: "Live Website",
        rating: "Responsive",
        users: "Visitors",
      },
      links: {
        demo: "https://github.com/221400100/Protfolio",
        github: "https://github.com/221400100/Protfolio",
        live: "https://github.com/221400100/Protfolio",
      },
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative mobile applications that solve real-world problems
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden ${project.featured ? "ring-2 ring-purple-500/50" : ""}`}
            >
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 ${project.featured ? "lg:grid-cols-2" : "md:grid-cols-2"} gap-0`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-purple-400 font-medium">{project.subtitle}</p>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-purple-500/30 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Download className="w-4 h-4 text-green-400 mr-1" />
                            <span className="text-white font-bold">{project.stats.downloads}</span>
                          </div>
                          <p className="text-xs text-gray-400">Downloads</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-white font-bold">{project.stats.rating}</span>
                          </div>
                          <p className="text-xs text-gray-400">Rating</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="w-4 h-4 text-blue-400 mr-1" />
                            <span className="text-white font-bold">{project.stats.users}</span>
                          </div>
                          <p className="text-xs text-gray-400">Active Users</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Demo
                        </Button>
                      </a>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}