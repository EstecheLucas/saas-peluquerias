import { Link } from "react-router-dom";
import { UserCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const professionals = [
  { id: 1, name: "Lucas", role: "Barbero Senior", rating: "4.9", image: null },
  { id: 2, name: "Marcos", role: "Estilista", rating: "4.8", image: null },
  { id: 3, name: "Cualquiera", role: "El primero disponible", rating: null, image: null, isAny: true },
];

export default function SelectProfessional() {
  const [selectedProf, setSelectedProf] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2">
        <div className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Paso 2 de 4</div>
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'serif' }}>Profesional</h2>
        <p className="text-neutral-400">¿Con quién de nuestros expertos te querés atender?</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionals.map((prof) => {
          const isSelected = selectedProf === prof.id;
          
          return (
            <div 
              key={prof.id}
              onClick={() => setSelectedProf(prof.id)}
              className={`relative p-8 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center gap-4 bg-[#111]
                ${isSelected 
                  ? "border-gold-500 shadow-[0_0_20px_rgba(245,158,11,0.15)] transform scale-[1.02]" 
                  : "border-neutral-800 hover:border-neutral-600"
                }
              `}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 text-gold-500">
                  <CheckCircle2 size={24} />
                </div>
              )}

              <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 overflow-hidden ${isSelected ? "border-gold-500 bg-black" : "border-neutral-800 text-neutral-600 bg-neutral-900"}`}>
                {prof.image ? (
                  <img src={prof.image} alt={prof.name} className="w-full h-full object-cover" />
                ) : (
                  <UserCircle size={64} className={isSelected ? "text-gold-500" : ""} strokeWidth={1} />
                )}
              </div>
              
              <div>
                <h3 className="font-bold text-xl text-white uppercase tracking-wide">{prof.name}</h3>
                <p className="text-gold-500 text-sm font-bold uppercase tracking-wider mt-1">{prof.role}</p>
                {prof.rating && (
                  <div className="flex items-center justify-center gap-1 mt-3 text-sm text-neutral-400 font-bold bg-neutral-900 px-3 py-1 rounded w-fit mx-auto">
                    <span className="text-gold-500">★</span> {prof.rating}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-neutral-800">
        <Link to="/booking/service" className="text-neutral-400 font-bold uppercase tracking-wider hover:text-white transition-colors">Volver</Link>
        <Link 
          to="/booking/datetime" 
          className={`px-8 py-3 rounded-lg font-bold transition-all uppercase tracking-wide ${
            selectedProf !== null
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
