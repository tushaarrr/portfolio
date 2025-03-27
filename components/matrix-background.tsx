"use client"

import { useEffect, useRef } from "react"

const MatrixBackground = () => {
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

    // Matrix rain characters
    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Code snippets
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

    const snippetPositions: { x: number; y: number; text: string; speed: number; opacity: number }[] = []

    // Initialize code snippets
    for (let i = 0; i < 10; i++) {
      snippetPositions.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    // Draw matrix rain
    function drawMatrixRain() {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set color and font for characters
      ctx.font = "15px monospace"

      // Draw each column
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length))

        // Random color from blue, cyan, green, purple
        const colors = [
          "rgba(0, 153, 255, 0.8)", // Blue
          "rgba(0, 255, 255, 0.8)", // Cyan
          "rgba(0, 255, 128, 0.8)", // Green
          "rgba(153, 51, 255, 0.8)", // Purple
        ]
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]

        // Draw character
        ctx.fillText(text, i * 20, drops[i] * 20)

        // Reset drop when it reaches bottom or randomly
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop
        drops[i]++
      }
    }

    // Draw code snippets
    function drawCodeSnippets() {
      ctx.font = "12px monospace"

      for (let i = 0; i < snippetPositions.length; i++) {
        const snippet = snippetPositions[i]

        // Set color with opacity
        ctx.fillStyle = `rgba(0, 255, 200, ${snippet.opacity})`

        // Draw snippet
        ctx.fillText(snippet.text, snippet.x, snippet.y)

        // Move snippet
        snippet.y += snippet.speed

        // Reset when off screen
        if (snippet.y > canvas.height) {
          snippet.y = -20
          snippet.x = Math.random() * canvas.width
          snippet.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }
      }
    }

    // Animation loop
    function animate() {
      drawMatrixRain()
      drawCodeSnippets()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-20" />
}

export default MatrixBackground

