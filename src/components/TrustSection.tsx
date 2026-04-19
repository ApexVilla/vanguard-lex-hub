import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award, Gavel } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Honra Inquebrantable",
    description: "Actuamos con una ética que no conoce de grises, priorizando siempre la verdad legal.",
  },
  {
    icon: Gavel,
    title: "Visión de Estratega",
    description: "Cada movimiento legal es planeado para anticipar riesgos y asegurar el éxito.",
  },
  {
    icon: Users,
    title: "Compromiso Humano",
    description: "Brindamos una atención cercana porque sabemos que detrás de cada expediente hay una vida.",
  },
  {
    icon: Award,
    title: "Resultados de Impacto",
    description: "Nuestra reputación se construye con victorias éticas y soluciones definitivas.",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-white relative" ref={ref}>
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
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium mb-8 font-serif-display tracking-tight text-slate-900">
            Pilares de Nuestra <span className="text-gold-gradient italic pr-2">Cultura</span>
          </h2>
          <p className="text-slate-600 font-sans-body font-light text-lg md:text-xl leading-relaxed">
            Entendemos que el ejercicio del derecho no es solo una ocupación, sino un compromiso sagrado con la verdad y la dignidad de quienes confían en nuestro criterio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col h-full group"
            >
              <div className="flex-grow p-8 rounded-2xl bg-navy/90 backdrop-blur-xl border border-primary/20 hover:border-primary/60 transition-all duration-700 h-full flex flex-col shadow-[0_40px_80px_rgba(0,0,0,0.7)] group-hover:shadow-primary/40 relative overflow-hidden group">
                {/* Internal Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                <div className="w-14 h-14 mb-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 font-serif-display text-white group-hover:text-primary transition-colors duration-500">{pillar.title}</h3>
                
                <p className="text-white/70 font-sans-body font-light leading-relaxed text-sm italic">
                  "{pillar.description}"
                </p>

                {/* Subtle glow corner */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
