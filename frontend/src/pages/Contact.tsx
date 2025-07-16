import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-zinc-900 dark:to-zinc-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center border border-blue-100 dark:border-zinc-700"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 dark:text-blue-300">Contact Me</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I'd love to connect! Reach out via email or social links below.
        </p>
        <div className="flex flex-col gap-6 items-center">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-3 text-lg text-blue-700 dark:text-blue-300 hover:underline"
          >
            <Mail className="w-6 h-6" /> chetan951817@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/chetan-bb87bb31a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-blue-700 dark:text-blue-300 hover:underline"
          >
            <Linkedin className="w-6 h-6" /> LinkedIn
          </a>
          <a
            href="https://github.com/chetan9518"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-blue-700 dark:text-blue-300 hover:underline"
          >
            <Github className="w-6 h-6" /> GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
} 