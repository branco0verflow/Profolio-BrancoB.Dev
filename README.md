# Next.js + Tailwind Portfolio Starter

Starter minimalista y **listo para producción** para arrancar tu portafolio en minutos.

## 🚀 Stack
- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS 3**
- **Framer Motion** (animaciones sutiles)

## 🧩 Estructura
```
app/
  layout.jsx        # Layout raíz (header/footer)
  page.jsx          # Home con secciones Hero/Projects/About/Contact
components/
  Header.jsx        # Navbar responsive
  Footer.jsx        # Pie
  Section.jsx       # Sección con animación de entrada
  ProjectCard.jsx   # Card de proyecto animada
data/
  personal.json     # Tus datos (nombre, links, resumen)
  projects.json     # Lista de proyectos (titulo, stack, links)
public/
  profile.jpg       # (opcional) tu foto de perfil
```

## 🛠️ Cómo correrlo localmente

1. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   # o
   yarn
   ```

2. **Levantar en dev**
   ```bash
   npm run dev
   ```
   Abrí http://localhost:3000

3. **Editar contenidos**
   - Cambiá `data/personal.json` y `data/projects.json`
   - Poné tu foto en `public/profile.jpg` (cuadrada ~640x640)

4. **Build producción**
   ```bash
   npm run build && npm start
   ```

## 🧪 Tips
- Ajustá la paleta en `tailwind.config.js` (objeto `colors.brand`).
- Agregá nuevas secciones duplicando `MotionSection`.
- Para analytics: Plausible/Umami → script en `app/layout.jsx`.

¡Éxitos y buen código!
