import { useEffect, useRef } from 'react'

// Desplaza verticalmente el elemento a una fracción de la velocidad del scroll.
export function useParallax(speed = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let frame

    const update = () => {
      const rect = element.parentElement.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed
      element.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [speed])

  return ref
}
