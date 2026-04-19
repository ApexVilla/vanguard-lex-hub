import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutPrestige from "../assets/about-prestige.png";

const AboutSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const floatY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  return (
    <section id="nosotros" className="py-24 lg:py-48 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: floatY }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/5"
            >
              <motion.img 
                style={{ scale: 1.1, y: imageY }}
                src={aboutPrestige} 
                alt="Despacho de Prestigio" 
                className="w-full h-auto object-cover min-h-[500px] lg:min-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl border-l-4 border-l-primary"
              >
                <p className="text-white font-serif-display italic text-lg leading-relaxed">
                  "La verdadera justicia no solo reside en la ley, sino en la honra con la que se defiende cada causa."
                </p>
              </motion.div>
            </motion.div>
            
            {/* Decors */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gold-gradient/10 rounded-full blur-3xl" />
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7" ref={textRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] md:text-xs font-sans-body font-bold tracking-[0.4em] uppercase text-primary mb-6 block">
                Excelencia & Vanguarda
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-10 leading-tight text-slate-900">
                Nuestra <span className="text-gold-gradient italic font-serif-display font-medium">Honra</span> Profesional
              </h2>
              
              <div className="space-y-8 text-slate-600 font-sans-body font-light text-lg leading-relaxed max-w-2xl">
                <p>
                  Entendemos que el ejercicio del derecho no es solo una ocupación, sino un compromiso sagrado con la verdad y la dignidad de quienes confían en nuestro criterio.
                </p>
                <p>
                  Nuestra firma nace en Venezuela con una misión clara: elevar el estándar de la práctica legal a través de la transparencia absoluta y la vanguardia estratégica. No solo resolvemos casos; protegemos el patrimonio, la libertad y el futuro de nuestros aliados.
                </p>
                
                <div className="pt-8 border-t border-slate-200">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-900 mb-8">Pilares de Nuestra Cultura</h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      { title: "Honra Inquebrantable", desc: "Actuamos con una ética que no conoce de grises, priorizando siempre la verdad legal." },
                      { title: "Visión de Estratega", desc: "Cada movimiento legal es planeado para anticipar riesgos y asegurar el éxito." },
                      { title: "Compromiso Humano", desc: "Brindamos una atención cercana porque sabemos que detrás de cada expediente hay una vida." },
                      { title: "Resultados de Impacto", desc: "Nuestra reputación se construye con victorias éticas y soluciones definitivas." },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                        className="space-y-2 group"
                      >
                        <div className="h-0.5 w-6 bg-primary group-hover:w-12 transition-all duration-300" />
                        <h4 className="text-sm font-bold text-slate-900 font-serif-display tracking-wide">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed italic">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
