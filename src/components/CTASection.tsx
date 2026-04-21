import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Contáctenos",
    desc: "Envíe su consulta vía WhatsApp o formulario. Respuesta en menos de 2 horas.",
  },
  {
    number: "02",
    title: "Evaluación Inicial",
    desc: "Analizamos su caso en detalle y le presentamos una estrategia clara y honesta.",
  },
  {
    number: "03",
    title: "Actuación Legal",
    desc: "Comenzamos la acción legal con total dedicación y comunicación permanente.",
  },
];

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Aurora Animated Background */}
      <div className="absolute inset-0 bg-navy">
        <div className="aurora-blob-1 absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/20 blur-[100px] rounded-full" />
        <div className="aurora-blob-2 absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-gold/10 blur-[120px] rounded-full" style={{ "--tw-bg-opacity": "1" } as React.CSSProperties} />
        <div className="aurora-blob-3 absolute top-[30%] right-[20%] w-[30vw] h-[30vw] bg-primary/10 blur-[80px] rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary mb-6 block">
            Nuestro Proceso
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-medium mb-6 text-white leading-tight">
            ¿Cómo{" "}
            <span className="font-cormorant italic text-gold-gradient font-light">trabajamos?</span>
          </h2>
          <p className="text-xl text-white/60 font-sans-body font-light max-w-2xl mx-auto">
            Un proceso claro, transparente y orientado a resultados. Así es como protegemos sus derechos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 max-w-5xl mx-auto text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent z-0 -translate-y-1/2" />
              )}
              <div className="relative z-10 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 group-hover:bg-white/8 backdrop-blur-sm">
                <div className="font-cormorant text-6xl font-light text-gold-gradient opacity-60 mb-6 leading-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif-display font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/60 font-sans-body font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
                {/* Dot pulse at top */}
                <div className="absolute top-6 right-6 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary relative">
                    <div className="absolute inset-0 rounded-full bg-primary" style={{ animation: "timelinePing 2s ease-in-out infinite", animationDelay: `${i * 0.4}s` }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-sans-body font-semibold text-sm tracking-widest uppercase rounded-none hover:bg-gold-light transition-all duration-300 gold-border-glow"
          >
            Contactar Ahora
          </motion.a>
          <motion.a
            href="https://wa.me/584245619862"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-green-500/40 text-green-400 font-sans-body font-medium text-sm tracking-widest uppercase rounded-none hover:bg-green-500/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
