import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const credentials = [
  { icon: GraduationCap, text: "Abogado egresado de la Universidad Santa María" },
  { icon: Award, text: "Especialista en Derecho Procesal Penal" },
  { icon: Award, text: "Especialista en Derecho Agrario y Ambiental" },
  { icon: BookOpen, text: "Maestría en Docencia Universitaria (en curso)" },
];

const FounderSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fundador" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden gold-border-glow">
              <img
                src={founderImg}
                alt="Abg. Ángel Pérez"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-sans-body font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
              Nuestro Fundador
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Abg. Ángel <span className="text-gold-gradient">Pérez</span>
            </h2>
            <p className="text-primary font-sans-body font-medium text-sm tracking-wide uppercase mb-6">
              Director del Despacho
            </p>
            <p className="text-muted-foreground font-sans-body font-light text-lg leading-relaxed mb-8">
              Con una sólida formación académica y amplia experiencia en el ejercicio del derecho, el Abg. Ángel Pérez lidera AP Despacho de Abogados con una visión clara: ofrecer representación legal de excelencia, con ética y dedicación total a cada cliente.
            </p>

            <div className="space-y-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 glass-card rounded-lg p-4 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-sans-body font-medium text-foreground/90">{cred.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
