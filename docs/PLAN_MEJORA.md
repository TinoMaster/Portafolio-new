# Plan de Mejora — Portafolio Oscar Mallón

> **Inicio:** 30/04/2026
> **Estilo:** Moderno / Minimalista
> **Estrategia:** Evolución sobre la estructura actual (no overhaul completo)

---

## Índice de Fases

| Fase | Estado | Descripción |
|------|--------|-------------|
| [Fase 1](#fase-1-limpieza-y-fundamentos) | ✅ Completo | Limpieza de código muerto, fixes técnicos |
| [Fase 2](#fase-2-sistema-de-diseño) | ✅ Completo | Design tokens, tipografía, glassmorphism, animaciones scroll |
| [Fase 3](#fase-3-rediseño-home) | ✅ Completo | Hero, Strengths, Features, CTA, Contact rediseñados |
| [Fase 4](#fase-4-página-de-proyectos) | ⬜ Pendiente | Expandir a 9 proyectos, rediseñar ProjectCard, filtros |
| [Fase 5](#fase-5-nuevas-secciones) | ⬜ Pendiente | Timeline, Skills categorizados, Arquitecturas, AI Agents |
| [Fase 6](#fase-6-polish-y-rendimiento) | ⬜ Pendiente | Animaciones, responsive, SEO, a11y, performance |

---

## Fase 1: Limpieza y fundamentos

### 1.1 — Eliminar componentes no usados
- [x] `CardHabilities.tsx`
- [x] `Imput.tsx`
- [x] `ButtonLink.tsx`
- [x] `Item_ImageTitleDescription.tsx`
- [x] `SectionBlogPageInit.tsx`

### 1.2 — Eliminar blog (completo)
- [x] Borrar carpeta `src/Components/Pag Blog/`
- [x] Borrar carpeta `src/Components/Pag View_Blog/`
- [x] Borrar `src/pages/Blog/`
- [x] Borrar `src/pages/View_Blog/`
- [x] Borrar `src/services/blog.ts` y `blogFunction.ts` + carpeta services vacía
- [x] Borrar `src/Hooks/useBlog.ts`, `useNavCategoriesBlog.ts`
- [x] Borrar datos de blog: `src/data/blogs/`, `src/data/sectionBlogHome.ts`, `src/data/iconsHeadBlog.ts`
- [x] Limpiar rutas comentadas en `RoutesApp.tsx`
- [x] Limpiar imports de blog en `utils/images.ts` y `utils/svgs.ts`
- [x] Remover `prettier` de dependencies (solo se usaba en `FormatCodeFromString`)
- [x] Borrar `FormatCodeFromString.tsx` y `FormatInfoMarkdown.tsx` (helpers de blog)
- [x] Borrar `SharePageComponent.tsx` (solo usado en blog)
- [x] Borrar loaders de blog: `listLoader.tsx`, `listLoader.css`
- [x] Remover `react-markdown`, `react-syntax-highlighter`, `prettier` de `package.json`

### 1.3 — Eliminar `pnpm-lock.yaml`
- [x] Borrar el archivo (solo se usa npm)

### 1.4 — Arreglar i18n en MenuMovil
- [x] Usar `t()` para los links como en `Menu/Links.tsx`

### 1.5 — Actualizar footer
- [x] Cambiar `© 2023` → `© 2026`

### 1.6 — Agregar fuente Lora a index.html
- [x] Agregar `family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500` al link de Google Fonts

### 1.7 — Estandarizar exports
- [ ] Pendiente (baja prioridad, se hará progresivamente)

### 1.8 — Otros fixes
- [x] Borrar `src/data/aboutMe.ts` (no usado)
- [x] Eliminar carpeta `src/services/` (vacía tras borrar blog)
- [x] Limpiar `utils/images.ts` y `utils/svgs.ts` de assets de blog
- [x] Eliminar modelos huérfanos: `Blog.ts`, `SectionBlogHome.ts`, `Menu.ts`
- [x] Eliminar `utils/colorIconBlog.ts`
- [x] Fix ESLint warnings en `LazyImage.tsx`
- [x] Build y lint verificados (0 errores, 0 warnings)

---

## Fase 2: Sistema de diseño

### 2.1 — CSS custom properties (design tokens)
- [x] Definir `:root` con variables de color, sombra, border-radius, transición
- [x] Tokens para glassmorphism: `--glass-bg`, `--glass-border`, `--glass-blur`

### 2.2 — Escala tipográfica mejorada
- [x] `font-inter` para cuerpo, `font-lora` para headings destacados
- [x] Tamaños consistentes con buena jerarquía visual (h1-h4 redefinidos)

### 2.3 — Tema oscuro más rico
- [x] Gradientes sutiles en fondos de sección
- [x] Efectos de glassmorphism en cards
- [x] Mejor contraste en textos secundarios
- [x] BaseLayout actualizado a `bg-[#0a0f0e]`

### 2.4 — Utilidades glassmorphism
- [x] Clases `.glass`, `.glass-hover`, `.glass-strong` en `index.css`
- [x] `.text-gradient`, `.text-gradient-warm` para texto con gradiente
- [x] `.border-gradient` para bordes con gradiente animado
- [x] `.section`, `.section-heading` para espaciado consistente
- [x] `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` (CSS-only)

### 2.5 — Animaciones scroll-driven
- [x] Hook `useScrollReveal` con IntersectionObserver (threshold, triggerOnce, rootMargin)
- [x] Variantes framer-motion: `fadeUp`, `fadeLeft`, `fadeRight`, `scaleIn`, `staggerContainer`, `staggerItem`
- [x] Tailwind: `animate-fade-in`, `animate-slide-up` keyframes

---

## Fase 3: Rediseño Home

### 3.1 — Hero Section
- [x] Foto de perfil más grande con borde glassmorphism animado
- [x] Título con gradiente animado (primary → secondary)
- [x] Subtítulo con efecto typewriter rotando roles (hook `useTypewriter`)
- [x] Tech stack: 25 pills con íconos reales (react-icons) en vez de badges shield.io
- [x] Botón CV actualizado al nuevo estilo
- [x] Social links con hover animations mejorados

### 3.2 — Strengths Section
- [x] Rediseño glassmorphism en las cards
- [x] Agregar 2 fortalezas nuevas: "AI-Driven", "Arquitectura Escalable"
- [x] Íconos más grandes y con animación al hover
- [x] Sombras de color más sutiles

### 3.3 — Features Section
- [x] Grid con mejor espaciado, cards glassmorphism
- [x] Íconos con micro-animaciones al hover
- [x] Mejor jerarquía tipográfica

### 3.4 — Projects CTA Section
- [x] Layout más impactante con gradiente de fondo
- [x] Botón rediseñado con arrow animation y border sutil

### 3.5 — Contact Section
- [x] Diseño más limpio con cards glass
- [x] Email button rediseñado
- [x] Icono de ubicación agregado

---

## Fase 4: Página de Proyectos

### 4.1 — Expandir myProjects.ts (3 → 9 proyectos)
- [ ] Restaurante App (existente)
- [ ] Debt Management (existente)
- [ ] Sell Management (existente)
- [ ] myPay — Middleware pagos Regione Lombardia
- [ ] Pet Farmacy — SaaS veterinaria multi-tenant
- [ ] Food4You — App móvil food delivery
- [ ] BeachGo — Gestión de playas
- [ ] Control — Ecosistema gestión empresarial
- [ ] EuropCar — Alquiler de vehículos

### 4.2 — Rediseñar ProjectCard
- [ ] Layout más moderno con glassmorphism
- [ ] Tabs más suaves (mejor integración framer-motion)
- [ ] Tech pills custom diseñadas con íconos

### 4.3 — Filtro por tecnología
- [ ] Botones/pills para filtrar proyectos por tech stack
- [ ] Animación al filtrar

### 4.4 — Mejores imágenes
- [ ] Usar LazyImage existente o mejorarlo
- [ ] Placeholders atractivos mientras cargan

---

## Fase 5: Nuevas secciones

### 5.1 — Timeline de experiencia
- [ ] Línea de tiempo vertical con roles y empresas/proyectos
- [ ] Badges de tecnologías en cada entry
- [ ] Animación de reveal al hacer scroll

### 5.2 — Skills categorizados
- [ ] Grid por categorías: Frontend, Backend, Mobile, DevOps, Databases, AI/Agents
- [ ] Indicadores de proficiency (barras o dots)

### 5.3 — Arquitecturas
- [ ] Cards visuales mostrando patrones: Microservicios, Multi-tenancy, Circuit Breaker, etc.
- [ ] Diagramas simplificados o representaciones con íconos

### 5.4 — AI & Agent Engineering
- [ ] Sección destacando prompt engineering y custom skills
- [ ] Muestra de agentes que has creado
- [ ] Visual estilo "terminal" o "código"

---

## Fase 6: Polish y rendimiento

### 6.1 — Scroll-reveal animations
- [ ] Aplicar `useScrollReveal` a todas las secciones

### 6.2 — Responsive
- [ ] Probar todos los breakpoints
- [ ] Arreglar layouts en móvil, tablet, desktop

### 6.3 — SEO
- [ ] Mejores meta tags (title, description, og:image)
- [ ] Structured data JSON-LD (Person, WebSite)
- [ ] sitemap.xml y robots.txt

### 6.4 — Accesibilidad
- [ ] ARIA labels en elementos interactivos
- [ ] Keyboard navigation (focus visible, tab order)
- [ ] Contraste WCAG AA verificado
- [ ] Skip-to-content link

### 6.5 — Performance
- [ ] Optimizar imágenes (WebP, tamaños responsive)
- [ ] Verificar bundle size con `npm run analize`
- [ ] Code splitting donde sea beneficioso

---

## Cambios realizados

| Fecha | Fase | Tarea | Descripción |
|-------|------|-------|-------------|
| 30/04 | — | Plan | Creación del plan de mejora |
| 30/04 | 1 | Limpieza completa | 25+ archivos/carpetas eliminados, 4 dependencias removidas, fixes i18n/footer/fonts |
| 30/04 | 1 | Build & Lint | Verificación exitosa: 0 errores TypeScript, 0 warnings ESLint |
| 30/04 | 3 | Home rediseñado | Hero con typewriter, 25 tech pills, 5 strengths con glassmorphism, features y contact rediseñados |
