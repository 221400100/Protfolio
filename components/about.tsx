import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Users, Zap } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: "Cross-Platform",
      description: "Expert in React Native, Flutter, and native development",
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "User-Centric",
      description: "Focusing on exceptional user experience and interface design",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance",
      description: "Optimizing apps for speed, efficiency, and smooth operation",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Muhammad Anees Butt, a dedicated Software Engineering student at GIFT University with a passion for
            mobile app development. Currently pursuing my BS in Software Engineering, I've been creating innovative
            mobile solutions using React Native and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300">
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

          <div className="relative">
            <img
              src="/online world-amico.png"
              alt="Developer at work"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
