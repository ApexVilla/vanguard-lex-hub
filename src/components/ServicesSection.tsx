import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Scale, Heart, Gavel, ShieldAlert, Briefcase, Leaf, Landmark, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData, ServiceDetail } from "../data/servicesData";

const services = [
  { icon: Scale, title: "Derecho Civil", desc: "Resolución de conflictos sobre propiedad, contratos y obligaciones." },
  { icon: Heart, title: "Derecho de Familia", desc: "Estrategias discretas para casos de custodia, divorcios y patrimonio." },
  { icon: Gavel, title: "Derecho Penal", desc: "Defensa penal técnica, garantizando sus derechos procesales." },
  { icon: ShieldAlert, title: "Violencia de Género", desc: "Acompañamiento legal inmediato y protección especializada." },
  { icon: Briefcase, title: "Derecho Laboral", desc: "Asesoría corporativa y defensa de los derechos del trabajador." },
  { icon: Leaf, title: "Derecho Ambiental", desc: "Gestión de riesgos normativos y cumplimiento ambiental." },
  { icon: Landmark, title: "Derecho Agrario", desc: "Seguridad jurídica en tenencia de tierras y regulaciones del sector." },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const ref = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedService]);

  return (
    <section id="servicios" className="py-24 lg:py-40 bg-white relative overflow-hidden" ref={ref}>
      <motion.div style={{ y: sectionY }} className="container mx-auto px-4 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8" ref={titleRef}>
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={isTitleInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary mb-6 block"
            >
              Áreas de Práctica
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-slate-900"
            >
              Experticia{" "}
              <span className="font-cormorant italic text-gold-gradient font-light pr-2">integral</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:max-w-xs"
          >
            <p className="text-sm text-slate-600 font-sans-body font-light leading-relaxed">
              Abordamos cada especialidad con el máximo rigor técnico para proteger sus intereses en las principales ramas del derecho venezolano.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const isOffset = i % 2 !== 0;
            const hasDetails = !!servicesData[service.title];
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-navy/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 group transition-all duration-500 hover:border-primary/60 relative overflow-hidden flex flex-col shadow-[0_40px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_40px_hsl(var(--gold)/0.15)] noise-overlay gradient-border-card ${isOffset ? "lg:translate-y-8" : ""}`}
                whileHover={{ y: isOffset ? 26 : -6, scale: 1.02 }}
              >
                {/* Internal glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Article number */}
                <div className="opinion-number absolute top-4 right-5 text-7xl">{num}</div>

                {/* Icon */}
                <div className="w-12 h-12 mb-8 relative z-10">
                  <div className="absolute inset-0 bg-primary/10 rounded-sm rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight font-serif-display group-hover:text-primary transition-colors text-white relative z-10">
                  {service.title}
                </h3>
                <p className="text-white/60 font-sans-body font-light leading-relaxed text-sm mb-6 flex-grow relative z-10">
                  {service.desc}
                </p>

                {hasDetails && (
                  <button
                    onClick={() => setSelectedService(servicesData[service.title])}
                    className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-primary group/btn w-fit relative z-10"
                  >
                    Ver detalles
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden glass-card rounded-2xl shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-border/50 flex items-center justify-between sticky top-0 bg-background/50 backdrop-blur-xl z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <selectedService.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-serif-display tracking-tight text-foreground">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors border border-border/50 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 overflow-y-auto">
                <div className="max-w-3xl mx-auto space-y-12">
                  <div className="space-y-4">
                    <p className="text-lg font-cormorant font-light text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-6">
                      "{selectedService.intro}"
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/20 pb-2">
                        {selectedService.solutions.title}
                      </h4>
                      <ul className="space-y-4">
                        {selectedService.solutions.items.map((item, idx) => (
                          <li key={idx} className="flex gap-4 group/item">
                            <div className="mt-1 flex-shrink-0">
                              <CheckCircle2 className="w-4 h-4 text-primary opacity-40 group-hover/item:opacity-100 transition-opacity" strokeWidth={2} />
                            </div>
                            <span className="text-sm font-sans-body font-light text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/20 pb-2">
                        {selectedService.whyChooseUs.title}
                      </h4>
                      <ul className="space-y-5">
                        {selectedService.whyChooseUs.items.map((item, idx) => (
                          <li key={idx} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300">
                            <div className="w-1 h-1 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span className="text-sm font-sans-body font-medium text-foreground/80 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border/50 bg-background/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[10px] font-sans-body text-muted-foreground uppercase tracking-widest">
                  Protegiendo sus derechos en Venezuela
                </p>
                <a
                  href="#contacto"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-sans-body font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 text-center rounded-sm"
                >
                  Consultar sobre este área
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
