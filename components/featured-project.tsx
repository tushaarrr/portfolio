"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, ExternalLink } from "lucide-react"
import Image from "next/image"

const FeaturedProject = () => {
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
    <section id="cerebramha" ref={sectionRef} className="reveal py-20 px-4 bg-gradient-to-b from-black to-black/90">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 font-mono gradient-text">Featured Startup</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>

          <Card className="gradient-border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/30">
                      <Brain className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-mono">Cerebramha</h3>
                  </div>

                  <p className="text-lg font-medium text-purple-300 mb-4 neon-purple-glow">
                    AI-Powered Alzheimer&apos;s Diagnosis Platform
                  </p>

                  <p className="text-gray-300 mb-6">
                    Built a dual-input CNN-MLP model combining 3D MRI scans and 49 health markers, achieving 75%
                    accuracy in Alzheimer's stage prediction. Implemented a real-time AI assistant using OpenAI APIs and
                    RAG.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-purple-950/40 text-purple-300 border-purple-700/50">Co-Founder</Badge>
                    <Badge className="bg-blue-950/40 text-blue-300 border-blue-700/50">ML Engineer</Badge>
                    <Badge className="bg-green-950/40 text-green-300 border-green-700/50">AI Product Builder</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="min-w-5 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Built a multimodal AI model combining 3D MRI scans and 49 health markers
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="min-w-5 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Implemented explainable AI with 3D Grad-CAM and AAL3 atlas visualizations
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="min-w-5 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Deployed full-stack FastAPI + React app with Supabase and Vercel
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-mono"
                  asChild
                >
                  <a href="https://www.cerebramha.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Cerebramha
                  </a>
                </Button>
              </div>

              <div className="relative flex items-center justify-center bg-black p-6 md:p-0">
                <div className="relative w-full h-[300px] md:h-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artificial%20%281%29-CUMDd264T52bl9uVwe8dMfKvIhZj9X.png"
                    alt="Cerebramha Logo"
                    width={400}
                    height={400}
                    className="object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProject

