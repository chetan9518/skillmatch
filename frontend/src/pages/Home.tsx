import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, Briefcase, Code } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  // Quick stats for subtle social proof
  const stats = [
    { icon: Users, value: "100+", label: "Developers Joined" },
    { icon: Briefcase, value: "50+", label: "Jobs Posted" },
    { icon: Code, value: "500+", label: "Skills Tracked" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 200 + 120,
              height: Math.random() * 200 + 120,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 bg-black/60 backdrop-blur-md p-10 rounded-2xl text-center max-w-2xl shadow-2xl border border-white/10"
      >
        <img
          src="/logo/icon.png"
          alt="SkillMatch Logo"
          className="mx-auto mb-6 w-60 h-16 rounded-xl shadow-lg border border-white/20 bg-white/10"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight drop-shadow-lg">
          Welcome to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">SkillMatch</span>
        </h1>
        <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
          Connect. Grow. Get Matched.<br />
          <span className="text-gray-200/80 text-base md:text-lg block mt-2">
            The modern platform for developers to showcase skills, upload resumes, and discover real opportunities.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/signup")}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
            className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
        {/* Value Propositions */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
          <div className="text-left md:text-center flex-1">
            <span className="block text-lg text-yellow-300 font-semibold mb-1">Skill-based Matchmaking</span>
            <span className="text-gray-200/80 text-base">Find developers and jobs that truly fit your expertise.</span>
          </div>
          <div className="text-left md:text-center flex-1">
            <span className="block text-lg text-blue-200 font-semibold mb-1">Showcase Your Profile</span>
            <span className="text-gray-200/80 text-base">Build a standout portfolio with resume, GitHub, and more.</span>
          </div>
          <div className="text-left md:text-center flex-1">
            <span className="block text-lg text-purple-200 font-semibold mb-1">Real Opportunities</span>
            <span className="text-gray-200/80 text-base">Connect with real people, not just profiles.</span>
          </div>
        </div>
        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg shadow-sm">
                <Icon className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-bold text-lg">{stat.value}</span>
                <span className="text-gray-200 text-sm">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}