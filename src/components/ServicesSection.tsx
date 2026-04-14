import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Heart, Gavel, ShieldAlert, Briefcase, Leaf, Landmark } from "lucide-react";

const services = [
  { icon: Scale, title: "Derecho Civil", desc: "Contratos, propiedad, obligaciones y litigios civiles con soluciones efectivas y oportunas." },
  { icon: Heart, title: "Derecho de Familia", desc: "Custodia, divorcio, pensiones alimentarias y todo lo relacionado con el derecho familiar." },
  { icon: Gavel, title: "Derecho Penal", desc: "Defensa penal integral, garantizando sus derechos en cada etapa del proceso judicial." },
  { icon: ShieldAlert, title: "Violencia contra la Mujer", desc: "Protección legal especializada y acompañamiento en casos de violencia de género." },
  { icon: Briefcase, title: "Derecho Laboral", desc: "Defensa de los derechos del trabajador y asesoría a empresas en materia laboral." },
  { icon: Leaf, title: "Derecho Ambiental", desc: "Asesoría en normativa ambiental, regulaciones y protección del entorno natural." },
  { icon: Landmark, title: "Derecho Agrario", desc: "Resolución de conflictos agrarios, tenencia de tierras y regulaciones del sector." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-sans-body font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
            Áreas de Práctica
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nuestros <span className="text-gold-gradient">Servicios</span>
          </h2>
          <p className="text-muted-foreground font-sans-body font-light max-w-2xl mx-auto text-lg">
            Brindamos asesoría legal integral en las principales ramas del derecho venezolano.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-lg p-7 group hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-sans-body font-light text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
