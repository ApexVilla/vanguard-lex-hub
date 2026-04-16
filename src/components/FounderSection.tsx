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
    <section id="fundador" className="py-24 lg:py-40" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            animate={inView ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden gold-border-glow group">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                src={founderImg}
                alt="Abg. Ángel Pérez"
                className="w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative minimalist elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/30 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary mb-6 block">
              Nuestro Fundador
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif-display tracking-tight">
              Abg. Ángel <span className="text-gold-gradient italic pr-2">Pérez</span>
            </h2>
            <p className="text-muted-foreground font-sans-body tracking-[0.2em] font-medium text-xs uppercase mb-10 pb-6 border-b border-border/40 inline-block">
              Director del Despacho
            </p>
            <p className="text-foreground/80 font-sans-body font-light text-lg leading-relaxed mb-12">
              Con una sólida formación académica y amplia experiencia en el ejercicio del derecho, el Abg. Ángel Pérez lidera AP Despacho de Abogados con una visión clara: ofrecer representación legal de excelencia, combinando rigor técnico con ética y dedicación total a cada cliente.
            </p>

            <div className="space-y-6">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 border border-primary/20 rounded-full group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-500">
                    <cred.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-sans-body font-light tracking-wide text-foreground/90 group-hover:text-primary transition-colors duration-500">{cred.text}</span>
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
