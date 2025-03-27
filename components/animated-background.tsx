"use client"

import { useEffect, useRef } from "react"

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25

        // Neon colors
        const colors = [
          "rgba(0, 153, 255, 0.5)", // Blue
          "rgba(153, 51, 255, 0.5)", // Purple
          "rgba(0, 255, 128, 0.5)", // Green
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create code lines
    const codeLines: CodeLine[] = []
    const numberOfLines = 15

    class CodeLine {
      x: number
      y: number
      length: number
      speed: number
      color: string
      text: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.length = Math.random() * 100 + 50
        this.speed = Math.random() * 0.5 + 0.1

        // Neon colors with low opacity
        const colors = [
          "rgba(0, 153, 255, 0.15)", // Blue
          "rgba(153, 51, 255, 0.15)", // Purple
          "rgba(0, 255, 128, 0.15)", // Green
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        // Random code-like text
        const codeSnippets = [
          "def predict(data):",
          "model.fit(X_train, y_train)",
          "import tensorflow as tf",
          "class NeuralNetwork:",
          "accuracy = model.evaluate()",
          "plt.plot(history.history)",
          "X = df.drop('target', axis=1)",
          "from sklearn.model_selection",
          "y_pred = model.predict(X_test)",
          "import numpy as np",
          "df = pd.read_csv('data.csv')",
          "for epoch in range(epochs):",
        ]
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      }

      update() {
        this.y += this.speed
        if (this.y > canvas.height) {
          this.y = -30
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.font = "12px monospace"
        ctx.fillText(this.text, this.x, this.y)
      }
    }

    // Initialize particles and code lines
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    for (let i = 0; i < numberOfLines; i++) {
      codeLines.push(new CodeLine())
    }

    // Connect particles with lines
    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 1 - distance / 100
            ctx.strokeStyle = `rgba(100, 100, 255, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw code lines
      for (let i = 0; i < codeLines.length; i++) {
        codeLines[i].update()
        codeLines[i].draw()
      }

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-30" />
}

export default AnimatedBackground

