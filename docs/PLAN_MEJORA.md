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
| [Fase 4](#fase-4-página-de-proyectos) | ✅ Completo | Expandir a 9 proyectos, rediseñar ProjectCard, filtros |
| [Fase 5](#fase-5-nuevas-secciones) | ✅ Completo | Timeline, Skills categorizados, Arquitecturas, AI Agents |
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
- [x] myPay — Middleware pagos Regione Lombardia
- [x] Pet Farmacy — SaaS veterinaria multi-tenant
- [x] Food4You — App móvil food delivery
- [x] BeachGo — Gestión de playas
- [x] Control — Ecosistema gestión empresarial
- [x] EuropCar — Alquiler de vehículos
- [x] Restaurant, Debt Management, Sell Management (existentes mejorados)

### 4.2 — Rediseñar ProjectCard
- [x] Layout glassmorphism con imagen grande
- [x] Tabs con layoutId animado de framer-motion
- [x] Badge "In Construction" estilizado

### 4.3 — Tech pills con íconos
- [x] `RenderTegnologies` mapea 30+ tecnologías a react-icons con colores

### 4.4 — Filtro por tecnología
- [x] Chips de filtro extraídos de todos los proyectos
- [x] Toggle on/off, contador de proyectos filtrados
- [x] Índice se resetea al cambiar filtro

### 4.5 — Traducciones
- [x] 6 nuevos proyectos en EN y ES con título, descripción y pointers

---

## Fase 5: Nuevas secciones

### 5.1 — Timeline de experiencia
- [x] Línea de tiempo con 8 entries: myPay → freelance
- [x] Diseño alternado left/right con glassmorphism
- [x] Badges de tecnologías en cada entry
- [x] Animación de reveal escalonada

### 5.2 — Skills categorizados
- [x] 6 categorías: Frontend, Backend, Databases, DevOps, Testing, AI
- [x] Barras de proficiency animadas (1-5)
- [x] Íconos con colores reales por tecnología

### 5.3 — Arquitecturas
- [x] 9 patrones: Microservices, Multi-tenancy, Circuit Breaker, etc.
- [x] Cards glass con ícono + título + descripción
- [x] Grid responsive de 5 columnas

### 5.4 — AI & Agent Engineering
- [x] 3 columnas: Prompt Engineering, Custom Skills, Integraciones
- [x] Borde superior con color de acento
- [x] Bullet points con íconos de color

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
| 30/04 | 4 | Proyectos expandidos | 9 proyectos, ProjectCard glass, filtro por tecnología, tech icons, traducciones EN/ES |
| 30/04 | 5 | Nuevas secciones | Timeline (8 entries), Skills (6 categorías), Arquitecturas (9 patrones), AI Agents (3 áreas) |
