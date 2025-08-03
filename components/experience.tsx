import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export default function Experience() {
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
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of continuous growth and impactful contributions in mobile development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-purple-400 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="border-green-500/30 text-green-400">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-white/10 text-white">
                        {tech}
                      </Badge>
                    ))}
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
