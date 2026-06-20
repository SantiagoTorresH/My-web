import { useEffect, useRef } from 'react'

// Número total de partículas (neuronas)
const NEURON_COUNT = 60

// Distancia máxima para que dos neuronas se conecten con una línea
const CONNECTION_DISTANCE = 150

export function NeuronCanvas() {

  // Referencia al elemento <canvas>
  const canvasRef = useRef(null)

  // Referencia al div contenedor del canvas
  const containerRef = useRef(null)

  // Se ejecuta una sola vez cuando el componente se monta
  useEffect(() => {

    // Obtiene los elementos reales del DOM
    const canvas = canvasRef.current
    const container = containerRef.current

    // Si alguno no existe, termina la ejecución
    if (!canvas || !container) return

    // Obtiene el contexto 2D para dibujar sobre el canvas
    const ctx = canvas.getContext('2d')

    // Función que adapta el tamaño del canvas al tamaño del contenedor
    function resize() {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    // Se ajusta el tamaño inicialmente
    resize()

    // Cuando cambia el tamaño de la ventana se vuelve a ajustar
    window.addEventListener('resize', resize)

    // Se crea un arreglo con las neuronas
    const neurons = Array.from({ length: NEURON_COUNT }, () => ({

      // Posición X aleatoria
      x: Math.random() * canvas.width,

      // Posición Y aleatoria
      y: Math.random() * canvas.height,

      // Velocidad horizontal aleatoria
      vx: (Math.random() - 0.5) * 2,

      // Velocidad vertical aleatoria
      vy: (Math.random() - 0.5) * 2,
    }))

    // Guardará el id de la animación
    let animationId

    // Función principal que dibuja y anima las neuronas
    function drawNeurons() {

      // Borra todo el canvas antes de volver a dibujar
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Recorre todas las neuronas
      for (const neuron of neurons) {

        // Comienza un nuevo dibujo
        ctx.beginPath()

        // Dibuja un círculo
        // arc(x, y, radio, ángulo inicial, ángulo final)
        ctx.arc(neuron.x, neuron.y, 4, 0, Math.PI * 2)

        // Color del círculo
        ctx.fillStyle = 'rgb(233, 149, 32)'

        // Rellena el círculo
        ctx.fill()

        // Compara esta neurona con todas las demás
        for (const other of neurons) {

          // Evita compararla consigo misma
          if (other === neuron) continue

          // Diferencia entre coordenadas
          const dx = other.x - neuron.x
          const dy = other.y - neuron.y

          // Distancia entre ambas (Teorema de Pitágoras)
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Si están suficientemente cerca se dibuja una línea
          if (distance < CONNECTION_DISTANCE) {

            // Inicia una nueva línea
            ctx.beginPath()

            // Punto inicial
            ctx.moveTo(neuron.x, neuron.y)

            // Punto final
            ctx.lineTo(other.x, other.y)

            // Color con transparencia según la distancia
            // Entre más lejos estén, más transparente será la línea
            ctx.strokeStyle = `rgba(214, 102, 50, ${
              1 - distance / CONNECTION_DISTANCE
            })`

            // Dibuja la línea
            ctx.stroke()
          }
        }

        // Actualiza la posición de la neurona
        neuron.x += neuron.vx * 0.4
        neuron.y += neuron.vy * 0.4

        // Si llega al borde izquierdo o derecho, cambia de dirección
        if (neuron.x < 0 || neuron.x > canvas.width) {
          neuron.vx *= -1
        }

        // Si llega al borde superior o inferior, cambia de dirección
        if (neuron.y < 0 || neuron.y > canvas.height) {
          neuron.vy *= -1
        }
      }

      // Pide al navegador ejecutar nuevamente drawNeurons
      // Aproximadamente 60 veces por segundo
      animationId = requestAnimationFrame(drawNeurons)
    }

    // Inicia la animación
    drawNeurons()

    // Función de limpieza
    return () => {

      // Detiene la animación cuando el componente desaparece
      cancelAnimationFrame(animationId)

      // Elimina el evento resize para evitar fugas de memoria
      window.removeEventListener('resize', resize)
    }

  }, []) // [] significa que solo se ejecuta una vez

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
    </div>
  )
}

// Componente se monta
//         ↓
// Obtiene canvas y div
//         ↓
// Ajusta tamaño
//         ↓
// Genera 100 neuronas aleatorias
//         ↓
// drawNeurons()
//         ↓
// Limpia el canvas
//         ↓
// Dibuja círculos
//         ↓
// Calcula distancias
//         ↓
// Dibuja líneas entre neuronas cercanas
//         ↓
// Actualiza posiciones
//         ↓
// Rebota en los bordes
//         ↓
// requestAnimationFrame()
//         ↓
// Repite unas 60 veces por segundo