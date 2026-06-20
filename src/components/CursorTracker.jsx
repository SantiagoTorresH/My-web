import { useEffect, useRef } from 'react'

// Hook personalizado que obtiene la posición actual del mouse
import { useMousePosition } from '../hooks/useMousePosition'

export function CursorTracker() {

  // Coordenadas actuales del mouse
  const { x, y } = useMousePosition()

  // Referencia al punto naranja
  const puntitoRef = useRef(null)

  // Referencia al círculo dorado
  const circuloRef = useRef(null)

  // Guarda las posiciones actuales de ambos elementos
  // useRef se utiliza porque queremos modificar estos valores
  // sin provocar un re-render
  const pos = useRef({
    puntitoX: 0,
    puntitoY: 0,
    circleX: 0,
    circleY: 0
  })

  // Indica si el mouse ya se movió al menos una vez
  const hasMoved = useRef(false)

  useEffect(() => {

    // Aquí se guardará el id de la animación
    let animationId

    // Función que se ejecutará continuamente
    function update() {

      // Obtenemos las posiciones actuales almacenadas
      const {
        puntitoX,
        puntitoY,
        circleX,
        circleY
      } = pos.current

      // -------------------------
      // MOVIMIENTO DEL PUNTO
      // -------------------------
      // Hace que el punto se acerque al cursor suavemente
      pos.current.puntitoX += (x - puntitoX) * 0.06
      pos.current.puntitoY += (y - puntitoY) * 0.06

      // -------------------------
      // MOVIMIENTO DEL CÍRCULO
      // -------------------------
      // El círculo sigue al punto con más retraso
      pos.current.circleX += (pos.current.puntitoX - circleX) * 0.03
      pos.current.circleY += (pos.current.puntitoY - circleY) * 0.03

      // -------------------------
      // MOVER EL PUNTO
      // -------------------------
      if (puntitoRef.current) {

        // Posición horizontal
        puntitoRef.current.style.left =
          `${pos.current.puntitoX}px`

        // Posición vertical
        puntitoRef.current.style.top =
          `${pos.current.puntitoY}px`
      }

      // -------------------------
      // MOVER EL CÍRCULO
      // -------------------------
      if (circuloRef.current) {

        // Se resta 20 para centrarlo
        circuloRef.current.style.left =
          `${pos.current.circleX - 20}px`

        circuloRef.current.style.top =
          `${pos.current.circleY - 20}px`

        // Si el mouse ya se movió
        if (x > 0 || y > 0) {

          // Hace visible el círculo
          circuloRef.current.style.opacity = '1'

          // Guarda que ya hubo movimiento
          hasMoved.current = true
        }
      }

      // Programa el siguiente frame
      animationId = requestAnimationFrame(update)
    }

    // Inicia la animación
    animationId = requestAnimationFrame(update)

    // Limpieza cuando el componente desaparece
    return () => cancelAnimationFrame(animationId)

  }, [x, y])

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-50
        hidden
        md:block
      "
    >

      {/* Punto naranja */}
      <div
        ref={puntitoRef}
        className="
          absolute
          h-7
          w-7
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand-orange
        "
      />

      {/* Círculo exterior */}
      <div
        ref={circuloRef}
        className="
          absolute
          h-10
          w-10
          rounded-full
          border-4
          border-brand-gold
          bg-transparent
          opacity-0
          transition-opacity
          duration-200
        "
      />
    </div>
  )
}