import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Dart", "Java", "Python", "Swift"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "AWS"],
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Xcode", "Android Studio", "VS Code", "Figma"],
      color: "from-orange-500 to-red-500",
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
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Skills developed through university coursework, personal projects, and continuous learning as a Software
            Engineering student
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3
                  className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Expertise Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
