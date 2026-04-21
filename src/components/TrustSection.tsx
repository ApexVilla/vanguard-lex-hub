import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Users, Award, Gavel, TrendingUp } from "lucide-react";

/* ── Animated Counter ── */
const useCounter = (end: number, duration = 2.5, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(Math.floor((duration * 1000) / end), 16);
    const inc = Math.ceil(end / (duration * 1000 / step));
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, step);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
};

const pillars = [
  {
    icon: Shield,
    number: "01",
    title: "Honra Inquebrantable",
    description: "Actuamos con una ética que no conoce de grises, priorizando siempre la verdad legal.",
    stat: { value: 100, suffix: "%", label: "Transparencia" },
  },
  {
    icon: Gavel,
    number: "02",
    title: "Visión de Estratega",
    description: "Cada movimiento legal es planeado para anticipar riesgos y asegurar el éxito.",
    stat: { value: 15, suffix: "+", label: "Años de Práctica" },
  },
  {
    icon: Users,
    number: "03",
    title: "Compromiso Humano",
    description: "Brindamos una atención cercana porque sabemos que detrás de cada expediente hay una vida.",
    stat: { value: 500, suffix: "+", label: "Familias Ayudadas" },
  },
  {
    icon: Award,
    number: "04",
    title: "Resultados de Impacto",
    description: "Nuestra reputación se construye con victorias éticas y soluciones definitivas.",
    stat: { value: 98, suffix: "%", label: "Satisfacción" },
  },
];

const StatPill = ({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) => {
  const count = useCounter(value, 2, inView);
  return (
    <div className="mt-6 pt-5 border-t border-white/10">
      <div className="flex items-end gap-1">
        <span className="font-cormorant text-3xl font-light text-gold-gradient stat-number leading-none">{count}{suffix}</span>
      </div>
      <p className="text-[9px] uppercase tracking-[0.25em] text-white/30 mt-1 font-sans-body font-bold">{label}</p>
    </div>
  );
};

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-white relative" ref={ref}>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

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
            Pilares de Nuestra{" "}
            <span className="text-gold-gradient italic font-cormorant font-normal pr-2">Cultura</span>
          </h2>
          <p className="text-slate-600 font-sans-body font-light text-lg md:text-xl leading-relaxed">
            Entendemos que el ejercicio del derecho no es solo una ocupación, sino un compromiso sagrado
            con la verdad y la dignidad de quienes confían en nuestro criterio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col h-full group gradient-border-card"
            >
              <div className="flex-grow p-8 rounded-2xl bg-navy/90 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all duration-700 h-full flex flex-col shadow-[0_40px_80px_rgba(0,0,0,0.7)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_40px_hsl(var(--gold)/0.15)] relative overflow-hidden noise-overlay">
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                {/* Number */}
                <div className="absolute top-6 right-6 opinion-number text-6xl">{pillar.number}</div>

                {/* Icon */}
                <div className="w-14 h-14 mb-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 relative z-10 shadow-xl">
                  <pillar.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold mb-4 font-serif-display text-white group-hover:text-primary transition-colors duration-500 relative z-10">
                  {pillar.title}
                </h3>

                <p className="text-white/70 font-sans-body font-light leading-relaxed text-sm relative z-10 flex-grow">
                  {pillar.description}
                </p>

                <StatPill {...pillar.stat} inView={inView} />

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
