export default function BarberPoleLoader({ fadeOut = false }: { fadeOut?: boolean }) {
  return (
    <div className={`fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <style>{`
        @keyframes pole-spin {
          0% { background-position: 0 0; }
          100% { background-position: 0 160px; }
        }
        .animate-pole {
          animation: pole-spin 1s linear infinite;
        }
      `}</style>
      
      <div className="flex flex-col items-center justify-center transform scale-[0.65] relative group">
        
        <div className="absolute w-[140px] h-[300px] bg-white/10 blur-[40px] rounded-full animate-pulse z-[-1]"></div>
        <div className="absolute w-[200px] h-[380px] bg-gold-400/10 blur-[60px] rounded-full animate-pulse z-[-1] delay-75"></div>

        <div className="flex flex-col items-center z-10 filter drop-shadow-2xl">
          <div className="w-16 h-8 bg-gold-500 rounded-t-[2rem] border-[3px] border-neutral-900 relative overflow-hidden">
            <div className="absolute top-1 left-2 w-5 h-3 bg-white/40 rounded-full blur-[2px] transform -rotate-12"></div>
            <div className="absolute inset-0 shadow-[inset_-8px_0_10px_rgba(0,0,0,0.3)] pointer-events-none"></div>
          </div>
          <div className="w-20 h-4 bg-gold-500 rounded-sm border-[3px] border-neutral-900 -mt-1 relative overflow-hidden z-10">
            <div className="absolute top-0 left-2 w-12 h-1.5 bg-white/30 rounded-full blur-[1px]"></div>
            <div className="absolute inset-0 shadow-[inset_-10px_0_10px_rgba(0,0,0,0.4)] pointer-events-none"></div>
          </div>
          <div className="w-24 h-7 bg-gold-500 rounded-xl border-[3px] border-neutral-900 -mt-1 relative overflow-hidden z-20 shadow-md">
             <div className="absolute top-1 left-3 w-12 h-2 bg-white/40 rounded-full blur-[1px]"></div>
             <div className="absolute inset-0 shadow-[inset_-12px_0_10px_rgba(0,0,0,0.4)] pointer-events-none"></div>
          </div>
        </div>
        
        <div className="relative w-[72px] h-48 bg-white border-x-[3px] border-neutral-900 overflow-hidden flex-shrink-0 -mt-1 -mb-1 z-0 shadow-2xl">
          <div 
            className="absolute inset-0 w-full h-[300%] animate-pole" 
            style={{
              backgroundImage: "repeating-linear-gradient(-35deg, #ffffff, #ffffff 18px, #e60000 18px, #e60000 36px, #ffffff 36px, #ffffff 54px, #0033cc 54px, #0033cc 72px)",
              backgroundSize: "100% 160px"
            }}
          />
          <div className="absolute inset-0 shadow-[inset_14px_0_16px_rgba(0,0,0,0.5),inset_-14px_0_16px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          <div className="absolute inset-y-0 left-3 w-2.5 bg-white/60 pointer-events-none blur-[1px]"></div>
          <div className="absolute inset-y-0 right-4 w-1 bg-white/30 pointer-events-none blur-[0.5px]"></div>
          
          <div className="absolute inset-0 border-x-2 border-white/40 pointer-events-none"></div>
        </div>
        
        <div className="flex flex-col items-center z-10 filter drop-shadow-2xl">
          <div className="w-24 h-7 bg-gold-500 rounded-xl border-[3px] border-neutral-900 relative overflow-hidden z-20">
             <div className="absolute bottom-1 left-3 w-12 h-2 bg-white/40 rounded-full blur-[1px]"></div>
             <div className="absolute inset-0 shadow-[inset_-12px_0_10px_rgba(0,0,0,0.4)] pointer-events-none"></div>
          </div>
          <div className="w-20 h-4 bg-gold-500 rounded-sm border-[3px] border-neutral-900 -mt-1 relative z-10">
             <div className="absolute bottom-0 left-2 w-12 h-1.5 bg-white/30 rounded-full blur-[1px]"></div>
             <div className="absolute inset-0 shadow-[inset_-10px_0_10px_rgba(0,0,0,0.4)] pointer-events-none"></div>
          </div>
          <div className="w-16 h-8 bg-gold-500 rounded-b-[2rem] border-[3px] border-neutral-900 -mt-1 relative overflow-hidden box-border">
            <div className="absolute bottom-1 right-2 w-5 h-3 bg-white/40 rounded-full blur-[2px] transform rotate-12"></div>
            <div className="absolute inset-0 shadow-[inset_-8px_0_10px_rgba(0,0,0,0.3)] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
