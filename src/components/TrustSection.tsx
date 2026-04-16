import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Experiencia",
    description: "Años de trayectoria resolviendo casos complejos con resultados comprobados en diversas áreas del derecho.",
  },
  {
    icon: Shield,
    title: "Compromiso",
    description: "Cada caso recibe nuestra total dedicación. Luchamos incansablemente por los intereses de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Entendemos que cada situación es única. Diseñamos estrategias legales a la medida de sus necesidades.",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-secondary/20 relative" ref={ref}>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary mb-6 block">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif-display tracking-tight">
            La confianza que usted <span className="text-gold-gradient italic pr-2">merece</span>
          </h2>
          <p className="text-muted-foreground font-sans-body font-light text-lg md:text-xl leading-relaxed">
            En AP Despacho de Abogados, cada cliente es nuestra prioridad. Combinamos conocimiento jurídico de élite con un trato excepcionalmente cercano.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Subtle connecting line behind cards */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />

          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-8 rounded-full bg-background border border-border/40 flex items-center justify-center shadow-2xl group-hover:border-primary/50 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <pillar.icon className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,190,50,0.5)] transition-all duration-500" strokeWidth={1.2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif-display">{pillar.title}</h3>
              <p className="text-muted-foreground font-sans-body font-light leading-relaxed text-sm max-w-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
