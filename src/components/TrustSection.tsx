import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
    <section className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-sans-body font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            La confianza que usted <span className="text-gold-gradient">merece</span>
          </h2>
          <p className="text-muted-foreground font-sans-body font-light max-w-2xl mx-auto text-lg">
            En AP Despacho de Abogados, cada cliente es nuestra prioridad. Combinamos conocimiento jurídico con un trato humano y cercano.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-lg p-8 lg:p-10 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground font-sans-body font-light leading-relaxed text-sm">
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
