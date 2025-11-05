import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-60">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-5">
              Building modern experiences
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Pren — Portfolio & SaaS Aesthetics
            </h1>
            <p className="mt-4 text-zinc-300 text-lg leading-relaxed max-w-xl">
              I design and build crisp, futuristic interfaces with a focus on performance, interaction, and clarity. Explore my selected work and get in touch to collaborate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-zinc-700 text-zinc-200 hover:bg-zinc-800/60 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden>
            {/* Spline fills via absolute layer; this column balances layout */}
            <div className="h-[60vh]" />
          </div>
        </div>
      </div>
    </section>
  );
}
