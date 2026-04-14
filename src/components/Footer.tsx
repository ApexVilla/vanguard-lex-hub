const Footer = () => (
  <footer className="py-12 border-t border-border/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif-display text-lg font-bold">
            <span className="text-gold-gradient">AP</span>
            <span className="text-foreground ml-2 text-xs font-sans-body font-light tracking-widest uppercase">
              Despacho de Abogados
            </span>
          </span>
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
