import { Link } from "react-router-dom";
import { Scissors, Calendar, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="Barbershop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 backdrop-blur-md border border-gold-500/30 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-8">
            <Star size={12} className="fill-gold-500" /> Barbería Nº1 de la zona
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase leading-tight drop-shadow-2xl" style={{ fontFamily: 'serif' }}>
            Tu estilo, tu tiempo,<br/> <span className="text-gold-500 italic font-medium">sin esperas.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Reserva tu turno en la mejor peluquería en menos de 2 minutos. Experiencia premium, cortes precisos y el mejor ambiente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/booking/service" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gold-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-400 transition-all uppercase tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-1"
            >
              <Calendar size={20} />
              Reservar ahora
            </Link>
            <Link to="/servicios" className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white/5 backdrop-blur-md border border-neutral-500/30 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 hover:border-neutral-400 transition-all uppercase tracking-wide">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto relative z-10 -mt-8">
        <div className="bg-[#111] p-8 rounded-2xl border border-neutral-800 text-center hover:border-gold-500/50 transition-colors group">
          <div className="bg-gold-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500 group-hover:scale-110 transition-transform">
            <Scissors size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-white uppercase tracking-wide">Servicios Premium</h3>
          <p className="text-neutral-400">Cortes de pelo, arreglo de barba, coloración y más con los mejores productos del mercado.</p>
        </div>
        <div className="bg-[#111] p-8 rounded-2xl border border-neutral-800 text-center hover:border-gold-500/50 transition-colors group">
          <div className="bg-gold-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500 group-hover:scale-110 transition-transform">
            <Clock size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-white uppercase tracking-wide">Sin Demoras</h3>
          <p className="text-neutral-400">Organizamos nuestra agenda para atenderte a la hora pactada. Tu tiempo vale oro.</p>
        </div>
        <div className="bg-[#111] p-8 rounded-2xl border border-neutral-800 text-center hover:border-gold-500/50 transition-colors group">
          <div className="bg-gold-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500 group-hover:scale-110 transition-transform">
            <Star size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-white uppercase tracking-wide">Staff Profesional</h3>
          <p className="text-neutral-400">Nuestro equipo de barberos está capacitado en las últimas tendencias y técnicas mundiales.</p>
        </div>
      </section>
    </div>
  );
}
