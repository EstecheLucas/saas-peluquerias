import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header if scrolling down and past the top area. Show if scrolling up.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderVisible(false);
        // Also close mobile menu if scrolling down
        if (isMenuOpen) setIsMenuOpen(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 flex flex-col font-sans">
      <header className={`fixed w-full bg-black/10 backdrop-blur-md border-b border-white/5 top-0 z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity group flex-shrink-0">
              <img src="/LOGO.png" alt="Mi Rey Barbershop" className="h-16 w-auto object-contain" />
            </Link>
            
            <div className="hidden lg:flex items-center justify-end flex-1 gap-8 xl:gap-10 ml-8">
              <nav className="flex gap-6 xl:gap-8">
                <Link to="/" className="text-[10px] font-bold text-neutral-300 hover:text-white transition-colors tracking-[0.15em] uppercase">Inicio</Link>
                <Link to="/servicios" className="text-[10px] font-bold text-neutral-300 hover:text-white transition-colors tracking-[0.15em] uppercase">Servicios</Link>
                <Link to="/booking" className="text-[10px] font-bold text-neutral-300 hover:text-white transition-colors tracking-[0.15em] uppercase">Reservar</Link>
                <Link to="/galeria" className="text-[10px] font-bold text-neutral-300 hover:text-white transition-colors tracking-[0.15em] uppercase">Galería</Link>
                <Link to="/contacto" className="text-[10px] font-bold text-neutral-300 hover:text-white transition-colors tracking-[0.15em] uppercase">Contacto</Link>
              </nav>

              <div className="flex items-center pl-4">
                <Link 
                  to="/panel" 
                  className="bg-gold-500 text-black px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-gold-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)] uppercase tracking-wide"
                >
                  Mi Panel
                </Link>
              </div>
            </div>

            <div className="flex lg:hidden items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white hover:text-gold-500 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-300 ease-in-out border-t border-white/10 ${isMenuOpen ? 'block bg-[#0a0a0a]/95 backdrop-blur-xl' : 'hidden'}`}>
          <div className="px-4 pt-4 pb-8 space-y-4">
            <Link onClick={() => setIsMenuOpen(false)} to="/" className="block text-sm font-bold text-white hover:text-gold-500 transition-colors tracking-[0.15em] uppercase py-3 border-b border-white/5">Inicio</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/servicios" className="block text-sm font-bold text-white hover:text-gold-500 transition-colors tracking-[0.15em] uppercase py-3 border-b border-white/5">Servicios</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/booking" className="block text-sm font-bold text-white hover:text-gold-500 transition-colors tracking-[0.15em] uppercase py-3 border-b border-white/5">Reservar</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/galeria" className="block text-sm font-bold text-white hover:text-gold-500 transition-colors tracking-[0.15em] uppercase py-3 border-b border-white/5">Galería</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/contacto" className="block text-sm font-bold text-white hover:text-gold-500 transition-colors tracking-[0.15em] uppercase py-3 border-b border-white/5">Contacto</Link>
            
            <div className="pt-4">
              <Link 
                onClick={() => setIsMenuOpen(false)}
                to="/panel" 
                className="block text-center bg-gold-500 text-black px-6 py-4 rounded-lg text-sm font-bold hover:bg-gold-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)] uppercase tracking-wide"
              >
                Mi Panel
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full relative">
        {isHome ? (
          <Outlet />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-[#111]/50 to-transparent pointer-events-none" />
            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-12 relative z-10">
              <Outlet />
            </div>
          </>
        )}
      </main>

      <footer className="bg-[#0a0a0a] border-t border-neutral-800 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-bold text-xl tracking-widest uppercase text-white">Mi Rey</span>
              <span className="text-[10px] tracking-[0.2em] text-gold-500 uppercase">Barbershop</span>
            </div>
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Mi Rey Barbershop. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
