"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, Database, LineChart, Brain, Globe } from "lucide-react"

const WorkExperience = () => {
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

  const experiences = [
    {
      id: 1,
      role: "Co-Founder — ML Engineer & AI Product Builder",
      company: "Cerebramha",
      location: "Vancouver, Canada",
      period: "Dec 2024 - Present",
      description:
        "Built a dual-input CNN-MLP model combining 3D MRI scans and 49 health markers, achieving 75% accuracy in Alzheimer's stage prediction. Implemented a real-time AI assistant using OpenAI APIs and RAG to generate explainable insights from clinical data.",
      skills: ["TensorFlow", "PyTorch", "FastAPI", "React", "OpenAI", "Grad-CAM", "Supabase"],
      icon: Brain,
      color: "purple",
    },
    {
      id: 2,
      role: "Data Analyst Trainee",
      company: "MedTourEasy",
      location: "Remote",
      period: "08/2024 - 08/2024",
      description:
        "Restored 40% incomplete records using ML-driven imputation on 500+ fitness datasets, enhancing data integrity. Implemented predictive models improving forecast accuracy by 25%, driving data-backed decisions.",
      skills: ["Python", "Pandas", "Scikit-learn", "Power BI", "SQL", "Statistical Analysis"],
      icon: LineChart,
      color: "blue",
    },
    {
      id: 3,
      role: "Data Analyst",
      company: "FlitWebs",
      location: "Jaipur, India",
      period: "01/2022 - 04/2022",
      description:
        "Conducted data mining on 500,000+ data points to extract insights into age-specific health patterns. Addressed data gaps using advanced Python libraries and cloud tools, ensuring reliable results.",
      skills: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Analytical Thinking"],
      icon: Database,
      color: "green",
    },
    {
      id: 4,
      role: "Python Developer Intern",
      company: "FlitWebs",
      location: "Jaipur, India",
      period: "05/2021 - 08/2021",
      description:
        "Created backend features and admin dashboards using Python, Django, improving client-side functionality. Built and tested REST APIs, designed PostgreSQL schemas, and implemented CRUD operations for seamless data management.",
      skills: ["Python", "Django", "PostgreSQL", "REST APIs", "HTML/CSS"],
      icon: Code,
      color: "cyan",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="reveal py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 font-mono gradient-text">Work Experience</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`glass border-${exp.color}-500/30 box-glow-${exp.color}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <div className={`p-3 rounded-lg bg-${exp.color}-950/30 border border-${exp.color}-500/30`}>
                          <exp.icon className={`h-6 w-6 text-${exp.color}-400`} />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white font-mono">{exp.role}</h3>
                          <div className="text-sm text-gray-400 font-mono">{exp.period}</div>
                        </div>

                        <div className={`text-${exp.color}-300 font-medium mb-1`}>
                          <Briefcase className="inline-block h-4 w-4 mr-2" />
                          {exp.company}
                        </div>

                        <div className="text-gray-400 text-sm mb-3">
                          <Globe className="inline-block h-4 w-4 mr-2" />
                          {exp.location}
                        </div>

                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              className={`bg-${exp.color}-950/20 text-${exp.color}-300 border-${exp.color}-500/30`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience

