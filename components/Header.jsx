"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const Nav = () => (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6">
      <a href="#home" className="opacity-80 hover:opacity-100">Inicio</a>
      <a href="#projects" className="opacity-80 hover:opacity-100">Proyectos</a>
      <a href="#about" className="opacity-80 hover:opacity-100">Sobre mí</a>
      <a href="#contact" className="opacity-80 hover:opacity-100">Contacto</a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-black/30">
      <div className="container-max h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold">Branco.dev</a>
        <div className="hidden md:block">
          <Nav />
        </div>
        <button
          className="md:hidden rounded-lg border border-white/15 px-3 py-1.5 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/50">
          <div className="container-max py-3">
            <Nav />
          </div>
        </div>
      )}
    </header>
  );
}
