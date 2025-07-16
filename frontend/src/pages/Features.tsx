import { motion } from "framer-motion";
import { Users, Briefcase, Code, Shield, Zap, Cloud } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Skill Matching",
    description:
      "Connect with developers who share your technical expertise and interests using our advanced matching algorithm.",
    color: "blue",
  },
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description:
      "Post job openings or discover exciting career opportunities tailored to your skill set and experience level.",
    color: "green",
  },
  {
    icon: Code,
    title: "Professional Profiles",
    description:
      "Build comprehensive developer profiles showcasing your skills, projects, and professional journey.",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "Enterprise-grade security with OTP verification and JWT-based authentication for complete data protection.",
    color: "red",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Seamlessly upload and manage resumes and profile pictures with AWS S3 cloud storage integration.",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Real-time Features",
    description:
      "Instant messaging, live notifications, and real-time updates keep you connected with the community.",
    color: "yellow",
  },
];

const colorClasses: Record<string, string> = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  red: "from-red-500 to-red-600",
  orange: "from-orange-500 to-orange-600",
  yellow: "from-yellow-500 to-yellow-600",
};

export default function FeaturesSection() {
  return (
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
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the key features that make SkillMatch the go-to platform for developer networking and career growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mb-6`}
                >
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
  );
} 