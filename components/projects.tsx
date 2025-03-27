"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, LineChart, ExternalLink } from "lucide-react"

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "Brain Stroke Prediction",
      description:
        "Developed ML models achieving 90.26% accuracy in stroke prediction. Synthesized insights to identify health indicators like age, BMI, and glucose levels.",
      tools: ["Python", "Power BI", "SQL", "Machine Learning"],
      icon: Brain,
      link: "https://github.com/tushaarrr/Brain-Stroke-Data-Analysis",
      color: "blue",
    },
    {
      id: 2,
      title: "Hospitality Revenue Analysis",
      description:
        "Spearheaded the analysis of 132,000+ bookings, leading to $1.69 billion in total revenue. Designed dynamic dashboards and KPIs, providing actionable insights for business decisions.",
      tools: ["Python", "Power BI", "DAX", "MS Excel"],
      icon: LineChart,
      link: "https://github.com/tushaarrr/Data-Analytics/blob/main/HospitalityProject.zip",
      color: "purple",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="reveal py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 font-mono gradient-text">Projects</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`project-card glass border-${project.color}-500/30 box-glow-${project.color} h-full`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div
                        className={`p-3 rounded-lg bg-${project.color}-950/30 border border-${project.color}-500/30`}
                      >
                        <project.icon className={`h-6 w-6 text-${project.color}-400`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl mt-4 font-mono">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="outline"
                          className={`bg-${project.color}-950/20 text-${project.color}-300 border-${project.color}-500/30`}
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className={`w-full border-${project.color}-500/50 text-${project.color}-400 hover:bg-${project.color}-950/30`}
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Source
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

