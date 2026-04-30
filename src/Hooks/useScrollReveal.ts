import { useEffect, useRef, useState, useCallback } from 'react'

interface UseScrollRevealOptions {
   threshold?: number
   rootMargin?: string
   triggerOnce?: boolean
}

/**
 * Hook que detecta cuando un elemento entra al viewport y dispara una animación.
 * Retorna una ref para asignar al elemento y un booleano `isVisible`.
 */
export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
   const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options
   const ref = useRef<HTMLDivElement>(null)
   const [isVisible, setIsVisible] = useState(false)

   const handleIntersection = useCallback(
      (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setIsVisible(true)
               if (triggerOnce) {
                  observer.unobserve(entry.target)
               }
            } else if (!triggerOnce) {
               setIsVisible(false)
            }
         })
      },
      [triggerOnce]
   )

   useEffect(() => {
      const element = ref.current
      if (!element) return

      const observer = new IntersectionObserver(handleIntersection, {
         threshold,
         rootMargin,
      })

      observer.observe(element)

      return () => {
         observer.unobserve(element)
      }
   }, [handleIntersection, threshold, rootMargin])

   return { ref, isVisible }
}
