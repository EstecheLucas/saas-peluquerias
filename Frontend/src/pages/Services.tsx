import { Scissors, Sparkles, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, name: "Corte Clásico", description: "Corte de pelo tradicional a tijera o máquina. Incluye lavado y peinado con cera o pomada.", price: "$8.000", duration: "30 min", icon: Scissors, category: "Cortes" },
  { id: 2, name: "Corte + Barba", description: "Corte clásico más arreglo, perfilado de barba con toalla caliente e hidratación con aceites esenciales.", price: "$12.000", duration: "45 min", icon: Scissors, category: "Combos" },
  { id: 3, name: "Coloración completa", description: "Tintura completa, platinados o claritos. Evaluación previa del estado del cabello antes de proceder.", price: "$25.000", duration: "90 min", icon: Sparkles, category: "Colorimetría" },
  { id: 4, name: "Lavado y Nutrición", description: "Lavado completo con masajes capilares y baño de crema para revitalizar el cuero cabelludo.", price: "$5.000", duration: "20 min", icon: Droplets, category: "Tratamientos" },
  { id: 5, name: "Ritual de Barba", description: "Vaporizador de ozono, toalla caliente, navaja tradicional y productos premium para el cuidado de la barba.", price: "$6.000", duration: "30 min", icon: Scissors, category: "Barbería" },
  { id: 6, name: "Corte Kids", description: "Corte adaptado para los más chicos, con paciencia y buen ambiente. (Menores de 12 años).", price: "$6.500", duration: "30 min", icon: Scissors, category: "Cortes" },
];

export default function Services() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">
      
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-gold-500/30 text-gold-500 text-xs font-semibold tracking-widest uppercase">
          La Excelencia
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase" style={{ fontFamily: 'serif' }}>
          Nuestros <span className="text-gold-500 italic">Servicios</span>
        </h1>
        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          Descubrí todos los tratamientos y cortes de autor que tenemos preparados para elevar tu imagen al siguiente nivel. 
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-[#111] p-6 lg:p-8 rounded-2xl border border-neutral-800 hover:border-gold-500/50 transition-all group flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-neutral-900 p-4 rounded-xl text-gold-500 border border-gold-500/10 group-hover:bg-gold-500/10 transition-colors">
                    <Icon size={28} />
                  </div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-800">{service.category}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-3 group-hover:text-gold-500 transition-colors">{service.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800/80">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Precio</span>
                    <span className="font-bold text-gold-500 text-xl">{service.price}</span>
                  </div>
                  <div className="w-px h-8 bg-neutral-800 hidden sm:block"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Tiempo</span>
                    <span className="font-bold text-white text-md tracking-wider">⏱ {service.duration}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <Link 
                  to="/booking/service"
                  className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-white hover:text-gold-500 uppercase tracking-widest transition-colors group/link"
                >
                  Agendar este servicio
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
