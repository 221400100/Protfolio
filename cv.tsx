import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
        <h2 className="text-xl text-gray-600 mb-4">Senior Mobile App Developer</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>alex.johnson@email.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            <span>alexjohnson.dev</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>github.com/alexjohnson</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="h-4 w-4" />
            <span>linkedin.com/in/alexjohnson</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Professional Summary */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Experienced Mobile App Developer with 6+ years of expertise in creating high-performance, user-centric
              mobile applications for iOS and Android platforms. Proven track record of delivering scalable solutions
              using React Native, Flutter, and native development frameworks. Strong background in full-stack
              development, API integration, and agile methodologies.
            </p>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Experience</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Senior Mobile App Developer</h4>
                      <p className="text-blue-600 font-medium">TechCorp Solutions</p>
                    </div>
                    <span className="text-sm text-gray-500">2021 - Present</span>
                  </div>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Led development of 3 major mobile applications with 500K+ downloads</li>
                    <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    <li>• Mentored junior developers and conducted code reviews</li>
                    <li>• Collaborated with UX/UI teams to improve user engagement by 40%</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Mobile App Developer</h4>
                      <p className="text-blue-600 font-medium">StartupXYZ</p>
                    </div>
                    <span className="text-sm text-gray-500">2019 - 2021</span>
                  </div>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Developed cross-platform mobile apps using React Native</li>
                    <li>• Integrated third-party APIs and payment gateways</li>
                    <li>• Optimized app performance resulting in 25% faster load times</li>
                    <li>• Participated in agile development cycles and sprint planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Junior Mobile Developer</h4>
                      <p className="text-blue-600 font-medium">Digital Innovations Inc.</p>
                    </div>
                    <span className="text-sm text-gray-500">2018 - 2019</span>
                  </div>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Built native iOS and Android applications</li>
                    <li>• Collaborated with backend teams for API development</li>
                    <li>• Implemented responsive UI components and animations</li>
                    <li>• Participated in user testing and bug fixing cycles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Projects</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">FitTracker Pro</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Comprehensive fitness tracking app with real-time workout monitoring, social features, and
                    AI-powered recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">HealthKit</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">EcoShop Marketplace</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    E-commerce platform focused on sustainable products with integrated payment processing and inventory
                    management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Technical Skills */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Mobile Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React Native</Badge>
                  <Badge>Flutter</Badge>
                  <Badge>Swift</Badge>
                  <Badge>Kotlin</Badge>
                  <Badge>Xamarin</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Dart</Badge>
                  <Badge>Java</Badge>
                  <Badge>Python</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Xcode</Badge>
                  <Badge>Android Studio</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900">Bachelor of Science</h4>
                <p className="text-blue-600 text-sm">Computer Science</p>
                <p className="text-gray-600 text-sm">University of California, Berkeley</p>
                <p className="text-gray-500 text-sm">2014 - 2018</p>
              </CardContent>
            </Card>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-900">AWS Certified Developer</p>
                <p className="text-gray-600">Amazon Web Services • 2023</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Google Associate Android Developer</p>
                <p className="text-gray-600">Google • 2022</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">React Native Certified Developer</p>
                <p className="text-gray-600">Meta • 2021</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Languages</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-900">English</span>
                <span className="text-gray-600">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900">Spanish</span>
                <span className="text-gray-600">Conversational</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900">Mandarin</span>
                <span className="text-gray-600">Basic</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
