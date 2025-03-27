"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="reveal py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 font-mono gradient-text">About Me</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>

          <Card className="glass border-green-500/30 box-glow-green">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-500/30 box-glow-green">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-green-500/20 animate-pulse-glow"></div>
                    <img
                      src="/profile.png"
                      alt="Tushar Shandilya"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    I'm passionate about leveraging AI and ML to solve real-world challenges, particularly in
                    healthcare. As a co-founder of Cerebramha, I've built an AI-powered platform for Alzheimer's
                    diagnosis that combines advanced machine learning with medical expertise.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    My expertise spans full-stack development, data analysis, and machine learning engineering. I enjoy
                    transforming complex data into actionable insights and building intelligent systems that make a
                    meaningful impact.
                  </p>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-950/30 p-3 rounded-lg text-center border border-blue-500/30">
                      <p className="text-blue-400 font-medium font-mono">Data Analysis</p>
                    </div>
                    <div className="bg-purple-950/30 p-3 rounded-lg text-center border border-purple-500/30">
                      <p className="text-purple-400 font-medium font-mono">Machine Learning</p>
                    </div>
                    <div className="bg-green-950/30 p-3 rounded-lg text-center border border-green-500/30">
                      <p className="text-green-400 font-medium font-mono">AI Development</p>
                    </div>
                    <div className="bg-cyan-950/30 p-3 rounded-lg text-center border border-cyan-500/30">
                      <p className="text-cyan-400 font-medium font-mono">Full-Stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About

