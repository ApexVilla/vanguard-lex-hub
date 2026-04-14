const Footer = () => (
  <footer className="py-12 border-t border-border/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#inicio" className="flex items-center gap-2">
            <img 
              src="/logo.jpeg" 
              alt="Vanguard Lex Hub Logo" 
              className="h-14 md:h-16 w-auto object-contain rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
        <p className="text-xs font-sans-body text-muted-foreground text-center">
          © {new Date().getFullYear()} AP Despacho de Abogados. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          {["Inicio", "Servicios", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-sans-body text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
