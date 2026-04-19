import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { RevealText } from "@/components/ui/RevealText";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ y: backgroundY, opacity }}
      >
        <img src={heroBg} alt="Justicia y ley" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-40 lg:pt-48 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block mb-8 px-5 py-2 border border-primary/30 rounded-none bg-background/20 backdrop-blur-sm">
              <span className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary/90">
                Excelencia Jurídica
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            <RevealText text="Defendemos tus" delay={0.3} className="block" />
            <RevealText text="derechos, tu libertad" delay={0.4} className="block" />
            <RevealText text="y futuro con" delay={0.5} className="block" />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold-gradient italic font-serif-display font-medium pr-2"
            >
              experiencia
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground font-sans-body font-light leading-relaxed mb-12 max-w-xl opacity-90"
          >
            Soluciones legales estratégicas respaldadas por años de trayectoria. Construimos relaciones basadas en la absoluta transparencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contacto"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-sans-body font-semibold text-xs tracking-[0.2em] uppercase rounded-none hover:bg-gold-light transition-colors duration-500 gold-border-glow"
            >
              Solicitar Asesoría
            </motion.a>
            <motion.a
              whileHover={{ borderBottomColor: "hsl(var(--gold))", color: "hsl(var(--gold))" }}
              href="#servicios"
              className="inline-flex items-center justify-center px-6 py-4 border-b border-transparent text-foreground/80 font-sans-body font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors duration-500"
            >
              Nuestros Servicios
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
