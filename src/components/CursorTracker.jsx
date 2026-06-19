import { useEffect, useRef } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'

export function CursorTracker() {
  const { x, y } = useMousePosition()
  const puntitoRef = useRef(null)
  const circuloRef = useRef(null)
  const pos = useRef({ puntitoX: 0, puntitoY: 0, circleX: 0, circleY: 0 })
  const hasMoved = useRef(false)

  useEffect(() => {
    let animationId

    function update() {
      const { puntitoX, puntitoY, circleX, circleY } = pos.current

      pos.current.puntitoX += (x - puntitoX) * 0.06
      pos.current.puntitoY += (y - puntitoY) * 0.06
      pos.current.circleX += (pos.current.puntitoX - circleX) * 0.03
      pos.current.circleY += (pos.current.puntitoY - circleY) * 0.03

      if (puntitoRef.current) {
        puntitoRef.current.style.left = `${pos.current.puntitoX}px`
        puntitoRef.current.style.top = `${pos.current.puntitoY}px`
      }
      if (circuloRef.current) {
        circuloRef.current.style.left = `${pos.current.circleX - 20}px`
        circuloRef.current.style.top = `${pos.current.circleY - 20}px`
        if (x > 0 || y > 0) {
          circuloRef.current.style.opacity = '1'
          hasMoved.current = true
        }
      }

      animationId = requestAnimationFrame(update)
    }

    animationId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationId)
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      <div
        ref={puntitoRef}
        className="absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange"
      />
      <div
        ref={circuloRef}
        className="absolute h-10 w-10 rounded-full border-4 border-brand-gold bg-transparent opacity-0 transition-opacity duration-200"
      />
    </div>
  )
}
