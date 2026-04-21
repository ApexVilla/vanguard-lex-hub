import { Instagram, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/abg.angelperez?igsh=MXZ4eTl1aW93dXo3bQ==",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@abg.angelperez?_t=8nsOkaAfmOT&_r=1",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.72.5-.99 1.43-1.09 2.26-.13 1.27.31 2.53 1.29 3.29.96.8 2.33 1.06 3.54.69 1.07-.31 1.93-1.2 2.15-2.29.09-.64.1-.11.1-6.14V.02z"/>
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@abg.angelperez",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
      </svg>
    ),
  },
];

const navColumns = [
  {
    title: "Navegación",
    items: [
      { label: "Inicio", href: "/#inicio" },
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Opiniones", href: "/opiniones", external: false },
      { label: "Contacto", href: "/#contacto" },
    ],
  },
  {
    title: "Especialidades",
    items: [
      { label: "Derecho Civil", href: "/#servicios" },
      { label: "Derecho de Familia", href: "/#servicios" },
      { label: "Derecho Penal", href: "/#servicios" },
      { label: "Derecho Laboral", href: "/#servicios" },
      { label: "Violencia de Género", href: "/#servicios" },
    ],
  },
];

const Footer = () => (
  <footer className="pt-24 pb-12 border-t border-white/5 bg-background relative overflow-hidden">
    {/* Animated gold top border */}
    <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </div>

    {/* Background subtle gradient */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-8">
          <Link to="/" className="group flex items-center gap-6">
            <motion.img
              whileHover={{ scale: 1.04 }}
              src="/logo.png"
              alt="Despacho de Abogados AP"
              className="h-28 w-auto object-contain transition-all duration-700"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-serif-display font-bold text-gold-gradient tracking-tight leading-none uppercase">
                ÁNGEL PÉREZ
              </span>
              <span className="text-[10px] font-sans-body font-bold text-white/40 tracking-[0.4em] uppercase mt-2">
                Despacho de Abogados
              </span>
            </div>
          </Link>
          <div className="space-y-4 max-w-sm">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Justicia &amp; Honor</h4>
            <p className="text-sm text-muted-foreground/60 font-sans-body font-light leading-relaxed font-cormorant italic text-base">
              "Defendemos sus intereses con la vanguardia estratégica y el compromiso ético que cada caso merece."
            </p>
          </div>
        </div>

        {/* Nav columns */}
        {navColumns.map((col, colIdx) => (
          <div key={colIdx} className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-foreground/40 border-b border-white/5 pb-2 w-fit">
              {col.title}
            </h4>
            <ul className="space-y-4">
              {col.items.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={item.href}
                    className="text-xs font-sans-body font-light text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group animated-underline"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300 origin-left" />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact & Social Column */}
        <div className="lg:col-span-4 space-y-8">
          <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-foreground/40 border-b border-white/5 pb-2 w-fit">
            Conexión Legal
          </h4>
          <div className="space-y-6">
            <div className="space-y-3">
              <a href="tel:04245619862" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                  <Phone size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-sans-body text-muted-foreground group-hover:text-foreground transition-colors">
                  0424-5619862
                </span>
              </a>
              <a href="mailto:contacto@despachodeabogadosap.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                  <Mail size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-sans-body text-muted-foreground group-hover:text-foreground transition-colors break-all">
                  contacto@despachodeabogadosap.com
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4 border-t border-white/5">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 group transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[9px] font-sans-body tracking-[0.2em] uppercase text-foreground/30 text-center md:text-left">
          © {new Date().getFullYear()} AP Abogados &amp; Asociados. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-[9px] font-sans-body tracking-[0.2em] uppercase text-foreground/30 hover:text-primary transition-colors animated-underline">
            Privacidad
          </a>
          <a href="#" className="text-[9px] font-sans-body tracking-[0.2em] uppercase text-foreground/30 hover:text-primary transition-colors animated-underline">
            Términos
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
