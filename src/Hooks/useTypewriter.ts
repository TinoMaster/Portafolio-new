import { useState, useEffect, useCallback } from 'react'

interface UseTypewriterOptions {
   words: string[]
   typeSpeed?: number
   deleteSpeed?: number
   delayBetweenWords?: number
}

/**
 * Hook que rota palabras con efecto typewriter (escribe y borra).
 */
export const useTypewriter = ({
   words,
   typeSpeed = 80,
   deleteSpeed = 40,
   delayBetweenWords = 2000,
}: UseTypewriterOptions) => {
   const [text, setText] = useState('')
   const [wordIndex, setWordIndex] = useState(0)
   const [isDeleting, setIsDeleting] = useState(false)

   const tick = useCallback(() => {
      const currentWord = words[wordIndex]

      if (isDeleting) {
         setText(currentWord.substring(0, text.length - 1))
      } else {
         setText(currentWord.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentWord) {
         setTimeout(() => setIsDeleting(true), delayBetweenWords)
         return
      }

      if (isDeleting && text === '') {
         setIsDeleting(false)
         setWordIndex((prev) => (prev + 1) % words.length)
      }
   }, [text, isDeleting, wordIndex, words, delayBetweenWords])

   useEffect(() => {
      const speed = isDeleting ? deleteSpeed : typeSpeed
      const timer = setTimeout(tick, speed)
      return () => clearTimeout(timer)
   }, [tick, isDeleting, deleteSpeed, typeSpeed])

   return text
}
