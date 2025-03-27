"use client"

import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-gray-800 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8"
          >
            <a
              href="https://linkedin.com/in/tusharshandilya0421"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-950/30 text-blue-400 hover:bg-blue-900/40 transition-colors border border-blue-500/30 hover:box-glow-blue"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/tushaarrr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-950/30 text-purple-400 hover:bg-purple-900/40 transition-colors border border-purple-500/30 hover:box-glow-purple"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://tushaarrr.github.io/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-green-950/30 text-green-400 hover:bg-green-900/40 transition-colors border border-green-500/30 hover:box-glow-green"
              aria-label="Portfolio"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="mailto:tusharsharma25214@gmail.com"
              className="p-3 rounded-full bg-cyan-950/30 text-cyan-400 hover:bg-cyan-900/40 transition-colors border border-cyan-500/30 hover:box-glow-cyan"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-2 font-mono">&copy; {currentYear} Tushar Shandilya. All rights reserved.</p>
            <p className="text-gray-600 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

