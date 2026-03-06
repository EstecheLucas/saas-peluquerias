import { Calendar, Clock, DollarSign, Users, Scissors, TrendingUp, MoreVertical, Copy } from "lucide-react";
import { useState } from "react";

const todayAppointments = [
  { id: "1029", client: "Martín López", service: "Corte Clásico", time: "10:00", duration: "30 min", price: "$8.000", status: "completado", professional: "Valentino" },
  { id: "1030", client: "Ezequiel Gómez", service: "Corte + Barba", time: "11:30", duration: "45 min", price: "$12.000", status: "pendiente", professional: "Valentino" },
  { id: "1031", client: "Lucas Silva", service: "Coloración comp.", time: "14:00", duration: "90 min", price: "$25.000", status: "pendiente", professional: "Valentino" },
  { id: "1032", client: "Fernando Rossi", service: "Corte Clásico", time: "16:00", duration: "30 min", price: "$8.000", status: "pendiente", professional: "Valentino" },
  { id: "1033", client: "Julián Paz", service: "Ritual de Barba", time: "17:30", duration: "30 min", price: "$6.000", status: "pendiente", professional: "Valentino" },
];

export default function Dashboard() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-neutral-800 pb-6 mt-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-wide uppercase font-serif">Panel de Control</h1>
          <p className="text-neutral-400 mt-1">Bienvenido de nuevo. Aquí tienes un resumen de tu jornada.</p>
        </div>
        <div className="flex bg-neutral-900 border border-neutral-800 rounded-lg p-1">
          <button className="px-4 py-1.5 text-sm font-bold bg-neutral-800 text-white rounded shadow-sm">Hoy</button>
          <button className="px-4 py-1.5 text-sm font-bold text-neutral-400 hover:text-white transition-colors">Semana</button>
          <button className="px-4 py-1.5 text-sm font-bold text-neutral-400 hover:text-white transition-colors">Mes</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#111] border border-neutral-800 rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <DollarSign size={80} className="text-gold-500 -mr-4 -mt-4 transform rotate-12" />
          </div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-neutral-400">
               <DollarSign size={18} className="text-gold-500" />
               <h3 className="text-xs font-bold uppercase tracking-wider">Ingresos Hoy</h3>
            </div>
            <div>
               <p className="text-3xl font-bold text-white">$59.000</p>
               <div className="flex items-center gap-1 text-green-500 text-xs mt-1 font-semibold">
                 <TrendingUp size={14} />
                 <span>+12% vs ayer</span>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111] border border-neutral-800 rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <Calendar size={80} className="text-gold-500 -mr-4 -mt-4 transform rotate-12" />
          </div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-neutral-400">
               <Calendar size={18} className="text-gold-500" />
               <h3 className="text-xs font-bold uppercase tracking-wider">Turnos Hoy</h3>
            </div>
            <div>
               <p className="text-3xl font-bold text-white">5</p>
               <div className="flex items-center gap-1 text-neutral-500 text-xs mt-1 font-semibold">
                 <span>1 completado / 4 pendientes</span>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111] border border-neutral-800 rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <Users size={80} className="text-gold-500 -mr-4 -mt-4 transform rotate-12" />
          </div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-neutral-400">
               <Users size={18} className="text-gold-500" />
               <h3 className="text-xs font-bold uppercase tracking-wider">Nuevos Clientes</h3>
            </div>
            <div>
               <p className="text-3xl font-bold text-white">2</p>
               <div className="flex items-center gap-1 text-green-500 text-xs mt-1 font-semibold">
                 <TrendingUp size={14} />
                 <span>+2 este mes</span>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-gold-500 rounded-xl p-6 relative overflow-hidden group shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col justify-center">
          <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
             <Scissors size={120} className="text-black transform -rotate-12" />
          </div>
          <div className="relative z-10">
            <h3 className="text-black font-bold text-lg uppercase tracking-wider mb-1">Próximo Turno</h3>
            <p className="text-black/80 font-bold mb-4">Ezequiel G. — 11:30hs</p>
            <button className="bg-black text-gold-500 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-neutral-900 transition-colors">
              Iniciar Servicio
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Clock size={20} className="text-gold-500" />
              Agenda del Día
            </h2>
            <button className="text-gold-500 text-sm font-bold hover:underline">Ver Calendario Completo</button>
          </div>

          <div className="bg-[#111] border border-neutral-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 text-xs uppercase tracking-wider text-neutral-500 bg-neutral-900/50">
                    <th className="p-4 font-bold">Hora</th>
                    <th className="p-4 font-bold">Cliente</th>
                    <th className="p-4 font-bold">Servicio</th>
                    <th className="p-4 font-bold">ID Turno</th>
                    <th className="p-4 font-bold text-right">Estado</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {todayAppointments.map((app) => (
                    <tr key={app.id} className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors group">
                      <td className="p-4 text-white font-bold">{app.time}</td>
                      <td className="p-4">
                        <div className="font-bold text-white">{app.client}</div>
                        <div className="text-neutral-500 text-xs hidden sm:block">Nuevo cliente</div>
                      </td>
                      <td className="p-4">
                        <div className="text-neutral-300 font-medium">{app.service}</div>
                        <div className="text-gold-500/80 text-xs font-bold">{app.duration} • {app.price}</div>
                      </td>
                      <td className="p-4">
                        <button 
                          onClick={() => handleCopyId(app.id)}
                          className="flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          title="Copiar ID"
                        >
                          <span className="font-mono text-xs">#{app.id}</span>
                          <Copy size={12} className={copiedId === app.id ? "text-green-500" : ""} />
                        </button>
                      </td>
                      <td className="p-4 text-right">
                        <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          app.status === 'completado' 
                            ? 'bg-neutral-900 text-neutral-500 border border-neutral-800' 
                            : 'bg-gold-500/10 text-gold-500 border border-gold-500/20'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-neutral-500 opacity-0 group-hover:opacity-100 hover:text-white transition-all">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {todayAppointments.length === 0 && (
              <div className="p-8 text-center text-neutral-500">
                <p>No hay turnos agendados para este día.</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#111] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-4">Acciones Rápidas</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg border border-neutral-700 hover:border-gold-500 hover:bg-gold-500/5 text-white font-medium transition-colors flex justify-between items-center group">
                Añadir Turno Manual
                <span className="text-neutral-500 group-hover:text-gold-500">+</span>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg border border-neutral-700 hover:border-gold-500 hover:bg-gold-500/5 text-white font-medium transition-colors flex justify-between items-center group">
                Bloquear Horario
                <span className="text-neutral-500 group-hover:text-gold-500">🔒</span>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg border border-neutral-700 hover:border-gold-500 hover:bg-gold-500/5 text-white font-medium transition-colors flex justify-between items-center group">
                Historial de Clientes
                <span className="text-neutral-500 group-hover:text-gold-500">→</span>
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-900 to-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">Soporte Mi Rey</h2>
            <p className="text-sm text-neutral-500 mb-4">¿Necesitas ayuda configurando tu perfil o gestionando pagos?</p>
            <button className="text-white text-sm font-bold underline decoration-neutral-600 hover:decoration-white underline-offset-4 transition-colors">
              Contactar Soporte
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
