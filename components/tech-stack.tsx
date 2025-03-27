"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const TechStack = () => {
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

  const techStack = [
    "Python",
    "SQL",
    "Power BI",
    "OpenAI",
    "HuggingFace",
    "Grad-CAM",
    "RAG",
    "FastAPI",
    "Supabase",
    "React",
    "Django",
    "Tableau",
    "MongoDB",
    "ETL",
    "EDA",
  ]

  return (
    <section id="tech-stack" ref={sectionRef} className="reveal py-16 px-4 bg-gradient-to-b from-black/90 to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Technical Stack</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative px-4 py-2 rounded-full bg-gradient-to-r from-blue-950/50 via-purple-950/50 to-green-950/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <span className="text-gray-300 group-hover:text-white transition-colors">{tech}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack

