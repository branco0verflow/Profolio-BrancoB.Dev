import { MotionSection } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import personal from "@/data/personal.json";
import projects from "@/data/projects.json";
import TechShowcase from "../components/TechShowCase";


export default function Home() {
  return (
    <>
      <MotionSection id="home" className="py-14">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm opacity-70">Hola, soy</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
              {personal.name}
            </h1>
            <h2 className="mt-2 text-xl md:text-2xl opacity-90">
              {personal.role}
            </h2>
            <p className="mt-4 max-w-prose opacity-80">
              {personal.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl bg-brand-500 px-4 py-2 font-medium hover:bg-brand-400 transition">
                Ver proyectos
              </a>
              <a href={personal.links.linkedin} target="_blank" className="rounded-xl border border-white/15 px-4 py-2 font-medium hover:bg-white/10 transition">
                LinkedIn
              </a>
              <a href={personal.links.github} target="_blank" className="rounded-xl border border-white/15 px-4 py-2 font-medium hover:bg-white/10 transition">
                GitHub
              </a>
            </div>
          </div>
          <div className="justify-self-center">
            <img
              src="/profile.jpg"
              alt="Foto de perfil"
              className="size-40 md:size-56 rounded-full object-cover border border-white/10 shadow-soft"
            />
          </div>


        </div>
      </MotionSection>

      <div className="absolut">
        <TechShowcase />
      </div>


      {/* Projects */}
      <MotionSection id="projects" className="py-14" title="Proyectos">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </MotionSection>

      {/* About */}
      <MotionSection id="about" className="py-14" title="Sobre mí">
        <p className="max-w-prose opacity-80">
          Me enfoco en construir experiencias web claras, rápidas y mantenibles.
          Disfruto trabajar con React/Next, API REST en Java/Spring y bases de datos relacionales.
          Me interesan la accesibilidad, UX y animaciones sutiles que suman a la historia del producto.
        </p>
      </MotionSection>

      {/* Contact */}
      <MotionSection id="contact" className="py-14" title="Contacto">
        <div className="card">
          <p className="opacity-80">
            ¿Querés colaborar o tenés una oportunidad? Escribime a{" "}
            <a href={`mailto:${personal.links.email}`} className="link-underline">{personal.links.email}</a>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {personal.links.cv && (
              <a href={personal.links.cv} target="_blank" className="rounded-xl border border-white/15 px-4 py-2 hover:bg-white/10 transition">Descargar CV</a>
            )}
            {personal.links.demo && (
              <a href={personal.links.demo} target="_blank" className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20 transition">Ver Demo</a>
            )}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
