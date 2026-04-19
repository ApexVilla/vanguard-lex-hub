import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award, Shield, Gavel } from "lucide-react";
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
    <section id="fundador" className="py-24 lg:py-40 bg-navy relative overflow-hidden" ref={ref}>
      {/* Decorative background elements for dark theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* 3D Depth Decoration Layers */}
            <div className="absolute -inset-8 bg-primary/10 blur-[80px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
            
            {/* Floating Golden Angles - Parallax Effect */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border-t-[4px] border-r-[4px] border-primary/40 rounded-tr-[40px] transition-all duration-1000 group-hover:-top-16 group-hover:-right-16 group-hover:border-primary/60" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border-b-[4px] border-l-[4px] border-primary/40 rounded-bl-[40px] transition-all duration-1000 group-hover:-bottom-16 group-hover:-left-16 group-hover:border-primary/60" />

            <div className="relative overflow-hidden rounded-2xl p-4 bg-white/5 backdrop-blur-md shadow-[0_40px_100px_rgba(0,0,0,0.6)] group-hover:shadow-[0_60px_120px_rgba(30,60,50,0.6)] transition-all duration-1000 perspective-1000">
              <motion.div 
                className="relative overflow-hidden rounded-xl border border-white/10"
                whileHover={{ 
                  rotateY: -5, 
                  rotateX: 3, 
                  scale: 1.05 
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* 3D Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20 pointer-events-none" />
                
                <div className="relative overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.2, filter: "brightness(0.9) contrast(1.1)" }}
                    animate={inView ? { scale: 1, filter: "brightness(1) contrast(1)" } : {}}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    src={founderImg}
                    alt="Abg. Ángel Pérez"
                    className="w-full aspect-[4/5] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Internal Depth Shadows */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent z-10" />
                </div>
              </motion.div>

              {/* Floating ID Overlay */}
              <div className="absolute bottom-10 left-10 z-30 transition-all duration-700 group-hover:translate-x-4">
                <div className="bg-primary/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl mb-2">
                  Director Fundador
                </div>
                <h3 className="text-3xl font-serif-display text-white drop-shadow-2xl">Abg. Ángel Pérez</h3>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <span className="text-[11px] md:text-xs font-sans-body font-bold tracking-[0.4em] uppercase text-primary mb-6 block">
              Nuestro Fundador
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-4 leading-tight text-white font-serif-display tracking-tight">
              Abg. Ángel <span className="text-gold-gradient italic font-serif-display font-medium pr-2">Pérez</span>
            </h2>
            <div className="mb-10 pb-8 border-b border-white/10 w-full">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary">
                Director del Despacho
              </span>
            </div>
            
            <div className="space-y-12">
              <p className="text-white/80 font-sans-body font-light text-xl leading-relaxed max-w-2xl">
                Con una sólida formación académica y amplia experiencia en el ejercicio del derecho, el Abg. Ángel Pérez lidera AP Despacho de Abogados con una visión clara: ofrecer representación legal de excelencia, combinando rigor técnico con ética y dedicación total a cada cliente.
              </p>
              
              <div className="space-y-6">
                {credentials.map((cred, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500">
                      <cred.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-white/80 font-sans-body font-light text-lg group-hover:text-white transition-colors">
                      {cred.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
