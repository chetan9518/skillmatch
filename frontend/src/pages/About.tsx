import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Code, 
  Users, 
  Briefcase, 
  Shield, 
  Zap, 
 
  Cloud,

  ArrowRight,
  Github,
  Linkedin,

  TrendingUp,
  Target,
  Heart
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Smart Skill Matching",
      description: "Connect with developers who share your technical expertise and interests using our advanced matching algorithm.",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Post job openings or discover exciting career opportunities tailored to your skill set and experience level.",
      color: "green"
    },
    {
      icon: Code,
      title: "Professional Profiles",
      description: "Build comprehensive developer profiles showcasing your skills, projects, and professional journey.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Enterprise-grade security with OTP verification and JWT-based authentication for complete data protection.",
      color: "red"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamlessly upload and manage resumes and profile pictures with AWS S3 cloud storage integration.",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Real-time Features",
      description: "Instant messaging, live notifications, and real-time updates keep you connected with the community.",
      color: "yellow"
    }
  ];

  const techStack = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", category: "Language", icon: "📘" },
    { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Express.js", category: "Framework", icon: "🚂" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "Prisma", category: "ORM", icon: "🔷" },
    { name: "Redis", category: "Caching", icon: "🔴" },
    { name: "AWS S3", category: "Storage", icon: "☁️" },
    { name: "JWT", category: "Auth", icon: "🔐" },
    { name: "Resend", category: "Email", icon: "📧" },
    { name: "Zod", category: "Validation", icon: "✅" }
  ];

  const stats = [
    { number: "100+", label: "Developers Connected", icon: Users },
    { number: "50+", label: "Job Opportunities", icon: Briefcase },
    { number: "500+", label: "Skills Tracked", icon: Code },
    { number: "99.9%", label: "Uptime", icon: TrendingUp }
  ];

  const journey = [
    {
      phase: "Research & Planning",
      description: "Identified the need for a skill-based professional networking platform for developers",
      icon: Target
    },
    {
      phase: "Design & Architecture",
      description: "Designed a scalable, modern architecture using industry-best practices and technologies",
      icon: Code
    },
    {
      phase: "Development & Testing",
      description: "Built from scratch with focus on security, performance, and user experience",
      icon: Zap
    },
    {
      phase: "Launch & Growth",
      description: "Deployed to production and continuously improving based on user feedback",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Heart className="w-5 h-5 text-red-300" />
              <span className="text-white font-medium">Built with passion for developers</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                SkillMatch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              A modern platform connecting developers through skills, fostering professional growth, 
              and creating opportunities in the tech ecosystem.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Join the Community
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              To bridge the gap between talented developers and exciting opportunities by creating 
              a platform where skills matter most. We believe in democratizing access to professional 
              networking and making career growth accessible to every developer, regardless of their background.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose SkillMatch?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've built a comprehensive platform that addresses every aspect of professional 
              networking and career development for developers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600",
                red: "from-red-500 to-red-600",
                orange: "from-orange-500 to-orange-600",
                yellow: "from-yellow-500 to-yellow-600"
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02}}
                  className="bg-gray-50 dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Getting started with SkillMatch is simple and straightforward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        {step.phase}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < journey.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We use industry-leading technologies to ensure scalability, security, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 dark:bg-zinc-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Meet the Creator
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <img
              src = "/logo/creator.jpg"
              className="rounded-full">
            
              </img>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Chetan</h3>
              <p className="text-blue-100 mb-6">CSE Undergrad @ IIIT Agartala</p>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Passionate about building solutions that matter. SkillMatch was born from the belief 
                that every developer deserves access to opportunities that match their skills and aspirations.
              </p>

              <div className="flex justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/chetan9518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/chetan-bb87bb31a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Build Your Future?
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of developers who are already growing their careers with SkillMatch
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/features")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                Explore Features
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;