import Hero from "@/components/hero"
import WorkExperience from "@/components/work-experience"
import FeaturedProject from "@/components/featured-project"
import Projects from "@/components/projects"
import About from "@/components/about"
import Resume from "@/components/resume"
import Footer from "@/components/footer"
import MatrixBackground from "@/components/matrix-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Hero />
        <WorkExperience />
        <FeaturedProject />
        <Projects />
        <About />
        <Resume />
        <Footer />
      </div>
    </main>
  )
}

