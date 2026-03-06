import { Link } from "react-router-dom";
import { useState } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

export default function SelectDateTime() {
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const dates = getDates();
  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "15:00", "15:30", "16:00", "16:30"];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2">
        <div className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Paso 3 de 4</div>
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'serif' }}>Agenda</h2>
        <p className="text-neutral-400">Seleccioná fecha y hora para tu turno.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-[#111] p-6 sm:p-8 rounded-2xl border border-neutral-800">
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-bold text-xl text-white uppercase tracking-wider">
            <CalendarIcon className="text-gold-500" /> Fecha
          </div>
          <div className="grid grid-cols-4 gap-3">
            {dates.map((d, index) => {
              const dateStr = d.toISOString().split('T')[0];
              const isSelected = date === dateStr;
              const dayName = new Intl.DateTimeFormat('es-AR', { weekday: 'short' }).format(d).slice(0, 3);
              const dayNum = d.getDate();
              
              return (
                <button
                  key={index}
                  onClick={() => { setDate(dateStr); setTime(null); }}
                  className={`py-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center
                    ${isSelected 
                      ? "border-gold-500 bg-gold-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.2)] transform scale-105" 
                      : "border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-gold-500/50 hover:text-white"
                    }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${isSelected ? "text-black/70" : "text-neutral-500"}`}>{dayName}</span>
                  <span className="text-2xl font-bold font-mono">{dayNum}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 font-bold text-xl text-white uppercase tracking-wider border-t border-neutral-800 pt-8 md:border-none md:pt-0">
            <Clock className="text-gold-500" /> Horarios disponibles
          </div>
          {!date ? (
            <div className="h-40 flex items-center justify-center text-neutral-500 text-sm border border-dashed border-neutral-700 rounded-xl bg-neutral-900/50 font-bold uppercase tracking-wider">
              Seleccioná una fecha primero
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 animate-in fade-in duration-300">
              {times.map((t) => {
                const isSelected = time === t;
                return (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`py-3 rounded-xl border font-bold text-sm transition-all text-center tracking-wider
                      ${isSelected 
                        ? "border-gold-500 bg-gold-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.2)] transform scale-105" 
                        : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-gold-500/50 hover:text-white"
                      }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center pt-6">
        <Link to="/booking/professional" className="text-neutral-400 font-bold uppercase tracking-wider hover:text-white transition-colors">Volver</Link>
        <Link 
          to="/booking/confirm" 
          className={`px-8 py-3 rounded-lg font-bold transition-all uppercase tracking-wide ${
            date && time
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
