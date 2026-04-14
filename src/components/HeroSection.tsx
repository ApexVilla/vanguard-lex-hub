import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Justicia y ley" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 border border-primary/40 rounded-sm">
              <span className="text-xs font-sans-body font-semibold tracking-[0.25em] uppercase text-primary">
                Abogados de Confianza en Venezuela
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
          >
            Defendemos sus derechos con{" "}
            <span className="text-gold-gradient">experiencia</span> y{" "}
            <span className="text-gold-gradient">compromiso</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground font-sans-body font-light leading-relaxed mb-10 max-w-2xl"
          >
            Soluciones legales estratégicas respaldadas por años de experiencia profesional. Su tranquilidad es nuestra prioridad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300 gold-border-glow"
            >
              Solicitar Asesoría
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-sans-body font-medium text-sm tracking-widest uppercase rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              Nuestros Servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
