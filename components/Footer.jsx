export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 text-sm opacity-70">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Branco Beltran Full-Stack Dev. Todos los derechos reservados.</p>
        <p>
          Construido con <span className="opacity-90">Next.js</span> + <span className="opacity-90">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
