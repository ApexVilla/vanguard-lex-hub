import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Opiniones", href: "/opiniones" },
  { label: "Fundador", href: "/#fundador" },
  { label: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-full">
        <Link 
          to="/" 
          onClick={() => handleNavClick("/")}
          className="flex items-center h-full overflow-hidden"
        >
          <img 
            src="/logo.jpeg" 
            alt="Despacho de Abogados AP" 
            className="h-full w-auto object-contain transition-all duration-500 scale-[1.3] origin-center"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-sans-body font-medium transition-colors duration-300 tracking-wide uppercase ${
                  (location.pathname === item.href || (item.href === "/" && location.pathname === "/"))
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contacto"
              onClick={() => handleNavClick("/#contacto")}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-sm text-sm font-sans-body font-semibold tracking-wide uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Asesoría
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-base font-sans-body text-foreground tracking-wide uppercase"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/#contacto"
                  onClick={() => handleNavClick("/#contacto")}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm font-sans-body font-semibold tracking-wide uppercase"
                >
                  Solicitar Asesoría
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
