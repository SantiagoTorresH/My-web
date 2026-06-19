import { useEffect, useRef } from 'react'

const NEURON_COUNT = 100
const CONNECTION_DISTANCE = 150

export function NeuronCanvas() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const neurons = Array.from({ length: NEURON_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))

    let animationId

    function drawNeurons() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const neuron of neurons) {
        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgb(233, 149, 32)'
        ctx.fill()

        for (const other of neurons) {
          if (other === neuron) continue
          const dx = other.x - neuron.x
          const dy = other.y - neuron.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(neuron.x, neuron.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(214, 102, 50, ${1 - distance / CONNECTION_DISTANCE})`
            ctx.stroke()
          }
        }

        neuron.x += neuron.vx * 0.4
        neuron.y += neuron.vy * 0.4

        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1
      }

      animationId = requestAnimationFrame(drawNeurons)
    }

    drawNeurons()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={containerRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
