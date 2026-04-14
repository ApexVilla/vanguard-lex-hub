import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-sans-body font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Soluciones legales con <span className="text-gold-gradient">transparencia</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-muted-foreground font-sans-body font-light text-lg leading-relaxed"
          >
            <p>
              <strong className="text-foreground font-medium">AP Despacho de Abogados</strong> es una firma legal venezolana fundada sobre los pilares de la confianza, la ética profesional y la comunicación abierta con cada cliente.
            </p>
            <p>
              Creemos que la excelencia jurídica no se trata solo de conocimiento técnico, sino de entender profundamente la situación de cada persona. Por eso, ofrecemos un enfoque estratégico y personalizado que va más allá de lo convencional.
            </p>
            <p>
              Nuestra misión es clara: ser aliados legales de nuestros clientes, brindando soluciones efectivas con total transparencia en cada etapa del proceso. Trabajamos con dedicación para que usted pueda tomar decisiones informadas con la seguridad de contar con un equipo comprometido a su lado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
          >
            {[
              { value: "Confianza", label: "Relaciones sólidas" },
              { value: "Transparencia", label: "Procesos claros" },
              { value: "Comunicación", label: "Siempre accesibles" },
              { value: "Estrategia", label: "Soluciones a medida" },
            ].map((item) => (
              <div key={item.value} className="glass-card rounded-lg p-5">
                <div className="text-lg font-bold text-primary mb-1">{item.value}</div>
                <div className="text-xs font-sans-body text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
