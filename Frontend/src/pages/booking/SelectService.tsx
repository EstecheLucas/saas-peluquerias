import { Link } from "react-router-dom";
import { Scissors, Sparkles, Droplets, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const services = [
  { id: 1, name: "Corte Clásico", description: "Corte de pelo tradicional a tijera o máquina.", price: "$8.000", duration: "30 min", icon: Scissors },
  { id: 2, name: "Corte + Barba", description: "Corte clásico más arreglo y perfilado de barba con toalla caliente e hidratación.", price: "$12.000", duration: "45 min", icon: Scissors },
  { id: 3, name: "Coloración completa", description: "Tintura completa, platinados o claritos.", price: "$25.000", duration: "90 min", icon: Sparkles },
  { id: 4, name: "Lavado y Nutrición", description: "Lavado completo con masajes capilares y baño de crema.", price: "$5.000", duration: "20 min", icon: Droplets },
];

export default function SelectService() {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const toggleService = (id: number) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <div className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Paso 1 de 4</div>
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'serif' }}>Servicios</h2>
        <p className="text-neutral-400">Seleccioná uno o más servicios para tu turno en Mi Rey.</p>
      </div>

      <div className="grid gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedServices.includes(service.id);
          
          return (
            <div 
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex gap-4 items-center group bg-[#111]
                ${isSelected 
                  ? "border-gold-500 shadow-[0_0_15px_rgba(245,158,11,0.15)]" 
                  : "border-neutral-800 hover:border-neutral-600"
                }
              `}
            >
              <div className={`p-4 rounded-lg transition-colors ${isSelected ? "bg-gold-500 text-black" : "bg-neutral-900 text-gold-500 group-hover:bg-neutral-800"}`}>
                <Icon size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-white uppercase tracking-wide">{service.name}</h3>
                  <span className="font-bold text-gold-500">{service.price}</span>
                </div>
                <p className="text-neutral-400 text-sm mt-1">{service.description}</p>
                <div className="mt-3 text-xs font-bold text-neutral-300 bg-neutral-800 px-3 py-1 flex w-fit rounded uppercase tracking-wider">
                  ⏱ {service.duration}
                </div>
              </div>

              <div className="pl-4">
                {isSelected ? (
                  <CheckCircle2 size={28} className="text-gold-500" />
                ) : (
                  <div className="w-7 h-7 rounded-full border-2 border-neutral-600 group-hover:border-neutral-400" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-neutral-800">
        <Link to="/" className="text-neutral-400 font-bold uppercase tracking-wider hover:text-white transition-colors">Volver</Link>
        <Link 
          to="/booking/professional" 
          className={`px-8 py-3 rounded-lg font-bold transition-all uppercase tracking-wide ${
            selectedServices.length > 0 
              ? "bg-gold-500 text-black hover:bg-gold-400" 
              : "bg-neutral-800 text-neutral-600 pointer-events-none"
          }`}
        >
          Siguiente
        </Link>
      </div>
    </div>
  );
}
