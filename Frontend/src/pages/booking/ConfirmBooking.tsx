import { Link } from "react-router-dom";
import { CheckCircle2, Scissors, User, Calendar, Clock, Home } from "lucide-react";
import { useState } from "react";

export default function ConfirmBooking() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (isConfirmed) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500 py-12">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gold-500 blur-[30px] opacity-20 rounded-full animate-pulse"></div>
            <div className="w-24 h-24 bg-[#111] border-2 border-gold-500 rounded-full flex items-center justify-center relative z-10 mx-auto">
              <CheckCircle2 size={48} className="text-gold-500" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'serif' }}>
            ¡Turno Confirmado!
          </h2>
          <p className="text-xl text-neutral-400 max-w-lg mx-auto">
            Te esperamos el <span className="text-gold-500 font-bold">Jueves 15 a las 16:30 hs</span>. Hemos guardado tu reserva exitosamente, nos vemos en Mi Rey.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-neutral-800 max-w-md mx-auto text-left flex items-start gap-4">
            <div className="p-3 bg-neutral-900 rounded-xl text-gold-500 shrink-0"><CheckCircle2 size={24} /></div>
            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-1">Recordatorio enviado</p>
              <p className="text-sm text-neutral-400">Te enviamos los detalles a tu WhatsApp vinculado.</p>
            </div>
        </div>

        <div className="pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 hover:border-neutral-700 transition-all uppercase tracking-wide group"
          >
            <Home size={18} />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2">
        <div className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Paso 4 de 4</div>
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'serif' }}>Confirmación</h2>
        <p className="text-neutral-400">Revisá los detalles de tu turno y completá tus datos.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-[#111] rounded-2xl border border-neutral-800 overflow-hidden">
            <div className="bg-gold-500/10 border-b border-gold-500/20 px-6 py-4 flex items-center justify-between">
              <span className="font-bold text-gold-500 uppercase tracking-wide text-sm">Resumen</span>
              <span className="text-black font-bold bg-gold-500 px-3 py-1 rounded text-sm">$8.000</span>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-neutral-900 rounded-lg text-gold-500"><Scissors size={20} /></div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Servicio</p>
                  <p className="font-bold text-white">Corte Clásico</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-neutral-900 rounded-lg text-gold-500"><User size={20} /></div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Profesional</p>
                  <p className="font-bold text-white">Lucas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-neutral-900 rounded-lg text-gold-500"><Calendar size={20} /></div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Fecha y Hora</p>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white">Jueves 15</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                    <p className="font-bold text-gold-500 flex items-center gap-1.5"><Clock size={14}/> 16:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 bg-[#111] p-6 sm:p-8 rounded-2xl border border-neutral-800">
          <h3 className="font-bold text-xl text-white uppercase tracking-wide mb-6">Tus datos</h3>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Nombre</label>
                <input type="text" className="w-full bg-neutral-900/50 rounded-lg border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:bg-neutral-900 transition-all placeholder:text-neutral-600" placeholder="Juan" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Apellido</label>
                <input type="text" className="w-full bg-neutral-900/50 rounded-lg border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:bg-neutral-900 transition-all placeholder:text-neutral-600" placeholder="Pérez" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">WhatsApp</label>
              <input type="tel" className="w-full bg-neutral-900/50 rounded-lg border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:bg-neutral-900 transition-all placeholder:text-neutral-600" placeholder="+54 11 1234 5678" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Comentarios (Opcional)</label>
              <textarea className="w-full bg-neutral-900/50 rounded-lg border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:bg-neutral-900 transition-all placeholder:text-neutral-600 resize-none h-24" placeholder="Algún pedido especial..."></textarea>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6">
        <Link to="/booking/datetime" className="text-neutral-400 font-bold uppercase tracking-wider hover:text-white transition-colors">Volver</Link>
        <button 
          onClick={() => setIsConfirmed(true)}
          className="bg-gold-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center gap-2 uppercase tracking-wide"
        >
          <CheckCircle2 size={20} />
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
}
