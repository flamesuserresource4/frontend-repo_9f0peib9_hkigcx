import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    tagline: 'Headless storefront with 3D interactions',
    description:
      'A performant e-commerce starter focusing on DX, accessibility, and micro-animations. Built with modern tooling and edge-ready APIs.',
    tags: ['React', 'FastAPI', 'Tailwind', 'Stripe'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Pulse Dashboard',
    tagline: 'Realtime analytics for product teams',
    description:
      'Modular widgets, streaming charts, and role-based access with a crisp dark UI that adapts to your data.',
    tags: ['Next.js', 'WebSockets', 'D3', 'Auth'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Nova UI Kit',
    tagline: 'Aesthetic components for SaaS',
    description:
      'Production-ready components using shadcn patterns, with subtle glass morphism and motion out of the box.',
    tags: ['React', 'Radix', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(39,39,42,0.6),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            A snapshot of what I love to craft — performant, minimal, and immersive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 overflow-hidden hover:border-cyan-500/40 transition"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/0 via-indigo-500/0 to-transparent opacity-0 group-hover:opacity-20 transition" />
              <h3 className="text-white text-xl font-semibold">{p.title}</h3>
              <p className="text-cyan-300 text-sm mt-1">{p.tagline}</p>
              <p className="text-zinc-300 mt-3 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
