"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, MessageSquare, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className="reveal min-h-screen flex flex-col justify-center items-center text-center px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-6">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-950/30 border border-blue-500/30 text-blue-400 text-sm font-mono">
            AI + ML + Data
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono">
          <span className="gradient-text">Tushar Shandilya</span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-cyan-300 font-mono neon-cyan-glow">
          AI-Driven Data Analyst & ML Engineer
        </h2>

        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
          Building intelligent, real-world solutions with AI, ML & data.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-mono animate-pulse-glow"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-950/30 font-mono"
            asChild
          >
            <a href="mailto:tusharsharma25214@gmail.com">
              <MessageSquare className="mr-2 h-4 w-4" /> Let&apos;s Connect
            </a>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="text-green-400 hover:bg-green-950/30 font-mono"
            onClick={scrollToExperience}
          >
            <ArrowDown className="mr-2 h-4 w-4" /> View Experience
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-cyan-400" />
      </div>
    </section>
  )
}

export default Hero

