"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Mail, Linkedin, Globe } from "lucide-react"

const Resume = () => {
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
    <section id="resume" ref={sectionRef} className="reveal py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 font-mono gradient-text">Resume</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <Card className="glass border-cyan-500/30 box-glow-cyan overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto border border-cyan-700/30 rounded-md overflow-hidden shadow-lg box-glow-cyan">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-cyan-950/30"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <FileText className="h-16 w-16 text-cyan-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Tushar Shandilya</h3>
                      <p className="text-cyan-300 mb-4 font-mono">AI-Driven Data Analyst & ML Engineer</p>
                      <div className="w-full h-2 bg-cyan-950/50 rounded-full mb-2"></div>
                      <div className="w-full h-2 bg-cyan-950/50 rounded-full mb-2"></div>
                      <div className="w-3/4 h-2 bg-cyan-950/50 rounded-full mb-6"></div>
                      <div className="w-full h-2 bg-cyan-950/50 rounded-full mb-2"></div>
                      <div className="w-full h-2 bg-cyan-950/50 rounded-full mb-2"></div>
                      <div className="w-2/3 h-2 bg-cyan-950/50 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 font-mono">Get My Resume</h3>

                  <p className="text-gray-300 mb-6">
                    Download my resume to learn more about my experience, skills, and qualifications in AI, data
                    analysis, and machine learning engineering.
                  </p>

                  <Button
                    size="lg"
                    className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 font-mono animate-pulse-glow"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>

                  <div className="mt-6 pt-6 border-t border-cyan-800/30">
                    <h4 className="text-lg font-medium text-white mb-3 font-mono">Connect With Me</h4>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Linkedin className="h-4 w-4 text-blue-400" />
                        <a
                          href="https://linkedin.com/in/tusharshandilya0421"
                          className="hover:text-blue-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          linkedin.com/in/tusharshandilya0421
                        </a>
                      </div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <Globe className="h-4 w-4 text-green-400" />
                        <a
                          href="https://tushaarrr.github.io/portfolio"
                          className="hover:text-green-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          tushaarrr.github.io/portfolio
                        </a>
                      </div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <Mail className="h-4 w-4 text-purple-400" />
                        <a
                          href="mailto:tusharsharma25214@gmail.com"
                          className="hover:text-purple-400 transition-colors"
                        >
                          tusharsharma25214@gmail.com
                        </a>
                      </div>
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

export default Resume

