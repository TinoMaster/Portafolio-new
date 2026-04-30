import type { Variants } from 'framer-motion'

/* ═══════════════════════════════════════════
   Variantes reutilizables framer-motion
   ═══════════════════════════════════════════ */

/** Fade + slide up — ideal para secciones y contenido principal */
export const fadeUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
   },
}

/** Fade + slide desde la izquierda */
export const fadeLeft: Variants = {
   hidden: { opacity: 0, x: -40 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
   },
}

/** Fade + slide desde la derecha */
export const fadeRight: Variants = {
   hidden: { opacity: 0, x: 40 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
   },
}

/** Scale + fade — para cards y elementos que aparecen con zoom */
export const scaleIn: Variants = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
   },
}

/** Stagger children — el contenedor orquesta la animación de sus hijos */
export const staggerContainer: Variants = {
   hidden: {},
   visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
   },
}

/** Variante para cada hijo dentro de un stagger */
export const staggerItem: Variants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
   },
}

/* ═══════════════════════════════════════════
   Variantes legacy (mantenidas por compatibilidad)
   ═══════════════════════════════════════════ */

export const imageaboutme1 = {
   initial: { opacity: 0, rotate: -10, x: 8, y: 12 },
   animate: { opacity: 1, x: 0 },
}

export const imageaboutme2 = {
   initial: { opacity: 0, rotate: 12, x: -8 },
   animate: { opacity: 1, x: 0 },
}

export const resumeAboutMe = {
   initial: { opacity: 0, y: '100px' },
   animate: { opacity: 1, y: 0 },
}

export const resumeAboutProject = {
   initial: { opacity: 0, y: '100px' },
   animate: { opacity: 1, y: 0 },
}

